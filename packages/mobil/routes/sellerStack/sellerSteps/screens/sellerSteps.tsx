import { BlueButton } from "@doffy/common";
import * as React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { SellerStackNavProps } from "../../../../screenStack/Tydefs/sellerParamList";
import { AuthContext } from "../../../../shareFuction/userContext";
import firstPage3Style from "../../firstPage3/style/style";
import { sellerStepsStyle } from "../style/style";

export function sellerSteps({
	navigation,
}: SellerStackNavProps<"sellerSteps">) {
	const { user } = React.useContext(AuthContext);

	return (
		<SafeAreaView style={sellerStepsStyle.container}>
			<View style={sellerStepsStyle.Row}>
				<TouchableOpacity
					onPress={() => {
						navigation.navigate("home" as any);
					}}
				>
					<Image
						source={require("../../../../logo/LogoJamesleyApp.png")}
						resizeMode="contain"
						style={sellerStepsStyle.DoffyLogo}
					/>
				</TouchableOpacity>
				<IoniconsIcon
					name="md-help-circle-outline"
					style={sellerStepsStyle.icon}
					onPress={() => {
						navigation.navigate("help");
					}}
				></IoniconsIcon>
			</View>
			<Text style={sellerStepsStyle.welcomeName}>Welcome, {user}</Text>
			<Text style={sellerStepsStyle.requiredSteps}> Required steps</Text>
			<Text>Here&#39;s what you need to do to set up your accout.</Text>
			<View style={sellerStepsStyle.rect}>
				<View style={sellerStepsStyle.BoxRow}>
					<Text style={sellerStepsStyle.BoxText}>
						select the services that your offering
					</Text>
					<EntypoIcon
						name="chevron-thin-right"
						style={sellerStepsStyle.Nexticon}
						onPress={() => {
							navigation.navigate("serviceProvider");
						}}
					/>
				</View>
			</View>
			<View style={sellerStepsStyle.rect}>
				<View style={sellerStepsStyle.BoxRow}>
					<Text style={sellerStepsStyle.BoxText}>Bookings information</Text>
				</View>
			</View>
			<View style={sellerStepsStyle.rect}>
				<View style={sellerStepsStyle.BoxRow}>
					<Text style={sellerStepsStyle.BoxText}>
						do your avabaility schedule
					</Text>
				</View>
			</View>
			<View style={sellerStepsStyle.rect}>
				<View style={sellerStepsStyle.BoxRow}>
					<Text style={sellerStepsStyle.BoxText}>Show your talents</Text>
				</View>
			</View>
			<BlueButton
				onPress={() => navigation.navigate("serviceProvider")}
				Text1="Continue "
				style={firstPage3Style.BlueButton}
			/>
		</SafeAreaView>
	);
}
