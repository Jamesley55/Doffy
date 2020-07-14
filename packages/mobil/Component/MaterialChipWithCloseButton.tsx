import * as React from "react";
import { StyleProp, StyleSheet, Text, TextStyle, View } from "react-native";
import Icon from "react-native-vector-icons/";

interface Props {
	navigationPage: any;
	navigation: any;
	style: StyleProp<TextStyle>;
	text1: any;
}

export class MaterialChipWithCloseButton extends React.PureComponent<Props> {
	render() {
		return (
			<View style={[styles.container, this.props.style]}>
				<Text style={styles.chipText}>
					{this.props.text1 || "Example Chip"}
				</Text>
				<Icon name="close-circle" style={styles.iconStyle} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#E0E0E0",
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		paddingLeft: 12,
		borderRadius: 50,
	},
	chipText: {
		color: "rgba(0,0,0,0.87)",
		fontSize: 13,
	},
	iconStyle: {
		color: "#9E9E9E",
		fontSize: 24,
		marginLeft: 4,
		marginRight: 4,
	},
});
