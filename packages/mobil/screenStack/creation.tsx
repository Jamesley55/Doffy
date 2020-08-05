import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { firstPage } from "../routes/AuthPages/firstPage/screens/firstPage";
import { LoginConnector } from "../routes/AuthPages/login/loginConnector";
import { RegisterConnector } from "../routes/AuthPages/register/registerConnector";
import { serviceHomePage } from "../routes/AuthPages/serviceHomePage/screens/serviceHomePage";
import { welcomePage } from "../routes/AuthPages/welcomePage/screens/welcomePage";
import { AuthParamList } from "./Tydefs/AuthParamList";

const Stack = createStackNavigator<AuthParamList>();

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
