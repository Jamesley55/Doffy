import { Dimensions, NativeModules, StyleSheet } from "react-native";

const { PlatformConstants } = NativeModules;
const deviceType = PlatformConstants.interfaceIdiom;
const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
let requestPageStyle: any;

deviceType === "phone"
	? (requestPageStyle = StyleSheet.create({
			container: {
				flex: 1,
			},
			Row: {
				backgroundColor: "transparent",
				flexDirection: "row",
				justifyContent: "space-between",
			},
			logo: {
				width: WIDTH / 2,
				height: HEIGHT / 15,
			},
			icon: {
				color: "rgba(128,128,128,1)",
				fontSize: 40,
				marginTop: HEIGHT / 95,
			},
			nameBox: {
				backgroundColor: "white",
				marginTop: HEIGHT / 200,
				height: HEIGHT / 25,
				width: WIDTH / 2.5,
				borderRadius: 20,
				shadowOffset: {
					height: 1,
					width: 0,
				},
				shadowColor: "#000",
				shadowOpacity: 0.35,
				shadowRadius: 5,
			},
			rect: {
				width: WIDTH,
				height: HEIGHT / 5,
				backgroundColor: "rgba(230, 230, 230,1)",
				marginTop: HEIGHT / 80,
			},
			rateIcon: {
				color: "white",
				fontSize: WIDTH / 13,
			},
			Title: {
				color: "rgba(59,33,33,1)",
				fontSize: WIDTH / 15,
				fontFamily: "roboto-700",
				marginTop: HEIGHT / 40,
				textAlign: "center",
				marginBottom: HEIGHT / 90,
			},
			AvailabilityStyle: {
				color: "white",
				fontFamily: "armata-regular",
				fontSize: 12,
				marginBottom: WIDTH / 50,
				shadowOffset: {
					height: 1,
					width: 0,
				},
				shadowColor: "white",
				shadowOpacity: 5,
				shadowRadius: 5,
			},
			openGoogle: {
				textAlign: "center",
				fontSize: 12,
				marginTop: "10%",
			},
			typeService: {
				width: deviceType === "phone" ? 300 : 750,
			},
			openInGoogle: {
				backgroundColor: "rgba(230, 230, 230,1)",
				height: 50,
				width: 150,
				marginRight: 10,
				borderRadius: 100,
			},
			Text: {
				color: "rgba(59,33,33,1)",
				fontSize: WIDTH / 30,
				fontFamily: "roboto-regular",
			},
			rect2: {
				width: WIDTH,
				height: WIDTH,
			},
			open: {
				height: HEIGHT / 5,
				width: WIDTH,
			},
			map: {
				height: HEIGHT / 4,
				width: WIDTH,
			},
			timeSelector: {
				width: "100%",
				height: 50,
				backgroundColor: "white",
			},
			hoursList: {
				height: 30,
				width: 80,
				borderRadius: 30,
				alignSelf: "center",
				marginLeft: 5,
				marginRight: 5,
				shadowOffset: {
					height: 1,
					width: 1,
				},
				shadowColor: "#000",
				shadowOpacity: 0.35,
				shadowRadius: 5,
			},
			selectService: {
				width: "100%",
				backgroundColor: "white",
				justifyContent: "space-between",
				flexDirection: "row",
			},
			payementRect: {
				width: "100%",
				height: 34,
				backgroundColor: "white",
				justifyContent: "space-between",
				flexDirection: "row",
			},
			inShop: {
				marginRight: WIDTH / 1.3,
				justifyContent: "center",
			},
			BlueButton: {
				width: WIDTH / 1.3,
				height: HEIGHT / 13,
				borderRadius: 100,
				marginTop: WIDTH / 20,
				marginBottom: WIDTH / 10,
				alignSelf: "center",
			},
	  }))
	: (requestPageStyle = StyleSheet.create({
			container: {
				flex: 1,
			},
			Row: {
				backgroundColor: "transparent",
				flexDirection: "row",
				justifyContent: "space-between",
			},
			logo: {
				width: WIDTH / 4,
				height: HEIGHT / 15,
			},
			icon: {
				color: "rgba(128,128,128,1)",
				fontSize: 60,
				marginTop: HEIGHT / 55,
			},
			nameBox: {
				backgroundColor: "white",
				marginTop: HEIGHT / 300,
				height: HEIGHT / 15,
				width: WIDTH / 2.5,
				borderRadius: 30,
				shadowOffset: {
					height: 1,
					width: 0,
				},
				shadowColor: "#000",
				shadowOpacity: 0.35,
				shadowRadius: 5,
			},
			rect: {
				width: WIDTH,
				height: HEIGHT / 2,
				backgroundColor: "rgba(230, 230, 230,1)",
				marginTop: HEIGHT / 80,
			},
			rateIcon: {
				color: "white",
				fontSize: WIDTH / 13,
			},
			Title: {
				color: "rgba(59,33,33,1)",
				fontSize: WIDTH / 25,
				fontFamily: "roboto-700",
				marginTop: HEIGHT / 40,
				textAlign: "center",
				marginBottom: HEIGHT / 90,
			},
			typeService: {
				width: deviceType === "phone" ? 300 : WIDTH / 1.2,
			},
			AvailabilityStyle: {
				color: "white",
				fontFamily: "armata-regular",
				fontSize: 20,
				marginBottom: WIDTH / 50,
				shadowOffset: {
					height: 1,
					width: 0,
				},
				shadowColor: "white",
				shadowOpacity: 5,
				shadowRadius: 5,
			},
			openGoogle: {
				textAlign: "center",
				fontSize: 22,
				marginTop: "10%",
			},
			Text: {
				color: "rgba(59,33,33,1)",
				fontSize: WIDTH / 30,
				fontFamily: "roboto-regular",
			},
			rect2: {
				width: WIDTH,
				height: WIDTH,
			},
			openInGoogle: {
				backgroundColor: "rgba(230, 230, 230,1)",
				height: 80,
				width: 250,
				marginRight: 10,
				borderRadius: 100,
			},
			open: {
				height: HEIGHT / 4,
				width: WIDTH,
			},
			map: {
				height: HEIGHT / 3,
				width: WIDTH,
			},
			selectService: {
				width: "100%",
				backgroundColor: "white",
				justifyContent: "space-between",
				flexDirection: "row",
			},
			timeSelector: {
				width: "100%",
				height: 50,
				backgroundColor: "white",
			},
			hoursList: {
				height: HEIGHT / 40,
				width: WIDTH / 4,
				borderRadius: 30,
				alignSelf: "center",
				marginLeft: 5,
				marginRight: 5,
				shadowOffset: {
					height: 1,
					width: 1,
				},
				shadowColor: "#000",
				shadowOpacity: 0.35,
				shadowRadius: 5,
			},
			inShop: {
				marginRight: WIDTH / 1.2,
				justifyContent: "center",
			},
			payementRect: {
				width: "100%",
				height: 34,
				backgroundColor: "white",
				justifyContent: "space-between",
				flexDirection: "row",
			},
			BlueButton: {
				width: WIDTH / 1.3,
				height: HEIGHT / 13,
				borderRadius: 100,
				marginTop: WIDTH / 20,
				marginBottom: WIDTH / 10,
				alignSelf: "center",
			},
	  }));
export default requestPageStyle;
