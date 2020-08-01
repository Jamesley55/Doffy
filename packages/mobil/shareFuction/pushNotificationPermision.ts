import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import * as Permissions from "expo-permissions";
import { Platform } from "react-native";

export const getPushNotificationPermissions = async () => {
	if (Constants.platform?.ios) {
		const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
		if (status !== "granted") {
			const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);

			alert("Sorry, we need Notification permissions to make this work!");
			return false;
		}
	}
	if (Platform.OS === "android") {
		Notifications.setNotificationChannelAsync("default", {
			name: "default",
			importance: Notifications.AndroidImportance.MAX,
			vibrationPattern: [0, 250, 250, 250],
			lightColor: "#FF231F7C",
		});
	}
	return true;
};
