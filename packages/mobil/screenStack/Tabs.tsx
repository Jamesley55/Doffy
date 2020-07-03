import {
	AntDesign,
	Ionicons,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";
import { Message } from "../routes/Message/Message";
import { Notification } from "../routes/Notification/notification";
import { HomeStackScreen } from "./Homestack";
import { SearchStackScreen } from "./profilstack";

const Tabs = createBottomTabNavigator();

export const tabs = () => (
	<Tabs.Navigator
		tabBarOptions={{ activeTintColor: "tomato", inactiveTintColor: "gray" }}
		screenOptions={({ route }) => ({
			tabBarIcon: ({ color, size }) => {
				let iconName: string;

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
		<Tabs.Screen name="searchPage" component={SearchStackScreen} />
		<Tabs.Screen name="notification" component={Notification} />
		<Tabs.Screen name="message" component={Message} />
	</Tabs.Navigator>
);
