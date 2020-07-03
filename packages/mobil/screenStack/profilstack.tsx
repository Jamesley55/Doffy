import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { searchPage } from "../routes/searchPage/src/screens/searchPage";

const profilStack = createStackNavigator();

export const SearchStackScreen = () => (
	<profilStack.Navigator screenOptions={{ header: () => null }}>
		<profilStack.Screen name="search" component={searchPage} />
	</profilStack.Navigator>
);
