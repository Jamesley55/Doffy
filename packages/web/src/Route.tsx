import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { ActivityIndicator } from "react-native";
import { RouteProps } from "react-router-native";
import { AuthPages } from "./screenStack/creation";

const linking = {
	prefixes: ["https://realDoffy.com", "https://"],
	config: {
		screens: {
			serviceHomePage: "",
			serviceHomePageclone: "/serviceHomePageclone",
			Settings: ":id/blog",
		},
	},
};

export const Routes: React.FC<RouteProps> = ({}) => {
	return (
		<NavigationContainer linking={linking} fallback={<ActivityIndicator />}>
			{AuthPages()}
		</NavigationContainer>
	);
};
