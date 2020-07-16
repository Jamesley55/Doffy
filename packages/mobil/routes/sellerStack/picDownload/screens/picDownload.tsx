import { useSignS3Mutation } from "@doffy/controller/src/generated/graphql-hooks";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as React from "react";
import { SafeAreaView, Text, View } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import { BlueButton } from "../../../../Component/BlueBotton";
import { SellerStackNavProps } from "../../../../screenStack/Tydefs/sellerParamList";
import { formatFilename } from "../../../../shareFuction/formatFileName";
import { uploadToS3 } from "../../../../shareFuction/uploadS3";
import { picDownloadStyle } from "../style/style";

export function picDownload({
	navigation,
}: SellerStackNavProps<"picDownload">) {
	const [uploadS3] = useSignS3Mutation();
	const getPermissionAsync = async () => {
		if (Constants.platform?.ios) {
			const { status } = await Permissions.askAsync(
				Permissions.CAMERA_ROLL,
				Permissions.CAMERA
			);
			if (status !== "granted") {
				alert("Sorry, we need camera roll permissions to make this work!");
				return false;
			}
		}
		return true;
	};

	const download = async () => {
		const permisionAcces = await getPermissionAsync();
		if (permisionAcces === true) {
			const files = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				allowsMultipleSelection: true,
			});
			if (!files.cancelled) {
				console.log(files);
				const response = await uploadS3({
					variables: {
						id: "hdhdhdhd",
						filename: formatFilename(files.uri),
						filetype: files.type !== undefined ? files.type : "image",
					},
				});
				if (response.data?.signS3 !== undefined) {
					const { signedRequest, url } = response.data.signS3;
					uploadToS3(files, signedRequest);
					console.log(url);
				}
			}
		}
	};
	return (
		<SafeAreaView style={picDownloadStyle.container}>
			<View style={picDownloadStyle.Row}>
				<EntypoIcon
					name="arrow-left"
					style={picDownloadStyle.arrowLeft}
					onPress={() => {
						navigation.goBack();
					}}
				/>
				<IoniconsIcon
					name="md-help-circle-outline"
					style={picDownloadStyle.Help}
					onPress={() => {
						navigation.navigate("help");
					}}
				/>
			</View>
			<Text style={picDownloadStyle.Title}>Profil picture</Text>
			<Text style={picDownloadStyle.Text}>
				Customers will use that photo to identify you or your brand.
			</Text>
			<View style={picDownloadStyle.rect}>
				<MaterialIconsIcon
					name="add-to-photos"
					style={picDownloadStyle.icon}
					onPress={download}
				/>
			</View>
			<Text style={picDownloadStyle.Title}>Picture of your work</Text>
			<Text style={picDownloadStyle.Text}>
				Customers will judge your work by looking at those pictures. This is an
				important step for your business growth
			</Text>

			<View style={picDownloadStyle.rect}>
				<MaterialIconsIcon
					name="add-to-photos"
					style={picDownloadStyle.icon}
					onPress={download}
				/>
			</View>
			<BlueButton
				navigationPage="home"
				navigation={navigation}
				Text1="Continue"
				style={picDownloadStyle.BlueButton}
			/>
		</SafeAreaView>
	);
}
