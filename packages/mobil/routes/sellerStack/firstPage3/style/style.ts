import { Dimensions, NativeModules, StyleSheet } from "react-native";

const { PlatformConstants } = NativeModules;
const deviceType = PlatformConstants.interfaceIdiom;
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
let firstPage3Style: any;
deviceType === "phone"
	? (firstPage3Style = StyleSheet.create({
			container: {
				flex: 1,
			},
			gobackIcon: {
				color: "rgba(128,128,128,1)",
				fontSize: WIDTH / 15,
				textAlign: "center",
			},
			goBack1: {
				color: "rgba(179,179,179,1)",
				fontSize: WIDTH / 20,
				fontFamily: "roboto-regular",
				textAlign: "center",
			},
			text: {
				color: "rgba(57,2,2,1)",
				fontSize: WIDTH / 20,
				fontFamily: "calibri-bold",
				textAlign: "center",
				marginTop: HEIGHT / 100,
				justifyContent: "center",
				alignSelf: "center",
			},
			icon: {
				color: "rgba(128,128,128,1)",
				fontSize: 30,
			},
			TextSteps: {
				width: "100%",
				height: HEIGHT / 30,
				color: "rgba(32,32,32,1)",
				fontSize: WIDTH / 20,
				fontFamily: "alef-regular",
			},
			Row: {
				flexDirection: "row",
				marginTop: HEIGHT / 20,
			},
			BlueButton: {
				width: WIDTH / 1.3,
				height: HEIGHT / 13,
				borderRadius: 100,
				marginTop: WIDTH / 20,
				alignSelf: "center",
			},
	  }))
	: (firstPage3Style = StyleSheet.create({
			container: {
				flex: 1,
			},
			gobackIcon: {
				color: "rgba(128,128,128,1)",
				fontSize: WIDTH / 25,
				textAlign: "center",
			},
			goBack1: {
				color: "rgba(179,179,179,1)",
				fontSize: WIDTH / 30,
				fontFamily: "roboto-regular",
				textAlign: "center",
			},
			text: {
				color: "rgba(57,2,2,1)",
				fontSize: WIDTH / 30,
				fontFamily: "calibri-bold",
				textAlign: "center",
				marginTop: HEIGHT / 100,
				justifyContent: "center",
				alignSelf: "center",
			},
			icon: {
				color: "rgba(128,128,128,1)",
				fontSize: 60,
			},
			TextSteps: {
				width: "100%",
				height: HEIGHT / 20,
				color: "rgba(32,32,32,1)",
				fontSize: WIDTH / 20,
				fontFamily: "alef-regular",
			},
			Row: {
				flexDirection: "row",
				marginTop: HEIGHT / 20,
			},
			BlueButton: {
				width: WIDTH / 1.3,
				height: HEIGHT / 13,
				borderRadius: 100,
				marginTop: WIDTH / 20,
				alignSelf: "center",
			},
	  }));
export default firstPage3Style;
