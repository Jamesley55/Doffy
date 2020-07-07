import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { searchPage } from "../routes/HomeStack/searchPage/src/screens/searchPage";
import { SearchParamList } from "./Tydefs/SearchParamList";

const profilStack = createStackNavigator<SearchParamList>();

export const SearchStackScreen = () => (
	<profilStack.Navigator screenOptions={{ header: () => null }}>
		<profilStack.Screen name="search" component={searchPage} />
	</profilStack.Navigator>
);
