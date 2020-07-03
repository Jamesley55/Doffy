import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import { help } from "../routes/help/src/screens/help";
import { payement } from "../routes/payementPage/src/screens/payement";
import { pricePage } from "../routes/pricePage/src/screens/pricePage";
import { sellerPage } from "./seller";
import { tabs } from "./Tabs";

const Drawer = createDrawerNavigator();

export const drawer = () => (
	<Drawer.Navigator
		drawerStyle={{
			width: "65%",
		}}
		drawerContentOptions={{
			activeTintColor: "#e91e63",
			itemStyle: { marginVertical: 10 },
		}}
	>
		<Drawer.Screen name="home" component={tabs} />
		<Drawer.Screen name="become a seller" component={sellerPage} />
		<Drawer.Screen name="payment Methode" component={payement} />
		<Drawer.Screen name="help" component={help} />
		<Drawer.Screen name="pricePage" component={pricePage} />
	</Drawer.Navigator>
);
