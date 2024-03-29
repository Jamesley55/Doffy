import * as React from "react";
import {
	StyleProp,
	StyleSheet,
	TextStyle,
	TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

interface Props {
	navigation: any;
	style: StyleProp<TextStyle>;
}

export class MaterialButtonHamburger extends React.PureComponent<Props> {
	render() {
		const { navigation } = this.props;
		return (
			<TouchableOpacity
				style={[styles.container, this.props.style]}
				onPress={() => {
					navigation.toggleDrawer();
				}}
			>
				<Icon name="menu" style={styles.caption}></Icon>
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
		elevation: 2,
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
		fontSize: 24,
		fontFamily: "roboto-700",
	},
});

export default MaterialButtonHamburger;
