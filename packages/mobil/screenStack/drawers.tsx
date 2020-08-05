import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import { NativeModules } from "react-native";
import { help } from "../routes/otherPages/help/screens/help";
import { sellerPage } from "./seller";
import { tabs } from "./Tabs";
import { DrawerParamList } from "./Tydefs/drawerParamList";
const Drawer = createDrawerNavigator<DrawerParamList>();

const { PlatformConstants } = NativeModules;
const deviceType = PlatformConstants.interfaceIdiom;
export const drawer = () => (
	<Drawer.Navigator
		drawerStyle={{
			width: deviceType === "phone" ? "65%" : "40%",
		}}
		drawerContentOptions={{
			activeTintColor: "#e91e63",
			itemStyle: { marginVertical: 10 },
		}}
	>
		<Drawer.Screen name="home" component={tabs} />
		<Drawer.Screen
			name="becomeAseller"
			component={sellerPage}
			options={{ title: "become A seller", unmountOnBlur: true }}
		/>
		<Drawer.Screen name="help" component={help} />
	</Drawer.Navigator>
);
