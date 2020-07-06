import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { firstPage } from "../routes/AuthPages/firstPage/src/screens/firstPage";
import { LoginConnector } from "../routes/AuthPages/login/src/loginConnector";
import { RegisterConnector } from "../routes/AuthPages/register/src/registerConnector";
import { serviceHomePage } from "../routes/AuthPages/serviceHomePage/src/screens/serviceHomePage";
import { welcomePage } from "../routes/AuthPages/welcomePage/src/screens/welcomePage";

const Stack = createStackNavigator();

export const AuthPages = () => (
	<Stack.Navigator
		screenOptions={{ header: () => null, gestureEnabled: false }}
	>
		<Stack.Screen name="firstPage" component={firstPage} />
		<Stack.Screen name="welcomePage" component={welcomePage} />
		<Stack.Screen name="register" component={RegisterConnector} />
		<Stack.Screen name="login" component={LoginConnector} />
		<Stack.Screen name="serviceHomePage" component={serviceHomePage} />
	</Stack.Navigator>
);
