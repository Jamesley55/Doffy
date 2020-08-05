import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import requestPageStyle from "../routes/bookingPages/requestPage/styles/style";

interface Props {
	backgroundColor?: any;
	onPress: any;
	text: string;
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
						style={[
							{
								backgroundColor:
									(this.props.backgroundColor ? "green" : "white") || "white",
							},
							requestPageStyle.hoursList,
						]}
					>
						<Text
							style={{
								height: "100%",
								textAlign: "center",
								textAlignVertical: "center",
								marginVertical: 5,
							}}
						>
							{this.props.text}
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
