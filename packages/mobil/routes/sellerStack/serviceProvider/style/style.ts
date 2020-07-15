import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const serviceProviderStyle = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: "center",
	},
	rect: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	arrowLeft: {
		color: "rgba(128,128,128,1)",
		fontSize: HEIGHT / 20,
	},
	Help: {
		color: "rgba(128,128,128,1)",
		fontSize: HEIGHT / 20,
	},
	Title: {
		color: "#121212",
		fontSize: HEIGHT / 40,
		fontFamily: "roboto-700",
	},
	rectService: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginTop: HEIGHT / 40,
		marginBottom: HEIGHT / 40,
	},
	ServicesRect: {
		width: WIDTH / 2.5,
		height: HEIGHT / 7,
		backgroundColor: "rgba(230, 230, 230,1)",
		borderRadius: 30,
	},

	materialButtonPrimary1: {
		width: WIDTH / 1.2,
		height: HEIGHT / 13,
		borderRadius: 100,
		marginTop: WIDTH / 20,
		alignSelf: "center",
	},
});
