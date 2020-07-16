import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const pricePagestyles = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: "center",
	},
	Row: {
		justifyContent: "space-between",
		flexDirection: "row",
	},
	scheduleRow: {
		justifyContent: "center",
		flexDirection: "row",
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

	Text: {
		color: "rgba(59,33,33,1)",
		fontSize: WIDTH / 20,
		marginLeft: WIDTH / 40,
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
		width: WIDTH / 6,
		height: HEIGHT / 20,
		backgroundColor: "white",
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
		marginTop: WIDTH / 20,
		alignSelf: "center",
	},
});
