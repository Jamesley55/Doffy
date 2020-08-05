import {
	AntDesign,
	Ionicons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import {
	DirectMessage,
	Message,
} from "../routes/HomeStack/Message/screen/Message";
import {
	NotifDescription,
	Notification,
} from "../routes/HomeStack/Notification/screen/notification";
import { HomeStackScreen } from "./Homestack";
import { TabsParamList } from "./Tydefs/tabsParamsList";

const Tabs = createBottomTabNavigator<TabsParamList>();
const Stack = createStackNavigator();

export const Notif = () => (
	<Stack.Navigator screenOptions={{ gestureEnabled: false }}>
		<Stack.Screen name="notification" component={Notification} />
		<Stack.Screen name="NotifDescription" component={NotifDescription} />
	</Stack.Navigator>
);
export const MSG = () => (
	<Stack.Navigator screenOptions={{ gestureEnabled: false }}>
		<Stack.Screen name="message" component={Message} />
		<Stack.Screen name="DirectMessage" component={DirectMessage} />
	</Stack.Navigator>
);
export const tabs = () => (
	<Tabs.Navigator
		tabBarOptions={{
			activeTintColor: "tomato",
			inactiveTintColor: "gray",
		}}
		screenOptions={({ route }) => ({
			tabBarIcon: ({ color, size }) => {
				let iconName: string = "";

				if (route.name === "homepage") {
					iconName = "home";
					return <Ionicons name={"ios-home"} size={size} color={color} />;
				} else if (route.name === "searchPage") {
					iconName = "search";
					return <Ionicons name={"md-search"} size={size} color={color} />;
				} else if (route.name === "notification") {
					iconName = "notification";
					return (
						<MaterialCommunityIcons
							name={"notification-clear-all"}
							size={size}
							color={color}
						/>
					);
				} else if (route.name === "message") {
					iconName = "message";
					return (
						<MaterialCommunityIcons
							name={"message-reply"}
							size={size}
							color={color}
						/>
					);
				}

				// You can return any component that you like here!
				return <AntDesign name={iconName} size={size} color={color} />;
			},
		})}
	>
		<Tabs.Screen name="homepage" component={HomeStackScreen} />
		{
			// <Tabs.Screen name="searchPage" component={SearchStackScreen} />
		}
		<Tabs.Screen name="notification" component={Notif} />
		{
			// <Tabs.Screen name="message" component={MSG} />
		}
	</Tabs.Navigator>
);
