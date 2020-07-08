import { Dimensions, StyleSheet } from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

export const SearchPageStyle = StyleSheet.create({
	container: {
		flex: 0.45,
	},
	iconFleche: {
		color: "rgba(128,128,128,1)",
		fontSize: 35,
		marginLeft: WIDTH / 15,
		marginRight: WIDTH / 3.8,
	},
	iconDelete: {
		color: "rgba(128,128,128,1)",
		fontSize: 35,
		marginLeft: WIDTH / 15,
	},
	doffyImage: {
		width: WIDTH / 5,
		height: HEIGHT / 10,
	},
	materialUnderlineTextbox: {
		width: 336,
		height: 55,
		backgroundColor: "rgba(245,245,245,1)",
		marginLeft: WIDTH / 15,
	},
	Submit: {
		alignSelf: "center",
		color: "rgba(0,0,0,1)",
		fontSize: WIDTH / 20,
		fontFamily: "armata-regular",
		textAlign: "center",
	},
});
