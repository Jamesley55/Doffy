import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { firstPage } from "../routes/firstPage/src/screens/firstPage";
import { login } from "../routes/login/src/screens/login";
import { RegisterConnector } from "../routes/register/src/registerConnector";
import { serviceHomePage } from "../routes/serviceHomePage/src/screens/serviceHomePage";
import { welcomePage } from "../routes/welcomePage/src/screens/welcomePage";

const Stack = createStackNavigator();

export const creationPage = () => (
	<Stack.Navigator
		screenOptions={{ header: () => null, gestureEnabled: false }}
	>
		<Stack.Screen name="firstPage" component={firstPage} />
		<Stack.Screen name="welcomePage" component={welcomePage} />
		<Stack.Screen name="register" component={RegisterConnector} />
		<Stack.Screen name="login" component={login} />
		<Stack.Screen name="serviceHomePage" component={serviceHomePage} />
	</Stack.Navigator>
);
