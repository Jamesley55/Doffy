import { Linking, Platform } from "react-native";

export const openMap = async (Adresse: string, city: string, state: string) => {
	console.log("open directions");
	Platform.OS = "ios"
		? await Linking.openURL(
				`http://maps.apple.com/maps?q=${Adresse}, ${city} ${state}`
		  )
		: await Linking.openURL("http://maps.google.com/maps?daddr=");
};
