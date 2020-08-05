import { Dimensions, NativeModules, StyleSheet } from "react-native";

const { PlatformConstants } = NativeModules;
const deviceType = PlatformConstants.interfaceIdiom;

let HomePageStyle: any;

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

deviceType === "phone"
	? (HomePageStyle = StyleSheet.create({
			Background: {
				flex: 1,
				backgroundColor: "rgba(230, 230, 230,1)",
			},

			Title: {
				color: "#121212",
				fontSize: HEIGHT / 40,
				fontFamily: "roboto-regular",
				textAlign: "center",
				alignSelf: "center",
				marginBottom: HEIGHT / 50,
			},
			materialButtonHamburger: {
				marginLeft: WIDTH / 40,
				width: 57,
				height: 57,
				backgroundColor: "rgba(66,66,66,1)",
				borderRadius: 30,
			},
			icon: {
				top: 0,
				left: 330,
				position: "absolute",
				color: "rgba(128,128,128,1)",
				fontSize: 40,
				height: 40,
				width: 30,
			},
			image: {
				alignSelf: "center",
				height: HEIGHT / 13,
			},

			ListRectStyle: {
				flex: 1,
				borderWidth: 1,
				borderRadius: 1,
				width: WIDTH / 1.5,
				height: HEIGHT / 5,
				justifyContent: "center",
				marginLeft: WIDTH / 25,
				backgroundColor: "gray",
			},
			TitleList: {
				color: "#121212",
				fontSize: WIDTH / 20,
				fontFamily: "roboto-700",
				marginTop: HEIGHT / 60,
			},
	  }))
	: (HomePageStyle = StyleSheet.create({
			Background: {
				flex: 1,
				backgroundColor: "rgba(230, 230, 230,1)",
			},

			Title: {
				color: "#121212",
				fontSize: HEIGHT / 40,
				fontFamily: "roboto-regular",
				textAlign: "center",
				alignSelf: "center",
				marginBottom: HEIGHT / 50,
			},
			materialButtonHamburger: {
				marginLeft: WIDTH / 40,
				width: 77,
				height: 77,
				backgroundColor: "rgba(66,66,66,1)",
				borderRadius: 40,
			},
			icon: {
				top: 0,
				left: 330,
				position: "absolute",
				color: "rgba(128,128,128,1)",
				fontSize: 40,
				height: 40,
				width: 30,
			},
			image: {
				alignSelf: "center",
				height: HEIGHT / 13,
			},

			ListRectStyle: {
				flex: 1,
				borderWidth: 1,
				borderRadius: 1,
				width: WIDTH / 2.5,
				height: HEIGHT / 5,
				justifyContent: "center",
				marginLeft: WIDTH / 25,
				backgroundColor: "gray",
			},
			TitleList: {
				color: "#121212",
				fontSize: WIDTH / 30,
				fontFamily: "roboto-700",
				marginTop: HEIGHT / 60,
			},
	  }));

export default HomePageStyle;
