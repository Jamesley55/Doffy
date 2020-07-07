import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type DrawerParamList = {
	home: undefined;
	becomeAseller: undefined;
	paymentMethode: undefined;
	help: undefined;
	pricePage: undefined;
};

export type DrawerStackNavProps<T extends keyof DrawerParamList> = {
	navigation: StackNavigationProp<DrawerParamList, T>;
	route: RouteProp<DrawerParamList, T>;
};
