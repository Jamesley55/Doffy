import * as React from "react";
import {
	StyleProp,
	StyleSheet,
	Text,
	TextStyle,
	TouchableOpacity,
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { welcomePageStyle } from "../routes/AuthPages/welcomePage/src/style/style";

interface Props {
	navigation: any;
	nextScreen: any;
	icon: any;
	style: StyleProp<TextStyle>;
	text1: string;
}
export class MaterialButtonGrey extends React.PureComponent<Props> {
	render() {
		const { navigation } = this.props;
		return (
			<TouchableOpacity
				onPress={() => {
					navigation.navigate(this.props.nextScreen);
				}}
				style={[styles.container, this.props.style]}
			>
				{this.props.icon === "logo-apple" ? (
					<IoniconsIcon
						name={this.props.icon}
						style={welcomePageStyle.iconApple}
					/>
				) : (
					<EvilIconsIcon
						name={this.props.icon}
						style={welcomePageStyle.iconGoogle}
					/>
				)}
				<Text style={styles.caption}>{this.props.text1 || "BUTTON"}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#999999",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingRight: 16,
		paddingLeft: 16,
		elevation: 2,
		minWidth: 88,
		borderRadius: 2,
		shadowOffset: {
			height: 5,
			width: 5,
		},
		shadowColor: "#000",
		shadowOpacity: 0.35,
		shadowRadius: 5,
	},
	caption: {
		color: "#000000",
		fontSize: 14,
		fontFamily: "roboto-regular",
	},
});

export default MaterialButtonGrey;
