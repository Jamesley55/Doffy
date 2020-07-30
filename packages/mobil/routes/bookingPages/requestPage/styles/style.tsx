import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const requestPageStyle = StyleSheet.create({
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
	selectService: {
		width: "100%",
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
});
