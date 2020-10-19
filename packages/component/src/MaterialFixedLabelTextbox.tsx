import * as React from "react";
import {
	StyleProp,
	StyleSheet,
	Text,
	TextInput,
	TextStyle,
	View,
} from "react-native";

interface Props {
	style: StyleProp<TextStyle>;
	text1: any;
	textInput: any;
}
export class MaterialFixedLabelTextbox extends React.PureComponent<Props> {
	render() {
		return (
			<View style={[styles.container, this.props.style]}>
				<Text style={styles.label}>{this.props.text1 || "FixedLabel"}</Text>
				<TextInput
					placeholder={this.props.textInput || undefined}
					style={styles.inputStyle}
				></TextInput>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "transparent",
		flexDirection: "row",
		paddingLeft: 16,
		borderColor: "#D9D5DC",
		borderBottomWidth: 1,
	},
	label: {
		color: "#000",
		alignSelf: "flex-start",
		opacity: 0.5,
		paddingTop: 16,
		paddingBottom: 8,
		fontSize: 16,
		lineHeight: 16,
	},
	inputStyle: {
		flex: 1,
		color: "#000",
		alignSelf: "stretch",
		paddingTop: 14,
		paddingRight: 5,
		paddingBottom: 8,
		paddingLeft: 30,
		fontSize: 16,
		lineHeight: 16,
	},
});

export default MaterialFixedLabelTextbox;
