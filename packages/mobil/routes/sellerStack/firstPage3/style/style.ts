import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const firstPage3Style = StyleSheet.create({
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
	materialButtonPrimary: {
		width: 294,
		height: 66,
		borderRadius: 100,
		marginTop: 62,
		marginLeft: 29,
		textAlign: "center",
		alignSelf: "center",
	},
});
