import * as React from "react";
import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { requestPageStyle } from "../routes/bookingPages/requestPage/styles/style";

interface Props {
	profilPic: string;
	name: string;
}

export class HeaderPicture extends React.PureComponent<Props> {
	state = {
		values: false,
	};

	render() {
		return (
			<View style={requestPageStyle.rect}>
				<ImageBackground
					style={{
						width: "100%",
						height: "100%",
					}}
					source={{ uri: this.props.profilPic, cache: "force-cache" }}
				>
					<View style={requestPageStyle.Row}>
						<View style={requestPageStyle.nameBox}>
							<Text
								style={[
									requestPageStyle.Text,
									{
										margin: "5%",
										textAlign: "center",
									},
								]}
							>
								{this.props.name}
							</Text>
						</View>
						<TouchableOpacity
							onPress={() => {
								this.setState({ values: !this.state.values });
							}}
						>
							<MaterialCommunityIconsIcon
								name="fire"
								style={[
									requestPageStyle.rateIcon,
									{ color: this.state.values ? "red" : "white" },
								]}
							/>
						</TouchableOpacity>
					</View>
				</ImageBackground>
			</View>
		);
	}
}
