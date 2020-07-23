import * as React from "react";
import {
	StyleProp,
	StyleSheet,
	Text,
	TextStyle,
	TouchableOpacity,
} from "react-native";

interface Props {
	style?: StyleProp<TextStyle>;
	Text1: any;
	onPress?: any;
}

export class BlueButton extends React.PureComponent<Props> {
	render() {
		const { style, Text1 } = this.props;
		return (
			<TouchableOpacity
				style={[styles.container, style]}
				onPress={this.props.onPress}
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
