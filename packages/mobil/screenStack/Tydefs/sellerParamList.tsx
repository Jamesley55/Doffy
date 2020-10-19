import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// tslint:disable-next-line: interface-over-type-literal
export type SellerParamList = {
	Page3: undefined;
	sellerSteps: undefined;
	schedulePage: undefined;
	InformationPage: undefined;
	picDownload: { kaka: string };
	help: undefined;
	payout: undefined;
	serviceProvider: undefined;
	home: undefined;
};

export interface SellerStackNavProps<T extends keyof SellerParamList> {
	navigation: StackNavigationProp<SellerParamList, T>;
	route: RouteProp<SellerParamList, T>;
}
