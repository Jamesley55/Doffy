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
	image1: {
		width: 191,
		height: 64,
		marginLeft: 27,
	},
	icon2: {
		color: "rgba(128,128,128,1)",
		fontSize: 40,
		marginLeft: 8,
		marginTop: 25,
	},
	icon3: {
		color: "rgba(128,128,128,1)",
		fontSize: 40,
		marginLeft: 11,
		marginTop: 25,
	},
	icon1Row: {
		height: 65,
		flexDirection: "row",
		marginTop: 37,
		marginLeft: 14,
		marginRight: 14,
	},
	rect: {
		width: WIDTH,
		height: HEIGHT / 5,
		backgroundColor: "rgba(230, 230, 230,1)",
		marginTop: HEIGHT / 80,
	},
	icon4: {
		color: "white",
		fontSize: 30,
	},
	Title: {
		color: "rgba(59,33,33,1)",
		fontSize: WIDTH / 15,
		fontFamily: "roboto-700",
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
	map: {
		height: HEIGHT / 5,
		width: WIDTH,
	},

	rect3: {
		width: "99%",
		marginLeft: 1,
		height: 49,
		borderColor: "rgba(87,87,87,1)",
		borderWidth: 1,
		marginTop: 13,
	},

	disponibility: {
		color: "rgba(59,33,33,1)",
		fontSize: WIDTH / 25,
		fontFamily: "roboto-regular",
		textAlign: "center",
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
