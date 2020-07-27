import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { Image, ImageBackground, SafeAreaView, Text, View } from "react-native";
import {
	FlatList,
	ScrollView,
	TouchableOpacity,
} from "react-native-gesture-handler";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { BlueButton } from "../../../../Component/BlueBotton";
import { Checkbox } from "../../../../Component/checkBox";
import { HoursList } from "../../../../Component/HoursList";
import { PhotoGalery } from "../../../../Component/PhotosGallery";
import { HomeStackNavProps } from "../../../../screenStack/Tydefs/homeParamList";
import { requestPageStyle } from "../styles/style";
import CalendarStrip from "./fuckedupImport";
const moment = require("moment");

export function requestPage({
	navigation,
	route,
}: HomeStackNavProps<"requestPage">) {
	const handleConfirm = () => {
		console.log("that's date");
	};

	const onDateSelected = (date) => {
		console.log(date.format("YYYY-MM-DD"));
	};

	const [time, timePress] = React.useState<boolean>();
	const [Index, indexPress] = React.useState<number>();

	return (
		<SafeAreaView style={requestPageStyle.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={requestPageStyle.Row}>
					<EntypoIcon
						name="arrow-left"
						style={requestPageStyle.icon2}
						onPress={() => {
							navigation.goBack();
						}}
					/>
					<Image
						source={require("../../../../logo/LogoJamesleyApp.png")}
						resizeMode="contain"
						style={requestPageStyle.image1}
					/>

					<MaterialCommunityIconsIcon
						name="account"
						style={requestPageStyle.icon3}
						onPress={() => {
							navigation.openDrawer();
						}}
					/>
				</View>
				<View style={requestPageStyle.rect}>
					<ImageBackground
						style={{
							flex: 1,
							width: "100%",
							height: "100%",
						}}
						source={{ uri: route.params.profilPic }}
					>
						<View style={requestPageStyle.Row}>
							<View
								style={{
									backgroundColor: "white",
									height: 40,
									width: 100,
									borderRadius: 20,
									shadowOffset: {
										height: 1,
										width: 0,
									},
									shadowColor: "#000",
									shadowOpacity: 0.35,
									shadowRadius: 5,
								}}
							>
								<Text style={[requestPageStyle.Title, { textAlign: "center" }]}>
									{route.params.name}
								</Text>
							</View>
							<TouchableOpacity>
								<MaterialCommunityIconsIcon
									name="fire"
									style={[requestPageStyle.icon4]}
								/>
							</TouchableOpacity>
						</View>
					</ImageBackground>
				</View>

				<View style={{ flex: 1 }}>
					<Text style={[requestPageStyle.Title, { textAlign: "center" }]}>
						{route.params.adresseVisible ? "Location & hours" : "Availibility"}
					</Text>
					<ImageBackground
						style={requestPageStyle.map}
						source={
							route.params.adresseVisible
								? require("../Images/Maps.jpg")
								: require("../Images/Open.jpg")
						}
					>
						<LinearGradient
							// Background Linear Gradient
							colors={["black", "transparent"]}
							style={{
								position: "absolute",
								top: 0,
								bottom: "100%",
								left: 0,
								right: 0,
								width: "100%",
								height: "100%",
							}}
							start={[0, 0.2]}
							end={[0.5, 0]}
						>
							<View>
								{route.params.adresseVisible && (
									<View
										style={{
											flexDirection: "row",
											justifyContent: "space-between",
											marginTop: 5,
										}}
									>
										<View>
											<Text style={{ color: "white" }}>
												Adress: {route.params.Adresse}
											</Text>
											<Text style={{ color: "white" }}>
												{route.params.cityId},{route.params.stateId}
											</Text>
											<Text style={{ color: "white" }}>
												{route.params.countryId}
											</Text>
										</View>
										<TouchableOpacity
											style={{
												backgroundColor: "rgba(230, 230, 230,1)",
												height: 50,
												width: 150,
												marginRight: 10,
												borderRadius: 100,
											}}
										>
											<Text
												style={{
													textAlign: "center",
													fontSize: 12,
													marginTop: "10%",
												}}
											>
												open in Google maps
											</Text>
										</TouchableOpacity>
									</View>
								)}
								<Text style={{ color: "white" }}>Monday</Text>
								<Text style={{ color: "white" }}>Tuesday</Text>
								<Text style={{ color: "white" }}>Wednesday</Text>
								<Text style={{ color: "white" }}>Thursday</Text>
								<Text style={{ color: "white" }}>Friday</Text>
								<Text style={{ color: "white" }}>Saturday</Text>
								<Text style={{ color: "white" }}>Sunday</Text>
							</View>
						</LinearGradient>
					</ImageBackground>
				</View>
				<Text
					style={[
						requestPageStyle.Title,
						{ marginTop: 30, textAlign: "center", marginBottom: 30 },
					]}
				>
					Photos
				</Text>
				<PhotoGalery data={route.params.pictureUrl} />
				<Text
					style={[
						requestPageStyle.Title,
						{ marginTop: 30, textAlign: "center", marginBottom: 30 },
					]}
				>
					Select Service
				</Text>
				<View
					style={{
						width: "100%",
						height: 40,
						backgroundColor: "white",
						justifyContent: "space-between",
						flexDirection: "row",
					}}
				>
					<Checkbox handle={handleConfirm} />
					<View style={{ width: 300 }}>
						<Text style={requestPageStyle.Text}>Type of service</Text>
						<Text>average time of service </Text>
					</View>
					<Text style={{ fontSize: 22 }}>{route.params.price}$</Text>
				</View>
				<Text
					style={[
						requestPageStyle.Title,
						{ marginTop: 20, textAlign: "center", marginBottom: 20 },
					]}
				>
					Select Date and Time
				</Text>
				<CalendarStrip
					minDate={moment()}
					showMonth={true}
					scrollable
					calendarAnimation={{ type: "sequence", duration: 30 }}
					daySelectionAnimation={{
						type: "background",
						highlightColor: "green",
					}}
					iconContainer={{ flex: 0.1 }}
					useIsoWeekday={false}
					style={{ height: 80 }}
					onDateSelected={onDateSelected}
				/>
				<View style={{ width: "100%", height: 50, backgroundColor: "white" }}>
					<FlatList
						horizontal={true}
						keyExtractor={(idem, index) => index.toString()}
						style={{ alignSelf: "center", marginLeft: 10 }}
						renderItem={({ item, index }) => {
							return (
								<HoursList
									backgroundColor={index === Index && time ? true : false}
									onPress={() => {
										indexPress(index);
										timePress(!time);
									}}
								/>
							);
						}}
						contentContainerStyle={{ justifyContent: "space-between" }}
						data={route.params.profilPic as any}
						showsHorizontalScrollIndicator={false}
						// Performance settings
						removeClippedSubviews={true} // Unmount components when outside of window
						initialNumToRender={2} // Reduce initial render amount
						maxToRenderPerBatch={1} // Reduce number in each render batch
						updateCellsBatchingPeriod={100} // Increase time between renders
						windowSize={7} // Reduce the window size
					/>
				</View>
				<Text
					style={[
						requestPageStyle.Title,
						{ marginTop: 10, textAlign: "center" },
					]}
				>
					Payement
				</Text>

				<View
					style={{
						width: "100%",
						height: 24,
						backgroundColor: "white",
						justifyContent: "space-between",
						flexDirection: "row",
					}}
				>
					<Checkbox handle={handleConfirm} />
					<View style={{ marginRight: 300, justifyContent: "center" }}>
						<Text style={requestPageStyle.Text}>In shop</Text>
					</View>
				</View>

				<BlueButton
					onPress={() => console.log(route.params.adresseVisible)}
					Text1="Request an appointment"
					style={requestPageStyle.BlueButton}
				/>
			</ScrollView>
		</SafeAreaView>
	);
}
