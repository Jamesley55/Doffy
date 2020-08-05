import * as Notifications from "expo-notifications";
import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { AppRegistry, AppState, Vibration } from "react-native";
import { Providers } from "../routes/providers";
import { client } from "./apollo";

let badge = 0;
Notifications.addNotificationResponseReceivedListener(() => {
	console.log("navigation");
});

const subscription = Notifications.addNotificationReceivedListener(
	async (notification) => {
		console.log("notification", notification);
		await handleNotification(notification);
	}
);
const handleNotification = async (notification) => {
	if (
		AppState.currentState === "active" &&
		notification.origin === "received"
	) {
		Notifications.dismissNotificationAsync(notification.notificationId);
	} else {
		await Notifications.setBadgeCountAsync(badge++);
		Vibration.vibrate(30000);
	}
};

export default class Index extends React.PureComponent {
	render() {
		return (
			<ApolloProvider client={client}>
				<Providers />
			</ApolloProvider>
		);
	}
}

AppRegistry.registerComponent("Appname", () => Index);
