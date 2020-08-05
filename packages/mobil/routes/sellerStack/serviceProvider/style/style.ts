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
		shadowColor: "#000",
		shadowOpacity: 0.35,
		shadowRadius: 5,
		width: WIDTH / 2.5,
		height: HEIGHT / 7,
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
	materialButtonPrimary1: {
		width: WIDTH / 1.2,
		height: HEIGHT / 13,
		borderRadius: 100,
		marginTop: WIDTH / 30,
		marginBottom: WIDTH / 5,
		alignSelf: "center",
	},
});
