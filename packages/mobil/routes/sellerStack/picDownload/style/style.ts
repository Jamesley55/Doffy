import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const picDownloadStyle = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: "center",
	},
	Row: {
		justifyContent: "space-between",
		flexDirection: "row",
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
		color: "rgba(59,33,33,1)",
		fontSize: 21,
		fontFamily: "roboto-700",
		textAlign: "center",
		marginTop: HEIGHT / 30,
	},
	Text: {
		color: "rgba(59,33,33,1)",
		fontSize: 16,
		fontFamily: "roboto-regular",
		textAlign: "center",
	},

	rect: {
		width: WIDTH / 2.5,
		height: HEIGHT / 7,
		borderRadius: 20,
		backgroundColor: "rgba(230, 230, 230,1)",
		marginTop: HEIGHT / 20,
		alignSelf: "center",
	},
	icon: {
		color: "rgba(128,128,128,1)",
		fontSize: WIDTH / 5,
		alignSelf: "center",
		marginTop: HEIGHT / 40,
	},
	Imagerect: {
		width: WIDTH / 2.5,
		height: HEIGHT / 7,
		borderRadius: 20,
		marginTop: HEIGHT / 20,
		alignSelf: "center",
	},
	Image: { width: "100%", height: "100%", borderRadius: 20 },

	BlueButton: {
		width: WIDTH / 1.3,
		height: HEIGHT / 13,
		borderRadius: 100,
		marginTop: WIDTH / 20,
		alignSelf: "center",
	},
});
