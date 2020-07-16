import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { help } from "../routes/otherPages/help/screens/help";
import { firstPage3 } from "../routes/sellerStack/firstPage3/screens/firstPage3";
import { payout } from "../routes/sellerStack/payout/screens/payout";
import { picDownload } from "../routes/sellerStack/picDownload/screens/picDownload";
import { pricePage } from "../routes/sellerStack/pricePage/screens/pricePage";
import { schedulePage } from "../routes/sellerStack/schedulePage/screens/schedulePage";
import { sellerSteps } from "../routes/sellerStack/sellerSteps/screens/sellerSteps";
import { serviceProvider } from "../routes/sellerStack/serviceProvider/screens/serviceProvider";
import { SellerParamList } from "./Tydefs/sellerParamList";
const Stack = createStackNavigator<SellerParamList>();

export const sellerPage = () => (
	<Stack.Navigator
		screenOptions={{ header: () => null, gestureEnabled: false }}
	>
		<Stack.Screen name="Page3" component={firstPage3} />
		<Stack.Screen name="sellerSteps" component={sellerSteps} />
		<Stack.Screen name="schedulePage" component={schedulePage} />
		<Stack.Screen name="pricePage" component={pricePage} />
		<Stack.Screen name="picDownload" component={picDownload} />
		<Stack.Screen name="help" component={help} />
		<Stack.Screen name="payout" component={payout} />
		<Stack.Screen name="serviceProvider" component={serviceProvider} />
	</Stack.Navigator>
);
