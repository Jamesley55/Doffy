import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { Appclone } from "src/App copy";
import App from "../App";

const Stack = createStackNavigator();

export const AuthPages = () => (
	<Stack.Navigator
		screenOptions={{ header: () => null, gestureEnabled: false }}
	>
		<Stack.Screen name="serviceHomePage" component={App} />
		<Stack.Screen name="serviceHomePageclone" component={Appclone} />
	</Stack.Navigator>
);
