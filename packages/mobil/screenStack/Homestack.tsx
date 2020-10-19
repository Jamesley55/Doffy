import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { payement } from "../routes/bookingPages/payementPage/src/screens/payement";
import { requestPage } from "../routes/bookingPages/requestPage/screens/request";
import { HomePage } from "../routes/HomeStack/homePage/screens/homePage";
import { HomeParamList } from "./Tydefs/homeParamList";

const HomeStack = createStackNavigator<HomeParamList>();

export const HomeStackScreen = () => (
	<HomeStack.Navigator
		screenOptions={{
			gestureEnabled: false,
		}}
		headerMode="none"
	>
		<HomeStack.Screen name="homepage" component={HomePage} />
		<HomeStack.Screen name="requestPage" component={requestPage} />
		<HomeStack.Screen name="payement" component={payement} />
	</HomeStack.Navigator>
);
