import * as React from "react";
import {
	Image,
	ImageBackground,
	SafeAreaView,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { AuthStackNavProps } from "../../../../screenStack/Tydefs/AuthParamList";
import { firstPageStyle } from "../style/stylesheet";

export function firstPage({ navigation }: AuthStackNavProps<"firstPage">) {
	return (
		<SafeAreaView>
			<ImageBackground
				source={require("../assets/images/barbershop.jpg")}
				style={firstPageStyle.backgroundImage}
			/>
			<View style={firstPageStyle.stack}>
				<View style={firstPageStyle.leftRectStack}>
					<TouchableOpacity
						onPress={() =>
							navigation.navigate("serviceHomePage", { Type: "find" })
						}
					>
						<Image
							source={require("../../../../ImagesAsset/eyelash.jpg")}
							style={firstPageStyle.leftImage}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text
							style={firstPageStyle.TextBox}
							onPress={() =>
								navigation.navigate("serviceHomePage", { Type: "find" })
							}
						>
							find a Service
						</Text>
					</TouchableOpacity>
				</View>
				<View style={firstPageStyle.rightRectStack}>
					<TouchableOpacity
						onPress={() =>
							navigation.navigate("serviceHomePage", { Type: "provide" })
						}
					>
						<Image
							source={require("../assets/images/cut.jpg")}
							style={firstPageStyle.rightImage}
						/>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text
							style={firstPageStyle.TextBox}
							onPress={() =>
								navigation.navigate("serviceHomePage", { Type: "provide" })
							}
						>
							provide a Service
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
