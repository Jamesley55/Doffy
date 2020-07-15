import * as React from "react";
import { StyleProp, StyleSheet, Switch, TextStyle, View } from "react-native";

interface Props {
	style: StyleProp<TextStyle> | any;
}

export class MaterialSwitch2 extends React.PureComponent<Props | any> {
	state = {
		values: false,
	};

	render() {
		return (
			<View style={[styles.container, this.props.style]}>
				<Switch
					value={this.state.values}
					disabled={false}
					trackColor={{
						true: "green",
						false: "rgba(230, 230, 230,1)",
					}}
					style={styles.switch1}
					onChange={() => this.setState({ values: !this.state.values })}
				/>
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
