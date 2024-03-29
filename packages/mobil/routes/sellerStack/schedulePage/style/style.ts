import { Dimensions, NativeModules, StyleSheet } from "react-native";
const { PlatformConstants } = NativeModules;
const deviceType = PlatformConstants.interfaceIdiom;
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
let pricePagestyles: any;

deviceType === "phone"
	? (pricePagestyles = StyleSheet.create({
			container: {
				flex: 1,
				alignSelf: "center",
			},
			Row: {
				justifyContent: "space-between",
				flexDirection: "row",
			},
			scheduleRow: {
				width: "100%",
				flexDirection: "row",
				justifyContent: "space-around",
			},

			rect: {
				alignSelf: "center",
				width: WIDTH / 1.2,
				height: HEIGHT / 1.2,
				backgroundColor: "rgba(230, 230, 230,1)",
			},
			arrowLeft: {
				color: "rgba(128,128,128,1)",
				fontSize: HEIGHT / 20,
			},
			Help: {
				color: "rgba(128,128,128,1)",
				fontSize: HEIGHT / 20,
			},
			hours: { textAlign: "center", marginVertical: "10%" },
			Text: {
				color: "rgba(59,33,33,1)",
				textAlign: "center",
				marginTop: HEIGHT / 40,
				width: WIDTH / 4,
				fontSize: WIDTH / 20,
				fontFamily: "roboto-regular",
				letterSpacing: -1,
			},
			fromRow: {
				width: WIDTH / 1.5,
				justifyContent: "flex-end",
				flexDirection: "row",
			},

			blackRect: {
				marginTop: WIDTH / 40,
				marginLeft: WIDTH / 20,
				width: WIDTH / 7,
				height: HEIGHT / 20,
				backgroundColor: "#6b6661",
			},
			Start: {
				color: "rgba(0,0,0,1)",
				fontSize: WIDTH / 25,
				fontFamily: "armata-regular",
				marginLeft: WIDTH / 2.1,
			},
			Ends: {
				color: "rgba(0,0,0,1)",
				fontSize: WIDTH / 25,
				fontFamily: "armata-regular",
				marginLeft: WIDTH / 10,
			},

			Text1: {
				color: "rgba(59,33,33,1)",
				fontSize: WIDTH / 20,
				fontFamily: "roboto-regular",
				textAlign: "center",
				marginTop: HEIGHT / 20,
				marginBottom: HEIGHT / 40,
			},

			BlueButton: {
				width: WIDTH / 1.3,
				height: HEIGHT / 13,
				borderRadius: 100,
				marginTop: WIDTH / 5,
				alignSelf: "center",
			},
	  }))
	: (pricePagestyles = StyleSheet.create({
			container: {
				flex: 1,
				alignSelf: "center",
			},
			Row: {
				justifyContent: "space-between",
				flexDirection: "row",
			},
			scheduleRow: {
				width: "100%",
				flexDirection: "row",
				justifyContent: "space-around",
			},

			rect: {
				alignSelf: "center",
				width: WIDTH / 1.2,
				height: HEIGHT / 1.1,
				backgroundColor: "rgba(230, 230, 230,1)",
			},
			arrowLeft: {
				color: "rgba(128,128,128,1)",
				fontSize: HEIGHT / 20,
			},
			Help: {
				color: "rgba(128,128,128,1)",
				fontSize: HEIGHT / 20,
			},
			hours: { textAlign: "center", marginVertical: "10%" },
			Text: {
				color: "rgba(59,33,33,1)",
				textAlign: "center",
				marginTop: HEIGHT / 40,
				width: WIDTH / 4,
				fontSize: WIDTH / 30,
				fontFamily: "roboto-regular",
				letterSpacing: -1,
			},
			fromRow: {
				width: WIDTH / 1.5,
				justifyContent: "flex-end",
				flexDirection: "row",
			},

			blackRect: {
				marginTop: WIDTH / 30,
				marginLeft: WIDTH / 30,
				width: WIDTH / 7,
				height: HEIGHT / 20,
				backgroundColor: "#6b6661",
			},
			Start: {
				color: "rgba(0,0,0,1)",
				fontSize: WIDTH / 25,
				fontFamily: "armata-regular",
				marginLeft: WIDTH / 2.1,
			},
			Ends: {
				color: "rgba(0,0,0,1)",
				fontSize: WIDTH / 25,
				fontFamily: "armata-regular",
				marginLeft: WIDTH / 10,
			},

			Text1: {
				color: "rgba(59,33,33,1)",
				fontSize: WIDTH / 20,
				fontFamily: "roboto-regular",
				textAlign: "center",
				marginTop: HEIGHT / 20,
				marginBottom: HEIGHT / 40,
			},

			BlueButton: {
				width: WIDTH / 1.3,
				height: HEIGHT / 13,
				borderRadius: 100,
				marginTop: WIDTH / 15,
				alignSelf: "center",
			},
	  }));
export default pricePagestyles;
