import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type TabsParamList = {
	homepage: undefined;
	searchPage: undefined;
	notification: undefined;
	message: undefined;
	NotifDescription: { kaka: string };
	DirectMessage: { kaka: string };
};

export type TabsStackNavProps<T extends keyof TabsParamList> = {
	navigation: StackNavigationProp<TabsParamList, T>;
	route: RouteProp<TabsParamList, T>;
};
