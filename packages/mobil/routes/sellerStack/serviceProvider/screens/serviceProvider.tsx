import { BlueButton } from "@doffy/component";
import * as React from "react";
import {
	Alert,
	Image,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { SellerStackNavProps } from "../../../../screenStack/Tydefs/sellerParamList";
import { ServiceCreationContext } from "../../../../shareFuction/serviceCreation";
import serviceProviderStyle from "../style/style";
export function serviceProvider({
	navigation,
}: SellerStackNavProps<"serviceProvider">) {
	const { ServiceCategorie } = React.useContext(ServiceCreationContext);
	const [barbershop, selectBarbershop] = React.useState(false);
	const [Tatoo, selectTatoo] = React.useState(false);
	const [Hairstylist, selectHairStylist] = React.useState(false);
	const [Makeup, selectMakeup] = React.useState(false);
	const [Eyebrow, selectEyebrow] = React.useState(false);
	const [Lash, selectLash] = React.useState(false);
	const [Nail, selectNail] = React.useState(false);
	const [Aesthetician, selectAesthetician] = React.useState(false);

	const handlePress = () => {
		let retour = true;
		barbershop
			? ServiceCategorie("barbershop")
			: Tatoo
			? ServiceCategorie("TatooArtist")
			: Hairstylist
			? ServiceCategorie("HairStylist")
			: Makeup
			? ServiceCategorie("MakeupArtist")
			: Eyebrow
			? ServiceCategorie("EyebrowTechnician")
			: Lash
			? ServiceCategorie("LashTechnician")
			: Nail
			? ServiceCategorie("NailTechnician")
			: Aesthetician
			? ServiceCategorie("Aesthetician")
			: (retour = false);
		return retour;
	};

	return (
		<SafeAreaView style={serviceProviderStyle.container}>
			<View style={serviceProviderStyle.rect}>
				<EntypoIcon
					name="arrow-left"
					style={serviceProviderStyle.arrowLeft}
					onPress={() => {
						navigation.goBack();
					}}
				/>
				<IoniconsIcon
					name="md-help-circle-outline"
					style={serviceProviderStyle.Help}
					onPress={() => {
						navigation.navigate("help");
					}}
				/>
			</View>
			<Text style={serviceProviderStyle.Title}>
				Choose the services that you are ready to provide
			</Text>
			<ScrollView showsVerticalScrollIndicator={false}>
				<View style={serviceProviderStyle.rectService}>
					<TouchableOpacity
						style={[
							serviceProviderStyle.ServicesRect,
							{
								shadowColor: barbershop
									? "green"
									: serviceProviderStyle.ServicesRect.shadowColor,
								shadowOpacity: barbershop
									? 0.55
									: serviceProviderStyle.ServicesRect.shadowOpacity,
								shadowRadius: barbershop
									? 5
									: serviceProviderStyle.ServicesRect.shadowRadius,
							},
						]}
						onPress={() => {
							selectBarbershop(!barbershop);
							selectNail(false);
							selectLash(false);
							selectEyebrow(false);
							selectMakeup(false);
							selectHairStylist(false);
							selectTatoo(false);
							selectAesthetician(false);
						}}
					>
						<Image
							source={require("../../../../ImagesAsset/barbershop.jpeg")}
							style={serviceProviderStyle.Image}
						/>
						<Text style={serviceProviderStyle.TextBox}>Barbershop</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							serviceProviderStyle.ServicesRect,
							{
								shadowColor: Tatoo
									? "green"
									: serviceProviderStyle.ServicesRect.shadowColor,
								shadowOpacity: Tatoo
									? 0.55
									: serviceProviderStyle.ServicesRect.shadowOpacity,
								shadowRadius: Tatoo
									? 5
									: serviceProviderStyle.ServicesRect.shadowRadius,
							},
						]}
						onPress={() => {
							selectTatoo(!Tatoo);
							selectNail(false);
							selectLash(false);
							selectEyebrow(false);
							selectMakeup(false);
							selectHairStylist(false);
							selectAesthetician(false);
							selectBarbershop(false);
						}}
					>
						<Image
							source={require("../../../../ImagesAsset/TatooArtist.jpg")}
							style={serviceProviderStyle.Image}
						/>
						<Text style={serviceProviderStyle.TextBox}>Tatto Artist</Text>
					</TouchableOpacity>
				</View>
				<View style={serviceProviderStyle.rectService}>
					<TouchableOpacity
						style={[
							serviceProviderStyle.ServicesRect,
							{
								shadowColor: Hairstylist
									? "green"
									: serviceProviderStyle.ServicesRect.shadowColor,
								shadowOpacity: Hairstylist
									? 0.55
									: serviceProviderStyle.ServicesRect.shadowOpacity,
								shadowRadius: Hairstylist
									? 5
									: serviceProviderStyle.ServicesRect.shadowRadius,
							},
						]}
						onPress={() => {
							selectHairStylist(!Hairstylist);
							selectNail(false);
							selectLash(false);
							selectEyebrow(false);
							selectMakeup(false);
							selectAesthetician(false);
							selectTatoo(false);
							selectBarbershop(false);
						}}
					>
						<Image
							source={require("../../../../ImagesAsset/hairSalon.jpg")}
							style={serviceProviderStyle.Image}
						/>
						<Text style={serviceProviderStyle.TextBox}>Hairstylist</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							serviceProviderStyle.ServicesRect,
							{
								shadowColor: Makeup
									? "green"
									: serviceProviderStyle.ServicesRect.shadowColor,
								shadowOpacity: Makeup
									? 0.55
									: serviceProviderStyle.ServicesRect.shadowOpacity,
								shadowRadius: Makeup
									? 5
									: serviceProviderStyle.ServicesRect.shadowRadius,
							},
						]}
						onPress={() => {
							selectMakeup(!Makeup);
							selectNail(false);
							selectLash(false);
							selectEyebrow(false);
							selectAesthetician(false);
							selectHairStylist(false);
							selectTatoo(false);
							selectBarbershop(false);
						}}
					>
						<Image
							source={require("../../../../ImagesAsset/MakeupArtist.jpg")}
							style={serviceProviderStyle.Image}
						/>
						<Text style={serviceProviderStyle.TextBox}>Makeup Artist</Text>
					</TouchableOpacity>
				</View>
				<View style={serviceProviderStyle.rectService}>
					<TouchableOpacity
						style={[
							serviceProviderStyle.ServicesRect,
							{
								shadowColor: Eyebrow
									? "green"
									: serviceProviderStyle.ServicesRect.shadowColor,
								shadowOpacity: Eyebrow
									? 0.55
									: serviceProviderStyle.ServicesRect.shadowOpacity,
								shadowRadius: Eyebrow
									? 5
									: serviceProviderStyle.ServicesRect.shadowRadius,
							},
						]}
						onPress={() => {
							selectEyebrow(!Eyebrow);
							selectNail(false);
							selectLash(false);
							selectAesthetician(false);
							selectMakeup(false);
							selectHairStylist(false);
							selectTatoo(false);
							selectBarbershop(false);
						}}
					>
						<Image
							source={require("../../../../ImagesAsset/eyelash.jpg")}
							style={serviceProviderStyle.Image}
						/>
						<Text style={serviceProviderStyle.TextBox}>
							Eyebrows technician
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							serviceProviderStyle.ServicesRect,
							{
								shadowColor: Lash
									? "green"
									: serviceProviderStyle.ServicesRect.shadowColor,
								shadowOpacity: Lash
									? 0.55
									: serviceProviderStyle.ServicesRect.shadowOpacity,
								shadowRadius: Lash
									? 5
									: serviceProviderStyle.ServicesRect.shadowRadius,
							},
						]}
						onPress={() => {
							selectLash(!Lash);
							selectNail(false);
							selectAesthetician(false);
							selectEyebrow(false);
							selectMakeup(false);
							selectHairStylist(false);
							selectTatoo(false);
							selectBarbershop(false);
						}}
					>
						<Image
							source={require("../../../../ImagesAsset/LashTechnician.jpg")}
							style={serviceProviderStyle.Image}
						/>
						<Text style={serviceProviderStyle.TextBox}>Lash Technician</Text>
					</TouchableOpacity>
				</View>
				<View style={serviceProviderStyle.rectService}>
					<TouchableOpacity
						style={[
							serviceProviderStyle.ServicesRect,
							{
								shadowColor: Nail
									? "green"
									: serviceProviderStyle.ServicesRect.shadowColor,
								shadowOpacity: Nail
									? 0.55
									: serviceProviderStyle.ServicesRect.shadowOpacity,
								shadowRadius: Nail
									? 5
									: serviceProviderStyle.ServicesRect.shadowRadius,
							},
						]}
						onPress={() => {
							selectNail(!Nail);
							selectAesthetician(false);
							selectLash(false);
							selectEyebrow(false);
							selectMakeup(false);
							selectHairStylist(false);
							selectTatoo(false);
							selectBarbershop(false);
						}}
					>
						<Image
							source={require("../../../../ImagesAsset/nailTech.jpg")}
							style={serviceProviderStyle.Image}
						/>
						<Text style={serviceProviderStyle.TextBox}>Nail Technician</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							serviceProviderStyle.ServicesRect,
							{
								shadowColor: Aesthetician
									? "green"
									: serviceProviderStyle.ServicesRect.shadowColor,
								shadowOpacity: Aesthetician
									? 0.55
									: serviceProviderStyle.ServicesRect.shadowOpacity,
								shadowRadius: Aesthetician
									? 5
									: serviceProviderStyle.ServicesRect.shadowRadius,
							},
						]}
						onPress={() => {
							selectAesthetician(!Aesthetician);
							selectNail(false);
							selectLash(false);
							selectEyebrow(false);
							selectMakeup(false);
							selectHairStylist(false);
							selectTatoo(false);
							selectBarbershop(false);
						}}
					>
						<Image
							source={require("../../../../ImagesAsset/Aesthetician.jpg")}
							style={serviceProviderStyle.Image}
						/>
						<Text style={serviceProviderStyle.TextBox}>Aesthetician</Text>
					</TouchableOpacity>
				</View>
				<BlueButton
					onPress={() => {
						const retour = handlePress();
						retour
							? navigation.navigate("InformationPage")
							: Alert.alert(
									"",
									"Choose a service to continue",
									[
										{
											text: "Cancel",
											onPress: () => navigation.goBack(),
											style: "cancel",
										},
										{ text: "OK", onPress: () => console.log("OK Pressed") },
									],
									{ cancelable: false }
							  );
					}}
					Text1="Continue "
					style={serviceProviderStyle.materialButtonPrimary1}
				/>
			</ScrollView>
		</SafeAreaView>
	);
}
