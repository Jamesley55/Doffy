import * as React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function MaterialCheckbox5(props: any) {
	return (
		<TouchableOpacity style={[styles.container, props.style]}>
			<Icon
				name={props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
				style={styles.checkIcon}
			/>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "transparent",
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 20,
	},
	checkIcon: {
		color: "#3F51B5",
		fontFamily: "roboto-regular",
		fontSize: 28,
		lineHeight: 28,
	},
});

export default MaterialCheckbox5;
