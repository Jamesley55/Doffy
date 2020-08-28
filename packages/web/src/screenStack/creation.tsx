import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import LandingPage from "src/routes/landingPage/landing";
import { AboutUs } from "../routes/aboutsUs/aboutUs";
import { PrivacyPolicy } from "../routes/PrivacyPolicyPage/privacyPolicy";
import { TermOfService } from "../routes/termeOfService/termOfService";

const Stack = createStackNavigator();

export const AuthPages = () => (
	<Stack.Navigator
		initialRouteName="LandingPage"
		screenOptions={{ header: () => null, gestureEnabled: false }}
	>
		<Stack.Screen name="LandingPage" component={LandingPage} />
		<Stack.Screen name="AboutUs" component={AboutUs} />
		<Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
		<Stack.Screen name="TermOfService" component={TermOfService} />
	</Stack.Navigator>
);
