import * as React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { AddressInput } from "../../../../Component/adressInput";
import { BlueButton } from "../../../../Component/BlueBotton";
import { Input } from "../../../../Component/Input";
import { MaterialSwitch2 } from "../../../../Component/MaterialSwitch2";
import { SellerStackNavProps } from "../../../../screenStack/Tydefs/sellerParamList";
import { pricePagestyles } from "../style/styles";

export function pricePage({ navigation }: SellerStackNavProps<"pricePage">) {
	return (
		<SafeAreaView style={pricePagestyles.container}>
			<View style={pricePagestyles.Row}>
				<EntypoIcon
					name="arrow-left"
					style={pricePagestyles.arrowLeft}
					onPress={() => {
						navigation.goBack();
					}}
				/>
				<IoniconsIcon
					name="md-help-circle-outline"
					style={pricePagestyles.Help}
					onPress={() => {
						navigation.navigate("help");
					}}
				/>
			</View>

			<ScrollView
				style={pricePagestyles.rect}
				showsVerticalScrollIndicator={false}
			>
				<Text style={pricePagestyles.Title}>
					please Enter these informations to continue the process
				</Text>
				<Input
					onSubmit={() => console.log("lkaka")}
					TextInputStyle={pricePagestyles.description}
					viewStyle={{}}
					TextStyle={pricePagestyles.Text}
					Text="How  would you like people to call your business?"
					placeHolder="Business name"
				/>
				<Input
					onSubmit={() => console.log("lkaka")}
					TextInputStyle={pricePagestyles.shortDescription}
					viewStyle={{}}
					TextStyle={pricePagestyles.Text}
					Text="Write a short description to tell people more about your business"
					placeHolder="Short description"
					multiline={true}
					blurOnSubmit={true}
				/>
				<Input
					onSubmit={() => console.log("lkaka")}
					TextInputStyle={pricePagestyles.Numbers}
					viewStyle={{}}
					TextStyle={pricePagestyles.Text}
					Text="How much do you charge on average for your services?"
					placeHolder="$$$"
					keyboardType="decimal-pad"
				/>
				<Input
					onSubmit={() => console.log("lkaka")}
					TextInputStyle={pricePagestyles.Numbers}
					viewStyle={{}}
					TextStyle={pricePagestyles.Text}
					Text="How long on average does it take you to provide the service you selected"
					placeHolder="Minutes"
					keyboardType="decimal-pad"
				/>
				<Text style={pricePagestyles.Title}>
					Please enter the adresse of your shop{" "}
				</Text>
				<AddressInput styleTextInput={pricePagestyles.description} />

				<Text style={pricePagestyles.Title}>
					Would you like your adresse to be accesible by your client?
				</Text>
				<MaterialSwitch2 green={true} />

				<BlueButton
					onPress={() => navigation.navigate("schedulePage")}
					Text1="Continue"
					style={pricePagestyles.BlueButton}
				/>
			</ScrollView>
		</SafeAreaView>
	);
}
