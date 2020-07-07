import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from "react";
import { payement } from "../routes/bookingPages/payementPage/src/screens/payement";
import { pricePage } from "../routes/bookingPages/pricePage/src/screens/pricePage";
import { help } from "../routes/otherPages/help/src/screens/help";
import { sellerPage } from "./seller";
import { tabs } from "./Tabs";
import { DrawerParamList } from "./Tydefs/drawerParamList";

const Drawer = createDrawerNavigator<DrawerParamList>();

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
		<Drawer.Screen name="becomeAseller" component={sellerPage} />
		<Drawer.Screen name="paymentMethode" component={payement} />
		<Drawer.Screen name="help" component={help} />
		<Drawer.Screen name="pricePage" component={pricePage} />
	</Drawer.Navigator>
);
