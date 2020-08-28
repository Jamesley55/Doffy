/* eslint-disable @typescript-eslint/no-unused-expressions */
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import AppLoading from "expo/build/launch/AppLoading";
import * as React from "react";
import { ActivityIndicator } from "react-native";
import { RouteProps } from "react-router-native";
import { AuthPages } from "../screenStack/creation";

const linking = {
	prefixes: ["https://realDoffy.com", "https://"],
	config: {
		screens: {
			LandingPage: "/",
			AboutUs: "/AboutUs",
			PrivacyPolicy: "/PrivacyPolicy",
			TermOfService: "/TermOfService",
		},
	},
};

const getFont = () =>
	Font.loadAsync({
		"armata-regular": require("../assets/fonts/armata-regular.ttf"),
		"alef-regular": require("../assets/fonts/alef-regular.ttf"),
		"arial-regular": require("../assets/fonts/arial-regular.ttf"),
		"calibri-bold": require("../assets/fonts/calibri-bold.ttf"),
		"roboto-700": require("../assets/fonts/roboto-700.ttf"),
		"roboto-regular": require("../assets/fonts/roboto-regular.ttf"),
	});

export const Routes: React.FC<RouteProps> = ({}) => {
	// tslint:disable-next-line: no-unused-expression
	<AppLoading startAsync={getFont} />;
	return (
		<NavigationContainer linking={linking} fallback={<ActivityIndicator />}>
			{AuthPages()}
		</NavigationContainer>
	);
};
