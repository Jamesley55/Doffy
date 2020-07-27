import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
	backgroundColor?: any;
	onPress: any;
}

export class HoursList extends React.PureComponent<Props> {
	state = {
		values: false,
	};
	render() {
		return (
			<View style={[styles.container]}>
				<TouchableOpacity
					style={{
						flexDirection: "row",
						marginBottom: 10,
						marginTop: 10,
					}}
					onPress={this.props.onPress}
				>
					<View
						style={{
							backgroundColor:
								(this.props.backgroundColor ? "green" : "white") || "white",
							height: 30,
							width: 80,
							borderRadius: 30,
							alignSelf: "center",
							marginLeft: 5,
							marginRight: 5,
							shadowOffset: {
								height: 1,
								width: 1,
							},
							shadowColor: "#000",
							shadowOpacity: 0.35,
							shadowRadius: 5,
						}}
					>
						<Text
							style={{
								height: "100%",
								textAlign: "center",
								textAlignVertical: "center",
								marginVertical: 5,
							}}
						>
							9:00
						</Text>
					</View>
				</TouchableOpacity>
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
