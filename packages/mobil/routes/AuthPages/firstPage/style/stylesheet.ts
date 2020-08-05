import { Dimensions, NativeModules, StyleSheet } from "react-native";

const { PlatformConstants } = NativeModules;
const deviceType = PlatformConstants.interfaceIdiom;

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

let firstPageStyle: any;
deviceType === "phone"
	? (firstPageStyle = StyleSheet.create({
			backgroundImage: {
				flex: 1,
				width: "100%",
				height: HEIGHT / 1.445,
				position: "absolute",
			},
			stack: {
				flex: 1,
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-around",
				top: HEIGHT / 1.66,
			},
			leftRectStack: {
				width: "40%",
				aspectRatio: 2 / 2,
				backgroundColor: "rgba(230, 230, 230,1)",
				borderRadius: 30,
			},
			leftImage: {
				width: "100%",
				height: "85%",
				borderTopLeftRadius: 30,
				borderTopRightRadius: 30,
			},
			rightRectStack: {
				width: "40%",
				aspectRatio: 2 / 2,
				backgroundColor: "rgba(230, 230, 230,1)",
				borderRadius: 30,
			},
			rightImage: {
				width: "100%",
				height: "85%",
				borderTopLeftRadius: 30,
				borderTopRightRadius: 30,
			},

			TextBox: {
				textAlign: "center",
				color: "rgba(96,96,96,1)",
				fontSize: (WIDTH * 3) / 100,
				fontFamily: "armata-regular",
			},
			Text: {
				textAlign: "center",
				color: "rgba(96,96,96,1)",
				fontSize: (WIDTH * 5) / 100,
				fontFamily: "armata-regular",
				top: (HEIGHT * 2) / 2.8,
				marginTop: WIDTH / 10,
			},
	  }))
	: (firstPageStyle = StyleSheet.create({
			backgroundImage: {
				flex: 1,
				width: "100%",
				height: HEIGHT / 1.645,
				position: "absolute",
			},
			stack: {
				flex: 1,
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-around",
				top: HEIGHT / 1.91,
			},
			leftRectStack: {
				width: "40%",
				aspectRatio: 2 / 2,
				backgroundColor: "rgba(230, 230, 230,1)",
				borderRadius: 30,
			},
			leftImage: {
				width: "100%",
				height: "85%",
				borderTopLeftRadius: 30,
				borderTopRightRadius: 30,
			},
			rightRectStack: {
				width: "40%",
				aspectRatio: 2 / 2,
				backgroundColor: "rgba(230, 230, 230,1)",
				borderRadius: 30,
			},
			rightImage: {
				width: "100%",
				height: "85%",
				borderTopLeftRadius: 30,
				borderTopRightRadius: 30,
			},

			TextBox: {
				textAlign: "center",
				color: "rgba(96,96,96,1)",
				fontSize: (WIDTH * 3) / 100,
				fontFamily: "armata-regular",
			},
			Text: {
				textAlign: "center",
				color: "rgba(96,96,96,1)",
				fontSize: (WIDTH * 5) / 100,
				fontFamily: "armata-regular",
				top: (HEIGHT * 2) / 3.1,
				marginTop: WIDTH / 10,
			},
	  }));

export default firstPageStyle;
