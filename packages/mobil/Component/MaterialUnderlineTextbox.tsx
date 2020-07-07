import * as React from "react";
import {
	StyleProp,
	StyleSheet,
	TextInput,
	TextStyle,
	View,
} from "react-native";
interface Props {
	style: StyleProp<TextStyle>;
	textInput1: any;
}

export class MaterialUnderlineTextbox extends React.PureComponent<Props> {
	render() {
		return (
			<View style={[styles.container, this.props.style]}>
				<TextInput
					keyboardAppearance="dark"
					returnKeyType="search"
					placeholder="What are you looking for?"
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
		alignItems: "center",
		borderColor: "#D9D5DC",
		borderBottomWidth: 1,
	},
	inputStyle: {
		flex: 1,
		color: "#000",
		alignSelf: "stretch",
		paddingTop: 16,
		paddingRight: 5,
		paddingBottom: 8,
		fontSize: 16,
		fontFamily: "roboto-regular",
		lineHeight: 16,
	},
});

export default MaterialUnderlineTextbox;
