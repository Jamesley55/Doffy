import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const sellerStepsStyle = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: "center",
	},
	DoffyLogo: {
		width: WIDTH / 5,
		height: HEIGHT / 10,
	},
	Row: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	icon: {
		color: "rgba(128,128,128,1)",
		fontSize: HEIGHT / 20,
	},
	welcomeName: {
		height: HEIGHT / 20,
		color: "rgba(0,0,0,1)",
		fontSize: WIDTH / 20,
		fontFamily: "roboto-700",
	},
	requiredSteps: {
		color: "rgba(0,0,0,1)",
		fontSize: HEIGHT / 40,
		fontFamily: "roboto-regular",
	},
	rect: {
		height: HEIGHT / 10,
		backgroundColor: "rgba(230, 230, 230,1)",
		flexDirection: "row",
		marginTop: HEIGHT / 50,
		justifyContent: "space-between",
	},
	BoxText: {
		color: "rgba(0,0,0,1)",
		fontSize: HEIGHT / 60,
		fontFamily: "roboto-regular",
	},
	Nexticon: {
		color: "rgba(128,128,128,1)",
		fontSize: HEIGHT / 25,
		height: HEIGHT / 25,
		width: HEIGHT / 25,
	},
	BoxRow: {
		height: HEIGHT / 40,
		flexDirection: "row",
		marginRight: WIDTH / 50,
		marginLeft: WIDTH / 40,
		marginTop: HEIGHT / 40,
	},
});
