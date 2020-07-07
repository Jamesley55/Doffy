import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type SellerParamList = {
	Page3: undefined;
	sellerSteps: undefined;
	schedulePage: undefined;
	pricePage: undefined;
	picDownload: { kaka: string };
	help: undefined;
	payout: undefined;
	serviceProvider: undefined;
};

export type SellerStackNavProps<T extends keyof SellerParamList> = {
	navigation: StackNavigationProp<SellerParamList, T>;
	route: RouteProp<SellerParamList, T>;
};
