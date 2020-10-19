import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const CustomStyle = StyleSheet.create({
	Policy: {
		alignItems: "flex-start",
		marginLeft: WIDTH / 15,
		marginRight: WIDTH / 15,
	},
	Link: {
		flexDirection: "row",
		width: WIDTH,
		justifyContent: "space-around",
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
});
