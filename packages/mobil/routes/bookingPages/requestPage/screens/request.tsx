import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { Image, ImageBackground, SafeAreaView, Text, View } from "react-native";
import CalendarStrip from "react-native-calendar-strip";
import { ScrollView } from "react-native-gesture-handler";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
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
							<Text style={[requestPageStyle.Title]}> {route.params.name}</Text>
							<MaterialCommunityIconsIcon
								name="fire"
								style={requestPageStyle.icon4}
							/>
						</View>
					</ImageBackground>
				</View>

				<View style={{ flex: 1 }}>
					<Text style={requestPageStyle.Title}>Location & hours</Text>
					<MapView
						style={requestPageStyle.map}
						provider={PROVIDER_GOOGLE}
						scrollEnabled={false}
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
								<Text style={{ color: "white" }}>Adresse</Text>
								<Text style={{ color: "white" }}>Montreal,Quebec</Text>
								<Text style={{ color: "white" }}>Canada</Text>
								<Text style={{ color: "white" }}>Monday</Text>
								<Text style={{ color: "white" }}>Tuesday</Text>
								<Text style={{ color: "white" }}>Wednesday</Text>
								<Text style={{ color: "white" }}>Thursday</Text>
								<Text style={{ color: "white" }}>Friday</Text>
								<Text style={{ color: "white" }}>Saturday</Text>
								<Text style={{ color: "white" }}>Sunday</Text>
							</View>
						</LinearGradient>
					</MapView>
				</View>
				<Text style={requestPageStyle.Title}>Photos</Text>
				<PhotoGalery data={route.params.pictureUrl} />
				<View style={{ width: "100%", height: 100, backgroundColor: "white" }}>
					<Text>Select Service </Text>
					<Text style={requestPageStyle.Text}>
						Average Price of this service: {route.params.price}$
					</Text>
				</View>
				<CalendarStrip showMonth={true} />
				<View style={{ width: "100%", height: 100, backgroundColor: "white" }}>
					<Text>Payement</Text>
				</View>
				<BlueButton
					onPress={() => navigation.navigate("location")}
					Text1="Request an appointment"
					style={requestPageStyle.BlueButton}
				/>
			</ScrollView>
		</SafeAreaView>
	);
}
