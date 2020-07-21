import {
	useCreateServiceMutation,
	useLogoutMutation,
} from "@doffy/controller/src/generated/graphql-hooks";
import { SecureStore } from "expo";
import * as React from "react";

type User = null | string | undefined;

export const ServiceCreationContext = React.createContext<{
	categorie: string | null | undefined;
	ServiceCategorie: (categorie: any) => void;
	information: (
		businessName: string,
		shortDescription: string,
		price: number,
		time: number,
		Adresse: string,
		city: string,
		State: string,
		country: string,
		accesible: boolean
	) => void;
	logout: () => void;
}>({
	categorie: null,
	ServiceCategorie: () => {},
	information: () => {},
	logout: () => {},
});

interface serviceCreationProps {}

export const ServiceCreationProviders: React.FC<serviceCreationProps> = ({
	children,
}) => {
	const [categorie, setCategory] = React.useState<string | null | undefined>(
		null
	);
	const [bizzName, setBizzName] = React.useState<string | null | undefined>(
		null
	);
	const [description, setDescription] = React.useState<
		string | null | undefined
	>(null);
	const [money, setMomey] = React.useState<number | null | undefined>(null);
	const [minutes, setMinute] = React.useState<number | null | undefined>(null);
	const [addy, setAddy] = React.useState<string | null | undefined>(null);
	const [city, setcity] = React.useState<string | null | undefined>(null);
	const [state, setstate] = React.useState<string | null | undefined>(null);
	const [country, setcountry] = React.useState<string | null | undefined>(null);
	const [accesible, setAccesible] = React.useState<boolean | null | undefined>(
		null
	);

	React.useEffect(() => {
		console.log("categorie", categorie);
	}, [
		categorie,
		bizzName,
		money,
		minutes,
		addy,
		city,
		state,
		country,
		accesible,
	]);

	const [registerMutation] = useCreateServiceMutation();
	const [logoutMutation] = useLogoutMutation();
	return (
		<ServiceCreationContext.Provider
			value={{
				categorie,
				ServiceCategorie: (c: any) => {
					setCategory(c);
				},
				information: (
					BusinessName: string,
					ShortDescription: string,
					Price: number,
					Time: number,
					Adresse: string,
					City: string,
					State: string,
					Country: string,
					Accesible: boolean
				) => {
					setBizzName(BusinessName);
					setDescription(ShortDescription);
					setMomey(Price);
					setMinute(Time);
					setAddy(Adresse);
					setcity(City);
					setstate(State);
					setcountry(Country);
					setAccesible(Accesible);
					console.log("inside context", Adresse);
				},
				logout: async () => {
					logoutMutation();
					await SecureStore.deleteItemAsync("sid");
				},
			}}
		>
			{children}
		</ServiceCreationContext.Provider>
	);
};
