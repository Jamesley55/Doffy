import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { HomePage } from "../routes/homePage/src/screens//homePage";
import { locationPage } from "../routes/locationPage/src/screens/location";
import { payement } from "../routes/payementPage/src/screens/payement";
import { requestPage } from "../routes/requestPage/src/screens/request";

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
