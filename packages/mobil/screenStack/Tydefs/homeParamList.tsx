import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

export type HomeParamList = {
	homepage: undefined;
	requestPage: {
		id: string;
		description: string;
		Adresse: string;
		countryId: string;
		stateId: string;
		cityId: string;
		ownerId: string;
		adresseVisible: boolean;
		profilPic: string;
		pictureUrl: string;
		name: string;
		price: number;
	};
	payement: undefined;
	location: undefined;
};

export type HomeStackNavProps<T extends keyof HomeParamList> = {
	navigation: StackNavigationProp<HomeParamList, T>;
	route: RouteProp<HomeParamList, T>;
};
