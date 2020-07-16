import * as React from "react";
import { SafeAreaView, Text, View } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { BlueButton } from "../../../../Component/BlueBotton";
import { SellerStackNavProps } from "../../../../screenStack/Tydefs/sellerParamList";
import { serviceProviderStyle } from "../style/style";

export function serviceProvider({
	navigation,
}: SellerStackNavProps<"serviceProvider">) {
	return (
		<SafeAreaView style={serviceProviderStyle.container}>
			<View style={serviceProviderStyle.rect}>
				<EntypoIcon
					name="arrow-left"
					style={serviceProviderStyle.arrowLeft}
					onPress={() => {
						navigation.goBack();
					}}
				></EntypoIcon>
				<IoniconsIcon
					name="md-help-circle-outline"
					style={serviceProviderStyle.Help}
					onPress={() => {
						navigation.navigate("help");
					}}
				/>
			</View>
			<Text style={serviceProviderStyle.Title}>
				Choose the services that you are ready to provide
			</Text>
			<View style={serviceProviderStyle.rectService}>
				<View style={serviceProviderStyle.ServicesRect}></View>
				<View style={serviceProviderStyle.ServicesRect}></View>
			</View>
			<View style={serviceProviderStyle.rectService}>
				<View style={serviceProviderStyle.ServicesRect}></View>
				<View style={serviceProviderStyle.ServicesRect}></View>
			</View>
			<View style={serviceProviderStyle.rectService}>
				<View style={serviceProviderStyle.ServicesRect}></View>
				<View style={serviceProviderStyle.ServicesRect}></View>
			</View>
			<BlueButton
				navigationPage="pricePage"
				navigation={navigation}
				Text1="Continue "
				style={serviceProviderStyle.materialButtonPrimary1}
			/>
		</SafeAreaView>
	);
}
