import { BlueButton } from "@doffy/component";
import * as React from "react";
import { Alert, SafeAreaView, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { AddressInput } from "../../../../Component/adressInput";
import { Input } from "../../../../Component/Input";
import { MaterialSwitch2 } from "../../../../Component/MaterialSwitch2";
import { SellerStackNavProps } from "../../../../screenStack/Tydefs/sellerParamList";
import { ServiceCreationContext } from "../../../../shareFuction/serviceCreation";
import pricePagestyles from "../style/styles";

export function InformationService({
	navigation,
}: SellerStackNavProps<"InformationPage">) {
	const [bizzName, setBizzName] = React.useState<string>("");
	const [description, setDescription] = React.useState<string>("");
	const [money, setMomey] = React.useState<number>(0);
	const [averageTime, setAverageTime] = React.useState<number>(42000);
	const [addy, setAddy] = React.useState<string>("");
	const [city, setcity] = React.useState<string>("");
	const [state, setstate] = React.useState<string>("");
	const [country, setcountry] = React.useState<string>("null");
	const [accesible, setAccesible] = React.useState<boolean>(false);
	const StreetValues = (someArg: string) => setAddy(someArg);

	const cityValues = (someArg: string) => setcity(someArg);
	const stateValues = (someArg: string) => setstate(someArg);
	const Country = (someArg: string) => setcountry(someArg);

	const { information } = React.useContext(ServiceCreationContext);

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
					onSubmit={(e) => setBizzName(e.nativeEvent.text)}
					TextInputStyle={pricePagestyles.description}
					TextStyle={pricePagestyles.Text}
					Text="How  would you like people to call your business?"
					placeHolder="Business name"
				/>
				<Input
					onSubmit={(e) => setDescription(e.nativeEvent.text)}
					TextInputStyle={pricePagestyles.shortDescription}
					TextStyle={pricePagestyles.Text}
					Text="Write a short description to tell people more about your business"
					placeHolder="Short description"
					multiline={true}
					blurOnSubmit={true}
				/>
				<Input
					onSubmit={(e) => setMomey(parseFloat(e.nativeEvent.text))}
					TextInputStyle={pricePagestyles.Numbers}
					TextStyle={pricePagestyles.Text}
					Text="How much do you charge on average for your services?"
					placeHolder="$$$"
					keyboardType="decimal-pad"
				/>
				<Input
					onSubmit={(e) => setAverageTime(parseFloat(e.nativeEvent.text))}
					TextInputStyle={pricePagestyles.Numbers}
					TextStyle={pricePagestyles.Text}
					Text="How long on average does it take you to provide the service you selected"
					placeHolder="Minutes"
					keyboardType="decimal-pad"
				/>
				<Text style={pricePagestyles.Title}>
					Please enter the adresse of your shop
				</Text>
				<AddressInput
					StreetValues={StreetValues}
					Country={Country}
					cityValues={cityValues}
					stateValues={stateValues}
					styleTextInput={pricePagestyles.description}
				/>

				<Text style={pricePagestyles.Title}>
					Would you like your adresse to be accesible by your client?
				</Text>
				<MaterialSwitch2 handle={(e) => setAccesible(e)} />

				<BlueButton
					onPress={() => {
						if (
							bizzName === "" ||
							description === "" ||
							money === 0 ||
							averageTime === 0 ||
							addy === "" ||
							city === "" ||
							state === "" ||
							country === ""
						) {
							Alert.alert(
								"",
								"Please Enter all required information",
								[{ text: "OK", onPress: () => console.log("OK Pressed") }],
								{ cancelable: false }
							);
						} else {
							information(
								bizzName,
								description,
								money,
								averageTime,
								addy,
								city,
								state,
								country,
								accesible
							);
							navigation.navigate("schedulePage");
						}
					}}
					Text1="Continue"
					style={pricePagestyles.BlueButton}
				/>
			</ScrollView>
		</SafeAreaView>
	);
}
