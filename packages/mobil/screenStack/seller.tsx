import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import { firstPage3 } from "../routes/firstPage3/src/screens/firstPage3";
import { help } from "../routes/help/src/screens/help";
import { payout } from "../routes/payout/src/screens/payout";
import { picDownload } from "../routes/picDownload/src/screens/picDownload";
import { pricePage } from "../routes/pricePage/src/screens/pricePage";
import { schedulePage } from "../routes/schedulePage/src/screens/schedulePage";
import { sellerSteps } from "../routes/sellerSteps/src/screens/sellerSteps";
import { serviceProvider } from "../routes/serviceProvider/src/screens/serviceProvider";
const Stack = createStackNavigator();

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
