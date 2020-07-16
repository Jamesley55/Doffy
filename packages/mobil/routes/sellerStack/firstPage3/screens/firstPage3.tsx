import * as React from "react";
import { SafeAreaView, Text, View } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { BlueButton } from "../../../../Component/BlueBotton";
import { SellerStackNavProps } from "../../../../screenStack/Tydefs/sellerParamList";
import { firstPage3Style } from "../style/style";

export function firstPage3({ navigation }: SellerStackNavProps<"Page3">) {
	return (
		<SafeAreaView style={firstPage3Style.container}>
			<EntypoIcon
				name="chevron-thin-up"
				style={firstPage3Style.gobackIcon}
				onPress={() => {
					navigation.goBack();
				}}
			></EntypoIcon>
			<Text
				onPress={() => {
					navigation.goBack();
				}}
				style={firstPage3Style.goBack1}
			>
				Go back
			</Text>
			<Text style={firstPage3Style.text}>
				you choose your price {"\n"} you do your schedule {"\n"}we do the
				marketing {"\n"}we bring the client
			</Text>

			<View style={firstPage3Style.Row}>
				<FeatherIcon name="user" style={firstPage3Style.icon} />
				<Text style={firstPage3Style.TextSteps}>Create your profile</Text>
			</View>
			<View style={firstPage3Style.Row}>
				<EntypoIcon name="text" style={firstPage3Style.icon} />
				<Text style={firstPage3Style.TextSteps}>do your schedule</Text>
			</View>
			<View style={firstPage3Style.Row}>
				<IoniconsIcon name="ios-images" style={firstPage3Style.icon} />
				<Text style={firstPage3Style.TextSteps}>
					presente some preview of your work
				</Text>
			</View>
			<View style={firstPage3Style.Row}>
				<FontAwesomeIcon
					name="address-book"
					style={firstPage3Style.icon}
				></FontAwesomeIcon>
				<Text style={firstPage3Style.TextSteps}> aquire some clients</Text>
			</View>
			<View style={firstPage3Style.Row}>
				<FontAwesomeIcon
					name="money"
					style={firstPage3Style.icon}
				></FontAwesomeIcon>
				<Text style={firstPage3Style.TextSteps}> Get paid</Text>
			</View>
			<BlueButton
				navigationPage="sellerSteps"
				navigation={navigation}
				Text1="Continue "
				style={firstPage3Style.BlueButton}
			></BlueButton>
		</SafeAreaView>
	);
}
