import * as React from "react";
import { StyleProp, StyleSheet, Switch, TextStyle, View } from "react-native";

interface Props {
	style: StyleProp<TextStyle> | any;
}
interface PropsGreen {
	style: StyleProp<TextStyle> | any;
	green: boolean;
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
					trackColor={{
						true: "green",
						false: "rgba(230, 230, 230,1)",
					}}
					style={styles.switch1}
					onChange={() =>
						this.state.values
							? this.setState({ values: false })
							: this.setState({ values: true })
					}
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
