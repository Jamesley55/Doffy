import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { HomeStackNavProps } from "../../../../../screenStack/Tydefs/homeParamList";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";

export function requestPage({ navigation }: HomeStackNavProps<"requestPage">) {
	return (
		<View style={styles.container}>
			<View style={styles.icon1Row}>
				<EntypoIcon
					name="arrow-left"
					style={styles.icon1}
					onPress={() => {
						navigation.goBack();
					}}
				></EntypoIcon>
				<Image
					source={require("../../../../../logo/LogoJamesleyApp.png")}
					resizeMode="contain"
					style={styles.image1}
				></Image>
				<IoniconsIcon
					name="md-search"
					style={styles.icon2}
					onPress={() => {
						navigation.navigate("searchPage");
					}}
				></IoniconsIcon>
				<MaterialCommunityIconsIcon
					name="account"
					style={styles.icon3}
					onPress={() => {
						navigation.toggleDrawer();
					}}
				></MaterialCommunityIconsIcon>
			</View>
			<View style={styles.rect}>
				<MaterialCommunityIconsIcon
					name="fire"
					style={styles.icon4}
				></MaterialCommunityIconsIcon>
			</View>
			<View style={styles.nameOfTheShopStackStack}>
				<View style={styles.nameOfTheShopStack}>
					<Text style={styles.nameOfTheShop}>$Name of the shop $</Text>
					<Text style={styles.rating}>Rating</Text>
					<Text style={styles.loremIpsum}>$$$$$</Text>
				</View>
				<Text style={styles.price}>Price</Text>
			</View>
			<View style={styles.rect2Stack}>
				<View style={styles.rect2}></View>
				<Text style={styles.preview2}>Preview</Text>
			</View>
			<View style={styles.rect3}>
				<View style={styles.adressStack}>
					<Text
						style={styles.adress}
						onPress={() => {
							navigation.navigate("location");
						}}
					>
						Adress
					</Text>
					<Text
						style={styles.disponibility}
						onPress={() => {
							navigation.navigate("location");
						}}
					>
						Check Disponibility
					</Text>
				</View>
			</View>
			<MaterialButtonPrimary
				text1="Request an appointment"
				style={styles.materialButtonPrimary1}
			></MaterialButtonPrimary>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	icon1: {
		color: "rgba(128,128,128,1)",
		fontSize: 40,
		marginTop: 25,
	},
	image1: {
		width: 191,
		height: 64,
		marginLeft: 27,
	},
	icon2: {
		color: "rgba(128,128,128,1)",
		fontSize: 40,
		marginLeft: 8,
		marginTop: 25,
	},
	icon3: {
		color: "rgba(128,128,128,1)",
		fontSize: 40,
		marginLeft: 11,
		marginTop: 25,
	},
	icon1Row: {
		height: 65,
		flexDirection: "row",
		marginTop: 37,
		marginLeft: 14,
		marginRight: 14,
	},
	rect: {
		width: "100%",
		height: 170,
		backgroundColor: "rgba(230, 230, 230,1)",
		marginTop: 30,
	},
	icon4: {
		color: "rgba(128,128,128,1)",
		fontSize: 30,
		height: 30,
		width: 30,
		marginTop: 9,
		marginLeft: 329,
	},
	nameOfTheShop: {
		top: 0,
		left: 0,
		width: 246,
		height: 38,
		color: "rgba(59,33,33,1)",
		position: "absolute",
		fontSize: 24,
		fontFamily: "roboto-700",
		lineHeight: 23,
		letterSpacing: -1,
	},
	rating: {
		top: 32,
		left: 0,
		width: 44,
		height: 22,
		color: "rgba(59,33,33,1)",
		position: "absolute",
		fontSize: 14,
		fontFamily: "roboto-regular",
		lineHeight: 23,
		letterSpacing: -1,
	},
	loremIpsum: {
		top: 51,
		left: 42,
		width: 58,
		height: 29,
		color: "rgba(59,33,33,1)",
		position: "absolute",
		fontSize: 14,
		fontFamily: "roboto-regular",
		lineHeight: 23,
		letterSpacing: -1,
	},
	nameOfTheShopStack: {
		top: 0,
		left: 0,
		width: 246,
		height: 80,
		position: "absolute",
	},
	price: {
		top: 54,
		left: 0,
		width: 44,
		height: 22,
		color: "rgba(59,33,33,1)",
		position: "absolute",
		fontSize: 14,
		fontFamily: "roboto-regular",
		lineHeight: 23,
		letterSpacing: -1,
	},
	nameOfTheShopStackStack: {
		width: 246,
		height: 80,
		marginTop: 30,
		marginLeft: 10,
	},
	rect2: {
		top: 26,
		left: 1,
		width: "100%",
		height: 104,
		backgroundColor: "rgba(230, 230, 230,1)",
		position: "absolute",
	},
	preview2: {
		top: 0,
		left: 0,
		width: "100%",
		height: 38,
		color: "rgba(59,33,33,1)",
		position: "absolute",
		fontSize: 24,
		fontFamily: "roboto-700",
		lineHeight: 23,
		letterSpacing: -1,
	},
	rect2Stack: {
		width: "100%",
		height: 130,
		marginTop: 7,
		marginLeft: 13,
	},
	rect3: {
		width: "99%",
		marginLeft: 1,
		height: 49,
		borderColor: "rgba(87,87,87,1)",
		borderWidth: 1,
		marginTop: 13,
	},
	adress: {
		top: 0,
		left: 0,
		width: 296,
		height: 38,
		color: "rgba(59,33,33,1)",
		position: "absolute",
		fontSize: 24,
		fontFamily: "roboto-regular",
		lineHeight: 23,
		letterSpacing: -1,
	},
	disponibility: {
		top: 0,
		left: 204,
		color: "rgba(59,33,33,1)",
		position: "absolute",
		fontSize: 24,
		fontFamily: "roboto-regular",
		lineHeight: 23,
		letterSpacing: -1,
	},
	adressStack: {
		width: "100%",
		height: 38,
		marginTop: 11,
		marginLeft: 14,
	},
	materialButtonPrimary1: {
		width: 294,
		height: 66,
		top: 80,
		borderRadius: 100,
		marginTop: 13,
		marginLeft: 37,
	},
	materialIconTextButtonsFooter1: {
		width: "100%",
		height: 102,
		marginTop: 20,
	},
});
