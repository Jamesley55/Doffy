import * as React from "react";
import {
	StyleProp,
	StyleSheet,
	Text,
	TextStyle,
	TouchableOpacity,
} from "react-native";

interface Props {
	navigation: any;
	nextScreen: any;
	style: StyleProp<TextStyle>;
	text1: string;
}
export class MaterialButtonDark extends React.PureComponent<Props> {
	render() {
		const { navigation } = this.props;

		return (
			<TouchableOpacity
				onPress={() => {
					navigation.navigate(this.props.nextScreen);
				}}
				style={[styles.container, this.props.style]}
			>
				<Text style={styles.caption}>{this.props.text1 || "BUTTON"}</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#212121",
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
	},
});

export default MaterialButtonDark;
