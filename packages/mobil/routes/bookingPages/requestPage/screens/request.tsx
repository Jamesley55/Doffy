import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import {
	Image,
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import {
	FlatList,
	ScrollView,
	TouchableOpacity,
} from "react-native-gesture-handler";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { BlueButton } from "../../../../Component/BlueBotton";
import { PhotoGalery } from "../../../../Component/PhotosGallery";
import { HomeStackNavProps } from "../../../../screenStack/Tydefs/homeParamList";
import { requestPageStyle } from "../styles/style";
export function requestPage({
	navigation,
	route,
}: HomeStackNavProps<"requestPage">) {
	const [service, setService] = React.useState(false);
	const [payement, setPayement] = React.useState(false);
	const handleConfirm = () => {
		console.log("that's jessica");
	};

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
					{/* <IoniconsIcon
					name="md-search"
					style={requestPageStyle.icon2}
					onPress={() => {
						navigation.navigate("searchPage");
					}}
				/> */}
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
					<TouchableOpacity
						style={{
							borderRadius: 30,
							marginLeft: 10,
						}}
						onPress={() => {
							setService(!service);
						}}
					>
						<AntDesign
							name="checkcircle"
							size={24}
							color={service ? "green" : "black"}
						/>
					</TouchableOpacity>
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

				<CalendarStrip showMonth={true} />
				<View style={{ width: "100%", height: 50, backgroundColor: "white" }}>
					<FlatList
						horizontal={true}
						keyExtractor={(idem, index) => index.toString()}
						style={{ alignSelf: "center", marginLeft: 10 }}
						renderItem={({ item, index }) => {
							return <HoursList handle={handleConfirm}></HoursList>;
						}}
						contentContainerStyle={{ justifyContent: "space-between" }}
						data={route.params.profilPic}
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
					<TouchableOpacity
						style={{
							borderRadius: 30,
							marginLeft: 10,
							alignItems: "center",
						}}
						onPress={() => {
							setPayement(!payement);
						}}
					>
						<AntDesign
							name="checkcircle"
							size={24}
							color={payement ? "green" : "black"}
						/>
					</TouchableOpacity>
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

interface Props {
	handle?: any;
}

export class HoursList extends React.PureComponent<Props> {
	state = {
		values: false,
	};

	render() {
		return (
			<View style={[styles.container]}>
				<TouchableOpacity
					style={{
						flexDirection: "row",
						marginBottom: 10,
						marginTop: 10,
					}}
					onPress={() => {
						this.state.values
							? this.setState({ values: false }, () => {
									this.setState({ values: false });

									this.props.handle(this.state.values);
							  })
							: this.setState({ values: true }, () => {
									this.setState({ values: true });
									this.props.handle(this.state.values);
							  });
					}}
				>
					<View
						style={{
							backgroundColor: this.state.values ? "green" : "white",
							height: 30,
							width: 80,
							borderRadius: 30,
							alignSelf: "center",
							marginLeft: 5,
							marginRight: 5,
							shadowOffset: {
								height: 1,
								width: 1,
							},
							shadowColor: "#000",
							shadowOpacity: 0.35,
							shadowRadius: 5,
						}}
					>
						<Text
							style={{
								height: "100%",
								textAlign: "center",
								textAlignVertical: "center",
								marginVertical: 5,
							}}
						>
							9:00
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
	switch1: {
		width: 45,
		height: 22,
	},
});
