import {
	useCreateServiceMutation,
	useLogoutMutation,
} from "@doffy/controller/src/generated/graphql-hooks";
import { SecureStore } from "expo";
import * as React from "react";

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
	schedule: (
		monday: boolean,
		tuesday: boolean,
		wednesday: boolean,
		thursday: boolean,
		friday: boolean,
		saturday: boolean,
		sunday: boolean,
		mondayStart: string,
		tuesdayStart: string,
		wednesdayStart: string,
		thursdayStart: string,
		fridayStart: string,
		saturdayStart: string,
		sundayStart: string,
		mondayEnd: string,
		tuesdayEnd: string,
		wednesdayEnd: string,
		thursdayEnd: string,
		fridayEnd: string,
		saturdayEnd: string,
		sundayEnd: string
	) => void;
	logout: () => void;
}>({
	categorie: null,
	ServiceCategorie: () => {},
	information: () => {},
	schedule: () => {},
	logout: () => {},
});

interface serviceCreationProps {}

export const ServiceCreationProviders: React.FC<serviceCreationProps> = ({
	children,
}) => {
	// categorie of service
	const [categorie, setCategory] = React.useState<string | null | undefined>(
		null
	);
	// information
	const [, setBizzName] = React.useState<string | null | undefined>(null);
	const [, setDescription] = React.useState<string | null | undefined>(null);
	const [, setMomey] = React.useState<number | null | undefined>(null);
	const [, setMinute] = React.useState<number | null | undefined>(null);
	const [, setAddy] = React.useState<string | null | undefined>(null);
	const [, setcity] = React.useState<string | null | undefined>(null);
	const [, setstate] = React.useState<string | null | undefined>(null);
	const [, setcountry] = React.useState<string | null | undefined>(null);
	const [, setAccesible] = React.useState<boolean | null | undefined>(null);

	// Schedule day
	const [monday, setMonday] = React.useState<boolean>(false);
	const [, setTuesday] = React.useState(false);
	const [, setWednesday] = React.useState(false);
	const [, setThursday] = React.useState(false);
	const [, setFriday] = React.useState(false);
	const [, setSaturday] = React.useState(false);
	const [, setsunday] = React.useState(false);
	const [mondayStart, setMondayStart] = React.useState("9:05");
	const [, setTuesdayStart] = React.useState("9:05");
	const [, setWednesdayStart] = React.useState("9:05");
	const [, setThursdayStart] = React.useState("9:05");
	const [, setFridayStart] = React.useState("9:05");
	const [, setSaturdayStart] = React.useState("9:05");
	const [, setSundayStart] = React.useState("9:05");
	const [, setMondayEnd] = React.useState("17:05");
	const [, setTuesdayEnd] = React.useState("17:05");
	const [, setWednesdayEnd] = React.useState("17:05");
	const [, setThursdayEnd] = React.useState("17:05");
	const [, setFridayEnd] = React.useState("17:05");
	const [, setSaturdayEnd] = React.useState("17:05");
	const [, setsundayEnd] = React.useState("17:05");

	React.useEffect(() => {
		console.log("monday", mondayStart);
	}, [monday]);
	const [] = useCreateServiceMutation();
	const [logoutMutation] = useLogoutMutation();
	return (
		<ServiceCreationContext.Provider
			value={{
				categorie,
				ServiceCategorie: (c: any) => {
					setCategory(c);
				},
				// the first letter of each argument need to be in Capital letter
				// to avoid confusion between the state and the argument wich have the same name
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
				// the first letter of each argument need to be in Capital letter
				// to avoid confusion between the state and the argument wich have the same name
				schedule: (
					Monday: boolean,
					Tuesday: boolean,
					Wednesday: boolean,
					Thursday: boolean,
					Friday: boolean,
					Saturday: boolean,
					Sunday: boolean,
					MondayStart: string,
					TuesdayStart: string,
					WednesdayStart: string,
					ThursdayStart: string,
					FridayStart: string,
					SaturdayStart: string,
					SundayStart: string,
					MondayEnd: string,
					TuesdayEnd: string,
					WednesdayEnd: string,
					ThursdayEnd: string,
					FridayEnd: string,
					SaturdayEnd: string,
					SundayEnd: string
				) => {
					setMonday(Monday);
					setTuesday(Tuesday);
					setWednesday(Wednesday);
					setThursday(Thursday);
					setFriday(Friday);
					setSaturday(Saturday);
					setsunday(Sunday);
					setMondayStart(MondayStart);
					setTuesdayStart(TuesdayStart);
					setWednesdayStart(WednesdayStart);
					setThursdayStart(ThursdayStart);
					setFridayStart(FridayStart);
					setSaturdayStart(SaturdayStart);
					setSundayStart(SundayStart);
					setMondayEnd(MondayEnd);
					setTuesdayEnd(TuesdayEnd);
					setWednesdayEnd(WednesdayEnd);
					setThursdayEnd(ThursdayEnd);
					setFridayEnd(FridayEnd);
					setSaturdayEnd(SaturdayEnd);
					setsundayEnd(SundayEnd);
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
