import * as React from "react";
import { Image, View } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import requestPageStyle from "../routes/bookingPages/requestPage/styles/style";
interface Props {
	navigation: any;
}
export class Header extends React.PureComponent<Props> {
	render() {
		return (
			<View style={requestPageStyle.Row}>
				<EntypoIcon
					name="arrow-left"
					style={requestPageStyle.icon}
					onPress={() => {
						this.props.navigation.goBack();
					}}
				/>
				<Image
					source={require("../logo/LogoJamesleyApp.png")}
					resizeMode="contain"
					style={requestPageStyle.logo}
				/>

				<MaterialCommunityIconsIcon
					name="account"
					style={requestPageStyle.icon}
					onPress={() => {
						this.props.navigation.openDrawer();
					}}
				/>
			</View>
		);
	}
}
