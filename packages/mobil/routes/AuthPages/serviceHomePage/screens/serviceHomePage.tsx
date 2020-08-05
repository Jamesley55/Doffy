import * as React from "react";
import {
	Image,
	SafeAreaView,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import { AuthStackNavProps } from "../../../../screenStack/Tydefs/AuthParamList";
import { serviceHomePageStyle } from "../style/style";

export function serviceHomePage({
	route,
	navigation,
}: AuthStackNavProps<"serviceHomePage">) {
	const [click, setClick] = React.useState(false);

	const { Type } = route.params;
	return (
		<SafeAreaView>
			<Icon name="chevron-thin-up" style={serviceHomePageStyle.upIcon}></Icon>
			<Text
				style={serviceHomePageStyle.goBack}
				onPress={() => {
					navigation.goBack();
				}}
			>
				Go back
			</Text>
			<Text style={serviceHomePageStyle.Text}>
				{Type === "find"
					? "Choose the service that you need at the moment"
					: "Provide a service to customers"}
			</Text>
			<ScrollView>
				<View style={serviceHomePageStyle.rectRow}>
					<TouchableOpacity
						style={serviceHomePageStyle.rect}
						onPress={async () => navigation.navigate("welcomePage")}
					>
						<Image
							style={serviceHomePageStyle.Image}
							source={require("../../../../ImagesAsset/barbershop.jpeg")}
						/>
						<Text style={serviceHomePageStyle.TextBox}>Barbershop</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={serviceHomePageStyle.rect}
						onPress={async () => navigation.navigate("welcomePage")}
					>
						<Image
							style={serviceHomePageStyle.Image}
							source={require("../../../../ImagesAsset/TatooArtist.jpg")}
						/>
						<Text style={serviceHomePageStyle.TextBox}>Tatto Artist</Text>
					</TouchableOpacity>
				</View>
				<View style={serviceHomePageStyle.rectRow}>
					<TouchableOpacity
						style={serviceHomePageStyle.rect}
						onPress={async () => navigation.navigate("welcomePage")}
					>
						<Image
							style={serviceHomePageStyle.Image}
							source={require("../../../../ImagesAsset/hairSalon.jpg")}
						/>
						<Text style={serviceHomePageStyle.TextBox}>Hairstylist</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={serviceHomePageStyle.rect}
						onPress={async () => navigation.navigate("welcomePage")}
					>
						<Image
							style={serviceHomePageStyle.Image}
							source={require("../../../../ImagesAsset/MakeupArtist.jpg")}
						/>
						<Text style={serviceHomePageStyle.TextBox}>Makeup Artist</Text>
					</TouchableOpacity>
				</View>
				<View style={serviceHomePageStyle.rectRow}>
					<TouchableOpacity
						style={serviceHomePageStyle.rect}
						onPress={async () => navigation.navigate("welcomePage")}
					>
						<Image
							style={serviceHomePageStyle.Image}
							source={require("../../../../ImagesAsset/eyelash.jpg")}
						/>
						<Text style={serviceHomePageStyle.TextBox}>
							Eyebrows technician
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={serviceHomePageStyle.rect}
						onPress={async () => navigation.navigate("welcomePage")}
					>
						<Image
							style={serviceHomePageStyle.Image}
							source={require("../../../../ImagesAsset/LashTechnician.jpg")}
						/>
						<Text style={serviceHomePageStyle.TextBox}>Lash Technician</Text>
					</TouchableOpacity>
				</View>
				<View style={serviceHomePageStyle.rectRow}>
					<TouchableOpacity
						style={serviceHomePageStyle.rect}
						onPress={async () => navigation.navigate("welcomePage")}
					>
						<Image
							style={serviceHomePageStyle.Image}
							source={require("../../../../ImagesAsset/nailTech.jpg")}
						/>
						<Text style={serviceHomePageStyle.TextBox}>Nail Technician</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={serviceHomePageStyle.rect}
						onPress={() => {
							setClick(true);
							navigation.navigate("welcomePage");
						}}
					>
						<Image
							style={serviceHomePageStyle.Image}
							source={require("../../../../ImagesAsset/Aesthetician.jpg")}
						/>
						<Text style={serviceHomePageStyle.TextBox}>Aesthetician</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
