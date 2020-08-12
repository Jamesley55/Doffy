import * as React from "react";
import { ApolloProvider } from "react-apollo";
import Onesignal from "react-native-onesignal";
import { Providers } from "../routes/providers";
import { client } from "./apollo";

export default class Index extends React.PureComponent {
	constructor(properties) {
		super(properties);
		//Remove this method to stop OneSignal Debugging
		Onesignal.setLogLevel(6, 0);

		// Replace 'YOUR_ONESIGNAL_APP_ID' with your OneSignal App ID.
		Onesignal.init("75ebe6f4-83ab-4d1e-b410-675fe0933122", {
			kOSSettingsKeyAutoPrompt: false,
			kOSSettingsKeyInAppLaunchURL: false,
			kOSSettingsKeyInFocusDisplayOption: 2,
		});
		Onesignal.inFocusDisplaying(2); // Controls what should happen if a notification is received while the app is open. 2 means that the notification will go directly to the device's notification center.

		// The promptForPushNotifications function code will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step below)
		// OneSignal.promptForPushNotificationsWithUserResponse(myiOSPromptCallback);

		Onesignal.addEventListener("received", this.onReceived);
		Onesignal.addEventListener("opened", this.onOpened);
		Onesignal.addEventListener("ids", this.onIds);
	}
	componentWillUnmount() {
		Onesignal.removeEventListener("received", this.onReceived);
		Onesignal.removeEventListener("opened", this.onOpened);
		Onesignal.removeEventListener("ids", this.onIds);
	}

	onReceived(notification) {
		console.log("Notification received: ", notification);
	}

	onOpened(openResult) {
		console.log("Message: ", openResult.notification.payload.body);
		console.log("Data: ", openResult.notification.payload.additionalData);
		console.log("isActive: ", openResult.notification.isAppInFocus);
		console.log("openResult: ", openResult);
	}

	onIds(device) {
		console.log("Device info: ", device);
	}

	render() {
		let status = Onesignal.checkPermissions((permision) => {
			console.log(permision);
			return permision;
		});

		console.log("status", status);
		return (
			<ApolloProvider client={client}>
				<Providers />
			</ApolloProvider>
		);
	}
}
