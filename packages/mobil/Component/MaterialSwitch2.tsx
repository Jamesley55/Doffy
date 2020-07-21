import * as React from "react";
import { StyleSheet, Switch, View } from "react-native";

interface Props {
	handle: any;
}

export class MaterialSwitch2 extends React.PureComponent<Props> {
	state = {
		values: false,
	};

	render() {
		return (
			<View style={[styles.container]}>
				<Switch
					value={this.state.values}
					trackColor={{
						true: "green",
						false: "rgba(230, 230, 230,1)",
					}}
					style={styles.switch1}
					onValueChange={() => {
						this.state.values
							? this.setState({ values: false }, () => {
									this.setState({ values: false });

									this.props.handle(this.state.values);
							  })
							: this.setState({ values: true }, () => {
									this.setState({ values: true });
									this.props.handle(this.state.values);
							  });
					}}
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
