import { useCreateServiceMutation } from "@doffy/controller/src/generated/graphql-hooks";
import * as React from "react";
import { milisecond } from "./convertionMilisecond";

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
	Picture: (profilPicture: string, workPicture: string) => void;
	createService: () => void;
}>({
	categorie: null,
	ServiceCategorie: () => {},
	information: () => {},
	schedule: () => {},
	Picture: () => {},
	createService: () => {},
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
	const [name, setBizzName] = React.useState<string | null | undefined>(null);
	const [description, setDescription] = React.useState<
		string | null | undefined
	>(null);
	const [price, setMomey] = React.useState<number | null | undefined>(null);
	const [averageTime, setaverageTime] = React.useState<number>(0);
	const [Adress, setAddy] = React.useState<string | null | undefined>(null);
	const [cityId, setcity] = React.useState<string | null | undefined>(null);
	const [stateId, setstate] = React.useState<string | null | undefined>(null);
	const [countryId, setcountry] = React.useState<string | null | undefined>(
		null
	);
	const [adresseVisible, setAccesible] = React.useState<
		boolean | null | undefined
	>(null);

	// Schedule day
	const [monday, setMonday] = React.useState<boolean>(false);
	const [tuesday, setTuesday] = React.useState<boolean>(false);
	const [wednesday, setWednesday] = React.useState<boolean>(false);
	const [thursday, setThursday] = React.useState(false);
	const [friday, setFriday] = React.useState(false);
	const [saturday, setSaturday] = React.useState(false);
	const [sunday, setsunday] = React.useState(false);
	const [mondayStart, setMondayStart] = React.useState("9:05");
	const [tuesdayStart, setTuesdayStart] = React.useState("9:05");
	const [wednesdayStart, setWednesdayStart] = React.useState("9:05");
	const [thursdayStart, setThursdayStart] = React.useState("9:05");
	const [fridayStart, setFridayStart] = React.useState("9:05");
	const [saturdayStart, setSaturdayStart] = React.useState("9:05");
	const [sundayStart, setSundayStart] = React.useState("9:05");
	const [mondayEnd, setMondayEnd] = React.useState("17:05");
	const [tuesdayEnd, setTuesdayEnd] = React.useState("17:05");
	const [wednesdayEnd, setWednesdayEnd] = React.useState("17:05");
	const [thursdayEnd, setThursdayEnd] = React.useState("17:05");
	const [fridayEnd, setFridayEnd] = React.useState("17:05");
	const [saturdayEnd, setSaturdayEnd] = React.useState("17:05");
	const [sundayEnd, setsundayEnd] = React.useState("17:05");

	const [profilPicture, setlinkProfilPicture] = React.useState<string>("");
	const [picturesUrl, setlinkWorkPicture] = React.useState<string>("");

	React.useEffect(() => {
		console.log("monday", averageTime);
	}, [averageTime]);
	const [createService] = useCreateServiceMutation();
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
					setaverageTime(Time);
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
				Picture: (ProfilPicture: string, workPicture: string) => {
					setlinkProfilPicture(ProfilPicture);
					setlinkWorkPicture(workPicture);
				},
				createService: async () => {
					try {
						await createService({
							variables: {
								inputService: {
									name: name as string,
									category: categorie as string,
									description: description as string,
									coutryId: countryId as string,
									stateId: stateId as string,
									cityId: cityId as string,
									Adress: Adress as string,
									price: price as number,
									profilPicture,
									picturesUrl: picturesUrl as string,
									adresseVisible: adresseVisible as boolean,
									averageTime: averageTime * 60000, // to convert to average time in minute to miliseconds,
								},
								ScheduleBool: {
									monday,
									tuesday,
									wednesday,
									thusday: thursday,
									friday,
									saturday,
									sunday,
								},
								ScheduleTime: {
									mondaySchedule: {
										StartTime: milisecond(mondayStart), // convert the hours select in miliseconds
										EndTime: milisecond(mondayEnd),
									},
									tuesdaySchedule: {
										StartTime: milisecond(tuesdayStart),
										EndTime: milisecond(tuesdayEnd),
									},
									wednesdaySchedule: {
										StartTime: milisecond(wednesdayStart),
										EndTime: milisecond(wednesdayEnd),
									},
									thursdaySchedule: {
										StartTime: milisecond(thursdayStart),
										EndTime: milisecond(thursdayEnd),
									},
									fridaySchedule: {
										StartTime: milisecond(fridayStart),
										EndTime: milisecond(fridayEnd),
									},
									saturdaySchedule: {
										StartTime: milisecond(saturdayStart),
										EndTime: milisecond(saturdayEnd),
									},
									sundaySchedule: {
										StartTime: milisecond(sundayStart),
										EndTime: milisecond(sundayEnd),
									},
								},
							},
						});
					} catch (e) {
						console.log(e.networkError.result.errors);
					}
				},
			}}
		>
			{children}
		</ServiceCreationContext.Provider>
	);
};
