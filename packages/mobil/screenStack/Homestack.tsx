import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { locationPage } from "../routes/bookingPages/locationPage/src/screens/location";
import { payement } from "../routes/bookingPages/payementPage/src/screens/payement";
import { requestPage } from "../routes/bookingPages/requestPage/src/screens/request";
import { HomePage } from "../routes/HomeStack/homePage/src/screens/homePage";

const HomeStack = createStackNavigator();

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
		<HomeStack.Screen name="location" component={locationPage} />
	</HomeStack.Navigator>
);
