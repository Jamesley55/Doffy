import * as React from "react";
import {
	StyleProp,
	StyleSheet,
	Text,
	TextStyle,
	TouchableOpacity,
} from "react-native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import { welcomePageStyle } from "../routes/AuthPages/welcomePage/src/style/style";

interface Props {
	navigation: any;
	nextScreen: any;
	icon: any;
	style: StyleProp<TextStyle>;
	text1: string;
}
export class MaterialButtonViolet1 extends React.PureComponent<Props> {
	render() {
		const { navigation } = this.props;
		return (
			<TouchableOpacity
				onPress={() => {
					navigation.navigate(this.props.nextScreen);
				}}
				style={[styles.container, this.props.style]}
			>
				<EvilIconsIcon
					name={this.props.icon}
					style={welcomePageStyle.iconFacebook}
				/>
				<Text style={styles.caption}>{this.props.text1 || "BUTTON"}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#3F51B5",
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
		color: "#fff",
		fontSize: 14,
		fontFamily: "roboto-regular",
	},
});

export default MaterialButtonViolet1;
