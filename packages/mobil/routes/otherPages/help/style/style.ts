import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const helpStyles = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: "center",
	},
	rect: {
		alignSelf: "center",
		marginTop: HEIGHT / 20,
		width: WIDTH / 1.2,
		height: HEIGHT / 1.2,
		backgroundColor: "rgba(230, 230, 230,1)",
	},
	iconClose: {
		color: "rgba(128,128,128,1)",
		fontSize: WIDTH / 10,
		height: WIDTH / 10,
		width: WIDTH / 10,
		marginTop: WIDTH / 20,
		marginLeft: WIDTH / 20,
	},
	help: {
		color: "#121212",
		fontSize: WIDTH / 15,
		fontFamily: "roboto-700",
		marginTop: WIDTH / 20,
		marginLeft: WIDTH / 20,
	},
	icons: {
		color: "rgba(128,128,128,1)",
		fontSize: WIDTH / 10,
		height: WIDTH / 10,
		width: WIDTH / 10,
	},
	Text: {
		color: "#121212",
		fontSize: WIDTH / 15,
		fontFamily: "roboto-regular",
		marginLeft: WIDTH / 20,
	},
	Row: {
		flexDirection: "row",
		marginLeft: WIDTH / 20,
		marginTop: HEIGHT / 20,
	},

	rectLogout: {
		width: WIDTH / 1.4,
		height: HEIGHT / 12,
		backgroundColor: "rgba(144,144,144,1)",
		marginTop: HEIGHT / 3,
		marginLeft: WIDTH / 20,
	},
	logOut: {
		color: "#121212",
		fontSize: WIDTH / 15,
		fontFamily: "roboto-700",
		textAlign: "center",
		marginTop: WIDTH / 20,
		marginLeft: WIDTH / 20,
	},
});
