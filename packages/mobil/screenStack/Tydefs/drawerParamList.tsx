import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { NavigationParams } from "react-navigation";
export type DrawerParamList = {
	home: undefined;
	becomeAseller: undefined;
	paymentMethode: undefined;
	help: undefined;
	pricePage: undefined;
} & NavigationParams;

export type DrawerStackNavProps<T extends keyof DrawerParamList> = {
	navigation: StackNavigationProp<DrawerParamList, T>;
	route: RouteProp<DrawerParamList, T>;
};
