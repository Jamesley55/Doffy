import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import requestPageStyle from "../routes/bookingPages/requestPage/styles/style";
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
				<FastImage
					style={{
						width: "100%",
						height: "100%",
					}}
					source={{
						uri: this.props.profilPic,
						priority: FastImage.priority.normal,
					}}
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
				</FastImage>
			</View>
		);
	}
}
