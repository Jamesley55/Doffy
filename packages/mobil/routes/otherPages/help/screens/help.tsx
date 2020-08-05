import * as React from "react";
import { Linking, SafeAreaView, Text, View } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import { AuthContext } from "../../../../shareFuction/userContext";
import { helpStyles } from "../style/style";

const Tel = "14387638617";
export function help({ navigation }) {
	const { logout } = React.useContext(AuthContext);
	return (
		<SafeAreaView style={helpStyles.container}>
			<View style={helpStyles.rect}>
				<FeatherIcon
					name="x"
					style={helpStyles.iconClose}
					onPress={() => {
						navigation.goBack();
					}}
				/>
				<Text style={helpStyles.help}>Help</Text>
				<View style={helpStyles.Row}>
					<EntypoIcon
						name="chat"
						style={helpStyles.icons}
						onPress={() => {
							Linking.openURL(
								"https://www.instagram.com/invites/contact/?i=1iyqatpnff6ji&utm_content=fnzmwei"
							);
						}}
					/>
					<Text
						style={helpStyles.Text}
						onPress={() => {
							Linking.openURL(
								"https://www.instagram.com/invites/contact/?i=1iyqatpnff6ji&utm_content=fnzmwei"
							);
						}}
					>
						Chat with support
					</Text>
				</View>
				<View style={helpStyles.Row}>
					<FeatherIcon
						name="phone-call"
						style={helpStyles.icons}
						onPress={() => {
							Linking.openURL(`telprompt://+${Tel}`);
						}}
					></FeatherIcon>
					<Text
						style={helpStyles.Text}
						onPress={() => {
							Linking.openURL(`telprompt://+${Tel}`);
						}}
					>
						Call support
					</Text>
				</View>
				<View style={helpStyles.rectLogout}>
					<Text style={helpStyles.logOut} onPress={logout}>
						Log out
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}
