import { Dimensions, NativeModules, StyleSheet } from "react-native";
const { PlatformConstants } = NativeModules;
const deviceType = PlatformConstants.interfaceIdiom;

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

let loginStyle: any;
deviceType === "phone"
	? (loginStyle = StyleSheet.create({
			container: {
				backgroundColor: "rgba(155,145,145,30)",
			},
			doffyImage: {
				alignSelf: "center",
				width: WIDTH / 5,
				height: HEIGHT / 10,
				top: HEIGHT / 20,
				resizeMode: "contain",
				marginBottom: WIDTH / 5,
			},
			Title: {
				alignSelf: "center",
				width: WIDTH,
				color: "rgba(255,255,255,1)",
				fontSize: WIDTH / 30,
				fontFamily: "armata-regular",
				textAlign: "center",
				marginBottom: HEIGHT / 20,
			},
			input: {
				marginTop: HEIGHT / 100,
				marginBottom: HEIGHT / 100,
			},
			Submit: {
				alignSelf: "center",
				color: "rgba(255,255,255,1)",
				fontSize: WIDTH / 20,
				fontFamily: "armata-regular",
				textAlign: "center",
				marginTop: WIDTH / 10,
				marginBottom: WIDTH / 10,
			},
	  }))
	: (loginStyle = StyleSheet.create({
			container: {
				backgroundColor: "rgba(155,145,145,30)",
			},
			doffyImage: {
				alignSelf: "center",
				width: WIDTH / 5,
				height: HEIGHT / 10,
				top: HEIGHT / 20,
				resizeMode: "contain",
				marginBottom: WIDTH / 5,
			},
			Title: {
				alignSelf: "center",
				width: WIDTH,
				color: "rgba(255,255,255,1)",
				fontSize: WIDTH / 30,
				fontFamily: "armata-regular",
				textAlign: "center",
				marginBottom: HEIGHT / 20,
			},
			input: {
				marginTop: HEIGHT / 100,
				marginBottom: HEIGHT / 100,
			},
			Submit: {
				alignSelf: "center",
				color: "rgba(255,255,255,1)",
				fontSize: WIDTH / 20,
				fontFamily: "armata-regular",
				textAlign: "center",
				marginTop: WIDTH / 10,
				marginBottom: WIDTH / 10,
			},
	  }));
export default loginStyle;
