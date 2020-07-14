import * as React from "react";
import { StyleProp, StyleSheet, Switch, TextStyle, View } from "react-native";

interface Props {
	style: StyleProp<TextStyle> | any;
}

export class MaterialSwitch2 extends React.PureComponent<Props | any> {
	render() {
		const [value, setValue] = React.useState(false);
		return (
			<View style={[styles.container, this.props.style]}>
				<Switch
					value={value}
					thumbColor={value ? "#3F51B5" : null}
					disabled={false}
					trackColor={{
						true: "green",
						false: "rgba(230, 230, 230,1)",
					}}
					style={styles.switch1}
					onChange={() => setValue(!value)}
				></Switch>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
	},
	switch1: {
		width: 45,
		height: 22,
	},
});
