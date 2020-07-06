import * as React from "react";
import {
	Image,
	ImageBackground,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { firstPageStyle } from "../style/stylesheet";

export function firstPage({ navigation }) {
	return (
		<SafeAreaView>
			<ImageBackground
				source={require("../assets/images/barbershop.jpg")}
				style={firstPageStyle.backgroundImage}
			/>
			<View style={firstPageStyle.stack}>
				<View style={firstPageStyle.leftRectStack}>
					<TouchableOpacity
						onPress={() => navigation.navigate("serviceHomePage")}
					>
						<Image
							source={require("../assets/images/cut.jpg")}
							style={firstPageStyle.leftImage}
						></Image>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text
							style={firstPageStyle.chercherService}
							onPress={() => navigation.navigate("serviceHomePage")}
						>
							chercher un service
						</Text>
					</TouchableOpacity>
				</View>
				<View style={firstPageStyle.rightRectStack}>
					<TouchableOpacity
						onPress={() => navigation.navigate("serviceHomePage")}
					>
						<Image
							source={require("../assets/images/barber.jpg")}
							style={firstPageStyle.rightImage}
						></Image>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text
							style={firstPageStyle.offrirService}
							onPress={() => navigation.navigate("serviceHomePage")}
						>
							offrir a service
						</Text>
					</TouchableOpacity>
				</View>
			</View>
			<Text
				style={firstPageStyle.Text}
				onPress={() => navigation.navigate("welcomePage")}
			>
				Register
			</Text>
			<Text
				style={firstPageStyle.Text}
				onPress={() => navigation.navigate("login")}
			>
				lOG IN
			</Text>
		</SafeAreaView>
	);
}
