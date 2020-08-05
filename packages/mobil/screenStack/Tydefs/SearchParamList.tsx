import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type SearchParamList = {
	search: undefined;
};

export type SearchStackNavProps<T extends keyof SearchParamList> = {
	navigation: StackNavigationProp<SearchParamList, T>;
	route: RouteProp<SearchParamList, T>;
};
