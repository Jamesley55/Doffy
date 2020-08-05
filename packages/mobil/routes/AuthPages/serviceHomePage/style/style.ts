import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const serviceHomePageStyle = StyleSheet.create({
	upIcon: {
		color: "rgba(128,128,128,1)",
		fontSize: (WIDTH * 6) / 100,
		alignSelf: "center",
	},
	goBack: {
		color: "rgba(179,179,179,1)",
		fontSize: (WIDTH * 5) / 100,
		fontFamily: "roboto-regular",
		alignSelf: "center",
	},
	Text: {
		color: "rgba(0,0,0,1)",
		top: WIDTH / 30,
		marginBottom: WIDTH / 30,
		fontSize: (WIDTH * 4.3) / 100,
		alignSelf: "center",
		fontFamily: "roboto-700",
	},
	rectRow: {
		top: HEIGHT / 60,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around",
		marginBottom: WIDTH / 15,
	},
	rect: {
		shadowColor: "#000",
		shadowOpacity: 0.35,
		shadowRadius: 5,
		width: WIDTH / 2.3,
		height: HEIGHT / 6,
		backgroundColor: "rgba(230, 230, 230,1)",
		borderRadius: 30,
	},
	Image: {
		width: "100%",
		height: "75%",
		backgroundColor: "rgba(230, 230, 230,1)",
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
	},
	TextBox: {
		textAlign: "center",
		color: "rgba(96,96,96,1)",
		marginTop: "5%",
		fontSize: (WIDTH * 3) / 100,
		fontFamily: "armata-regular",
	},
});
