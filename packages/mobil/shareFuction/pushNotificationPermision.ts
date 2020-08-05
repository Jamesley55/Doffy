import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { Platform } from "react-native";

export async function registerForPushNotificationsAsync() {
	let token;
	if (Constants.isDevice) {
		const { status: existingStatus } = await Permissions.getAsync(
			Permissions.NOTIFICATIONS
		);
		let finalStatus = existingStatus;
		if (existingStatus !== "granted") {
			const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
			finalStatus = status;
		}
		if (finalStatus !== "granted") {
			alert("Failed to get push token for push notification!");
			return;
		}
		token = (await Notifications.getExpoPushTokenAsync()).data;
	} else {
		// alert("Must use physical device for Push Notifications");
	}

	if (Platform.OS === "android") {
		Notifications.setNotificationChannelAsync("default", {
			name: "default",
			importance: Notifications.AndroidImportance.MAX,
			vibrationPattern: [0, 250, 250, 250],
			lightColor: "#FF231F7C",
		});
	}
	const device = await Notifications.getDevicePushTokenAsync();
	return token;
}

export const sendNotif = async (title: string, body: string | undefined) => {
	Notifications.setNotificationHandler({
		handleNotification: async () => ({
			shouldShowAlert: true,
			shouldPlaySound: false,
			shouldSetBadge: true,
		}),
	});

	// Second, call the method
	Notifications.scheduleNotificationAsync({
		identifier: "Doffy",
		content: {
			title,
			body,
			autoDismiss: true,
		},
		trigger: null,
	});
	await Notifications.setBadgeCountAsync(6);
};
