import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type AuthParamList = {
	firstPage: undefined;
	welcomePage: undefined;
	register: undefined;
	login: undefined;
	serviceHomePage: undefined;
};

export type AuthStackNavProps<T extends keyof AuthParamList> = {
	navigation: StackNavigationProp<AuthParamList, T>;
	route: RouteProp<AuthParamList, T>;
};
