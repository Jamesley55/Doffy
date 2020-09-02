import { Dimensions, StyleSheet } from "react-native";

export const WIDTH = Dimensions.get("window").width;
export const HEIGHT = Dimensions.get("window").height;
let type: any;
let ratio: any;
ratio = WIDTH / HEIGHT;
ratio > 1 ? (type = "web") : (type = "phone");
let style: any;
type === "web"
	? (style = StyleSheet.create({
			contain: {
				flex: 1,
				width: WIDTH,
				height: HEIGHT,
			},
			logo: {
				alignSelf: "center",
				width: 50,
				height: 50,
			},
			imageBackground: {
				width: WIDTH / 5,
				height: HEIGHT / 1.5,
				alignSelf: "center",
			},
			row: {
				flexDirection: "row",
				justifyContent: "space-around",
			},
			doeBox: {
				alignSelf: "center",
				width: WIDTH / 5.9,
				height: HEIGHT / 1.6,
				overflow: "hidden",
				borderRadius: 30,
				shadowRadius: 30,
				marginLeft: -WIDTH / 8,
				zIndex: 10,
			},
			doe: { alignSelf: "center", width: "100%", height: "100%" },
			text: {
				alignSelf: "center",
				fontFamily: "roboto-700",
				fontSize: 16,
				fontWeight: "bold",
			},
			BlueButton: {
				shadowColor: "green",
				backgroundColor: "gray",
				width: WIDTH / 7,
				height: HEIGHT / 15,
				borderRadius: 30,
				zIndex: 99,
				marginTop: "40%",
				marginLeft: "20%",
				shadowRadius: 60,
			},
			previewStack: {
				marginTop: HEIGHT / 10,
			},
			previewBox: {
				width: WIDTH / 5,
				height: HEIGHT / 5,
				overflow: "hidden",
				borderRadius: 50,
				shadowRadius: 30,
				margin: 10,
			},
			preview: { width: "100%", height: "100%" },

			middlePreview: {
				width: WIDTH / 5,
				height: HEIGHT / 5,
				overflow: "hidden",
				borderRadius: 50,
				shadowRadius: 30,
				margin: -50,
				zIndex: 99,
				alignSelf: "center",
			},
			appFooter: {
				height: HEIGHT / 5,
				justifyContent: "space-around",
				flexDirection: "row",
				alignItems: "center",
				backgroundColor: "gray",
			},
	  }))
	: (style = StyleSheet.create({
			contain: {
				width: WIDTH,
				height: HEIGHT,
			},
			logo: {
				alignSelf: "center",
				width: 50,
				height: 50,
			},
			imageBackground: {
				width: WIDTH / 2,
				height: HEIGHT / 2,
				alignSelf: "center",
			},
			row: {
				flexDirection: "column",
				alignItems: "center",
			},
			doeBox: {
				alignSelf: "center",
				width: WIDTH / 2.3,
				height: HEIGHT / 2.0,
				overflow: "hidden",
				borderRadius: 30,
				shadowRadius: 30,
				marginLeft: -WIDTH / 4,
				zIndex: 10,
				aligneSelf: "center",
			},
			doe: { alignSelf: "center", width: "100%", height: "100%" },
			text: {
				textAlign: "center",
				margin: 2,
				alignSelf: "center",
				fontFamily: "armata-regular",
				fontSize: 14,
				color: "gray",
				fontWeight: "bold",
			},
			BlueButton: {
				aligneSelf: "center",
				shadowColor: "red",
				backgroundColor: "gray",
				width: WIDTH / 2,
				height: HEIGHT / 15,
				borderRadius: 30,
				zIndex: 99,
				marginTop: "10%",
				shadowRadius: 60,
			},
			previewStack: {
				marginTop: 30,
			},
			previewBox: {
				alignSelf: "center",
				width: WIDTH / 2.5,
				height: HEIGHT / 5,
				overflow: "hidden",
				borderRadius: 50,
				shadowRadius: 30,
				margin: 10,
			},
			preview: { width: "100%", height: "100%" },
			middlePreview: {
				width: WIDTH / 2.5,
				height: HEIGHT / 5,
				overflow: "hidden",
				borderRadius: 50,
				shadowRadius: 30,
				margin: -50,
				zIndex: 99,
				alignSelf: "center",
			},
			appFooter: {
				height: HEIGHT / 5,
				justifyContent: "space-around",
				flexDirection: "row",
				alignItems: "center",
				backgroundColor: "gray",
			},
	  }));

export default style;
