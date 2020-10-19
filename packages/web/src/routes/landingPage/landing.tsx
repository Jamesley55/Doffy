import { BlueButton } from "@doffy/component";
import { Link } from "@react-navigation/native";
import * as React from "react";
import {
	Image,
	ImageBackground,
	Linking,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { CustomStyle } from "../style/style";
import style from "./style/style";
const LandingPage: React.FC = () => {
	// window.onload = function () {
	// 	//considering there aren't any hashes in the urls already
	// 	if (!window.location.hash) {
	// 		//setting window location
	// 		window.location = (window.location + "#loaded") as any;
	// 		//using reload() method to reload web page
	// 		window.location.reload();
	// 	}
	// };
	if (window.location.href.substr(-2) !== "?r") {
		window.location = (window.location.href + "?r") as any;
	}

	return (
		<View style={style.contain}>
			<View style={{ backgroundColor: "gray", height: 50 }}>
				<TouchableOpacity
					onPress={() => {
						Linking.openURL("realDoffy.com");
					}}
				>
					<Image
						source={require("./asset/icon.png")}
						style={style.logo}
						resizeMethod="resize"
					/>
				</TouchableOpacity>
			</View>
			<View style={[style.row]}>
				<View>
					<Text style={style.text}>
						Download our app to book your next appointment anytime, anywhere For
						FREE
					</Text>

					<Text style={style.text}>OR,</Text>
					<Text style={style.text}>
						to manage your clientelle anytime, anywhere for FREE
					</Text>
					<View style={style.row}>
						<View style={{ flexDirection: "row", marginTop: 20 }}>
							<ImageBackground
								source={require("./asset/case.png")}
								style={style.imageBackground}
							/>
							<View style={style.doeBox}>
								<Image
									style={style.doe}
									source={require("./asset/doe.jpg")}
									resizeMethod="resize"
									resizeMode="cover"
								/>
							</View>
						</View>
						<BlueButton
							style={style.BlueButton}
							Text1="Download doffy For free"
							onPress={() => {
								Linking.openURL("https://itunes.apple.com/app/id1510079483");
							}}
						/>
					</View>
				</View>
				<View style={style.previewStack}>
					<View style={{ flexDirection: "row", marginTop: 20 }}>
						<View style={style.previewBox}>
							<Image
								style={style.preview}
								source={require("./asset/MakeupArtist.jpg")}
								resizeMethod="resize"
								resizeMode="cover"
							/>
						</View>
						<View style={style.previewBox}>
							<Image
								style={style.preview}
								source={require("./asset/eyelash.jpg")}
								resizeMethod="resize"
								resizeMode="cover"
							/>
						</View>
					</View>
					<View style={style.middlePreview}>
						<Image
							style={style.preview}
							source={require("./asset/barber.jpg")}
							resizeMethod="resize"
							resizeMode="cover"
						/>
					</View>
					<View style={{ flexDirection: "row", marginTop: 20 }}>
						<View style={style.previewBox}>
							<Image
								style={style.preview}
								source={require("./asset/LashTechnician.jpg")}
								resizeMethod="resize"
								resizeMode="cover"
							/>
						</View>
						<View style={style.previewBox}>
							<Image
								style={style.preview}
								source={require("./asset/hairSalon.jpg")}
								resizeMethod="resize"
								resizeMode="cover"
							/>
						</View>
					</View>
				</View>
			</View>
			<Text
				style={{
					alignSelf: "center",
					fontFamily: "armata-regular",
					fontSize: 16,
				}}
			>
				Doffy, Appointments Made Easy
			</Text>
			<View style={style.appFooter}>
				<View style={CustomStyle.Link}>
					<Link to="/PrivacyPolicy" style={styles.textStyle}>
						Privacy Policy
					</Link>
					<Link to="/TermOfService" style={styles.textStyle}>
						Term of service
					</Link>
					<View>
						<Text>© 2020 Doffy Inc.</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = {
	textStyle: {
		fontSize: 12,
	},
	viewStyle: {
		flex: 1,

		flexDirection: "row" as "row",
		alignItems: "center" as "center",
		justifyContent: "center" as "center",
	},
};

export default LandingPage;
