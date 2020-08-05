import { Dimensions, NativeModules, StyleSheet } from "react-native";

const { PlatformConstants } = NativeModules;
const deviceType = PlatformConstants.interfaceIdiom;

let welcomePageStyle: any;

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;

const imageHeight = Math.round((WIDTH * 9) / 26);
const imageHeightIpad = Math.round((WIDTH * 7) / 26);

const imageWidth = WIDTH;

deviceType === "phone"
	? (welcomePageStyle = StyleSheet.create({
			container: {
				flex: 1,
				backgroundColor: "rgba(13,0,0,1)",
			},
			image: {
				width: imageWidth,
				height: imageHeight,
				resizeMode: "contain",
				marginBottom: (WIDTH * 6) / 100,
			},
			welcome: {
				color: "rgba(255,255,255,1)",
				fontSize: WIDTH / 10,
				fontFamily: "armata-regular",
				textAlign: "center",
				marginBottom: WIDTH / 8,
			},
			continueWithApple: {
				width: WIDTH / 1.5,
				height: HEIGHT / 20,
				marginBottom: WIDTH / 10,
				alignSelf: "center",
				backgroundColor: "rgba(255,255,255,1)",
				borderRadius: 99,
				shadowOffset: {
					height: 5,
					width: 5,
				},
				shadowColor: "rgba(224,224,224,1)",
			},
			iconApple: {
				color: "rgba(128,128,128,1)",
				fontSize: WIDTH / 15,
				right: WIDTH / 15,
			},
			continueWithFacebook: {
				width: WIDTH / 1.5,
				height: HEIGHT / 20,
				marginBottom: WIDTH / 10,

				alignSelf: "center",
				borderRadius: 100,
				shadowOffset: {
					height: 5,
					width: 5,
				},
				shadowColor: "rgba(82,155,251,1)",
			},
			iconFacebook: {
				color: "rgba(255,255,255,1)",
				fontSize: WIDTH / 15,
				right: WIDTH / 20,
			},
			continueWithGoogle: {
				width: WIDTH / 1.5,
				height: HEIGHT / 20,
				marginBottom: WIDTH / 10,

				alignSelf: "center",
				backgroundColor: "rgba(255,255,255,1)",
				borderRadius: 99,
				shadowOffset: {
					height: 5,
					width: 5,
				},
				shadowColor: "rgba(224,224,224,1)",
			},
			iconGoogle: {
				color: "rgba(128,128,128,1)",
				fontSize: WIDTH / 15,
				right: WIDTH / 20,
			},
			signUpFree: {
				width: WIDTH / 1.5,
				height: HEIGHT / 20,
				marginTop: WIDTH / 2,
				marginBottom: WIDTH / 4,

				alignSelf: "center",
				borderRadius: 100,
			},
			lOgIn: {
				color: "rgba(255,255,255,1)",
				fontSize: WIDTH / 20,
				fontFamily: "armata-regular",
				textAlign: "center",
			},
	  }))
	: (welcomePageStyle = StyleSheet.create({
			container: {
				flex: 1,
				backgroundColor: "rgba(13,0,0,1)",
			},
			image: {
				width: imageWidth,
				height: imageHeightIpad,
				resizeMode: "contain",
				marginBottom: (WIDTH * 6) / 100,
			},
			welcome: {
				color: "rgba(255,255,255,1)",
				fontSize: WIDTH / 10,
				fontFamily: "armata-regular",
				textAlign: "center",
				marginBottom: WIDTH / 8,
			},
			continueWithApple: {
				width: WIDTH / 1.5,
				height: HEIGHT / 20,
				marginBottom: WIDTH / 10,
				alignSelf: "center",
				backgroundColor: "rgba(255,255,255,1)",
				borderRadius: 99,
				shadowOffset: {
					height: 5,
					width: 5,
				},
				shadowColor: "rgba(224,224,224,1)",
			},
			iconApple: {
				color: "rgba(128,128,128,1)",
				fontSize: WIDTH / 15,
				right: WIDTH / 15,
			},
			continueWithFacebook: {
				width: WIDTH / 1.5,
				height: HEIGHT / 20,
				marginBottom: WIDTH / 10,

				alignSelf: "center",
				borderRadius: 100,
				shadowOffset: {
					height: 5,
					width: 5,
				},
				shadowColor: "rgba(82,155,251,1)",
			},
			iconFacebook: {
				color: "rgba(255,255,255,1)",
				fontSize: WIDTH / 15,
				right: WIDTH / 20,
			},
			continueWithGoogle: {
				width: WIDTH / 1.5,
				height: HEIGHT / 20,
				marginBottom: WIDTH / 10,

				alignSelf: "center",
				backgroundColor: "rgba(255,255,255,1)",
				borderRadius: 99,
				shadowOffset: {
					height: 5,
					width: 5,
				},
				shadowColor: "rgba(224,224,224,1)",
			},
			iconGoogle: {
				color: "rgba(128,128,128,1)",
				fontSize: WIDTH / 15,
				right: WIDTH / 20,
			},
			signUpFree: {
				width: WIDTH / 1.5,
				height: HEIGHT / 20,
				marginTop: WIDTH / 10,
				marginBottom: WIDTH / 4,
				alignSelf: "center",
				borderRadius: 100,
			},
			lOgIn: {
				color: "rgba(255,255,255,1)",
				fontSize: WIDTH / 20,
				fontFamily: "armata-regular",
				textAlign: "center",
			},
	  }));

export default welcomePageStyle;
