import * as React from "react";
import {
	StyleProp,
	StyleSheet,
	Text,
	TextStyle,
	TouchableOpacity,
} from "react-native";

interface Props {
	navigationPage: any;
	navigation: any;
	style: StyleProp<TextStyle>;
	Text1: any;
}

export class BlueButton extends React.PureComponent<Props> {
	render() {
		const { navigation, style, Text1, navigationPage } = this.props;
		return (
			<TouchableOpacity
				style={[styles.container, style]}
				onPress={() => {
					navigation.navigate(navigationPage);
				}}
			>
				<Text style={styles.caption}>{Text1 || "BUTTON"}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#2196F3",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		paddingRight: 16,
		paddingLeft: 16,
		elevation: 2,
		minWidth: 88,
		borderRadius: 2,
		shadowOffset: {
			height: 1,
			width: 0,
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
