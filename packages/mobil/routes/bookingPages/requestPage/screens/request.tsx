import { BlueButton } from "@doffy/common";
import { FindServiceCalendarQuery } from "@doffy/controller";
import * as React from "react";
import { Alert, NativeModules, SafeAreaView, Text, View } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Checkbox } from "../../../../Component/checkBox";
import { Header } from "../../../../Component/Header";
import { HeaderPicture } from "../../../../Component/headerPicture";
import { HoursList } from "../../../../Component/HoursList";
import { PhotoGalery } from "../../../../Component/PhotosGallery";
import { ScheduleDoffy } from "../../../../Component/ScheduleDoffy";
import { HomeStackNavProps } from "../../../../screenStack/Tydefs/homeParamList";
import { BookingContext } from "../../../../shareFuction/booking";
import { milisecond } from "../../../../shareFuction/convertionMilisecond";
import { Availability } from "../personallComponent/Availability";
import requestPageStyle from "../styles/style";
const { PlatformConstants } = NativeModules;
const deviceType = PlatformConstants.interfaceIdiom;
export function requestPage({
	navigation,
	route,
}: HomeStackNavProps<"requestPage">) {
	const [service, serviceSelected] = React.useState<boolean>(false);
	const [payement, payementSelected] = React.useState<boolean>(false);

	const handleService = (service) => {
		serviceSelected(service);
	};
	const handlePayement = (service) => {
		payementSelected(service);
	};
	const [date, SelectDate] = React.useState<boolean>();
	const [cal, setCalendar] = React.useState<FindServiceCalendarQuery>();

	const [dateArrayTime, SelectDateArrayTime] = React.useState<string[]>();

	const { bookingTime } = React.useContext(BookingContext);
	const { Calendar } = React.useContext(BookingContext);
	React.useEffect(() => {
		Calendar(route.params.id)
			.then((index: any) => {
				setCalendar(index.data);
			})
			.catch((err: any) => {
				console.log(err);
			});
		console.log(cal);
	}, []);
	const onDateSelected = async (date) => {
		const day = date.format("YYYY-MM-DD");
		SelectDate(day);
		const ti = await bookingTime(route.params.id, day);
		SelectDateArrayTime(ti);
	};

	const [time, timePress] = React.useState<boolean>();
	const [currentTime, currentTimePress] = React.useState<string>();

	const [Index, indexPress] = React.useState<number>();
	const { BookingMutation } = React.useContext(BookingContext);

	return (
		<SafeAreaView style={requestPageStyle.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Header navigation={navigation} />
				<HeaderPicture
					profilPic={route.params.profilPic}
					name={route.params.name}
				/>

				<Availability
					adresseVisible={route.params.adresseVisible}
					state={route.params.stateId}
					country={route.params.countryId}
					city={route.params.cityId}
					cal={cal}
					Adresse={route.params.Adresse}
				/>
				<Text style={requestPageStyle.Title}>Photos</Text>
				<PhotoGalery data={route.params.pictureUrl} />
				<View>
					<Text style={requestPageStyle.Title}>Select Service</Text>
					<View style={requestPageStyle.selectService}>
						<Checkbox handle={handleService} />
						<View style={requestPageStyle.typeService}>
							<Text style={requestPageStyle.Text}>{route.params.category}</Text>
							<Text>Average Time: {route.params.averageTime} minute </Text>
						</View>
						<Text style={{ fontSize: 22 }}>{route.params.price}$</Text>
					</View>
					<Text style={requestPageStyle.Title}>Select Date and Time</Text>
					<ScheduleDoffy onDateSelected={onDateSelected} />
					<View style={requestPageStyle.timeSelector}>
						{(dateArrayTime?.length as number) > 0 ? (
							<FlatList
								horizontal={true}
								keyExtractor={(_, index) => index.toString()}
								style={{ alignSelf: "center", marginLeft: 10 }}
								renderItem={({ item, index }) => {
									return (
										<HoursList
											backgroundColor={index === Index && time ? true : false}
											onPress={() => {
												indexPress(index);
												timePress(!time);
												currentTimePress(item as string);
											}}
											text={item as string}
										/>
									);
								}}
								contentContainerStyle={{ justifyContent: "space-between" }}
								data={dateArrayTime as any}
								showsHorizontalScrollIndicator={false}
								// Performance settings
								removeClippedSubviews={true} // Unmount components when outside of window
								initialNumToRender={2} // Reduce initial render amount
								maxToRenderPerBatch={1} // Reduce number in each render batch
								updateCellsBatchingPeriod={100} // Increase time between renders
								windowSize={7} // Reduce the window size
							/>
						) : (
							<Text
								style={{
									marginTop: deviceType === "phone" ? "4%" : "1%",
									textAlign: "center",
									textAlignVertical: "center",
									marginVertical: 5,
								}}
							>
								no avalibility
							</Text>
						)}
					</View>
					<Text style={requestPageStyle.Title}>Payement</Text>

					<View style={requestPageStyle.payementRect}>
						<Checkbox handle={handlePayement} />
						<View style={requestPageStyle.inShop}>
							<Text style={requestPageStyle.Text}> In shop </Text>
						</View>
					</View>

					<BlueButton
						onPress={() => {
							if (currentTime && payement && service) {
								BookingMutation(
									route.params.id,
									date,
									milisecond(currentTime as string)
								);
								console.log("alert marche");
								Alert.alert(
									"",
									"We will send you a notification when the service provider accept your booking",
									[
										{
											text: "OK",
											onPress: () => navigation.navigate("homepage"),
										},
									],
									{ cancelable: false }
								);
								console.log("alert marche");
							} else {
								Alert.alert(
									"",
									"Please select all required information",
									[
										{
											text: "OK",
										},
									],
									{ cancelable: false }
								);
							}
						}}
						Text1="Request an appointment"
						style={requestPageStyle.BlueButton}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
