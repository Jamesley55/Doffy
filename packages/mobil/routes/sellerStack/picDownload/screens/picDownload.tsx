import { useSignS3Mutation } from "@doffy/controller/src/generated/graphql-hooks";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
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
	const [link, setLink] = React.useState<string | null>(null);
	console.log("link", link);
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
						id: "110ec58a-a0f2-4ac4-8393-c866d813b8d1",
						filename: formatFilename(files.uri),
						filetype: files.type !== undefined ? files.type : "image",
					},
				});
				if (response.data?.signS3 !== undefined) {
					const { signedRequest, url } = response.data.signS3;
					await uploadToS3(files, signedRequest);
					setLink(url);
					console.log("url", url);
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
			{!link ? (
				<View style={picDownloadStyle.rect}>
					<MaterialIconsIcon
						name="add-to-photos"
						style={picDownloadStyle.icon}
						onPress={download}
					/>
				</View>
			) : (
				<View style={picDownloadStyle.Imagerect}>
					<Image
						style={picDownloadStyle.Image}
						source={{
							uri:
								"https://d3bw9plfvszcnd.cloudfront.net/images/20200716-fbtb21l8r3n-file----users-jamesleyjoseph-library-developer-coresimulator-devices-ed626c56-f963-4da1-969e-5321b87d66f2-data-containers-data-application-dbb8cf0f-69cc-4c58-be06-05240061dd02-library-caches-exponentexperiencedata--2540doffyinc-252fmobil-imagepicker-f07de422-846a-498a-a9f5-a82d1b85decb-jpg",
						}}
					/>
				</View>
			)}
			<Text style={picDownloadStyle.Title}>Picture of your work</Text>
			<Text style={picDownloadStyle.Text}>
				Customers will judge your work by looking at those pictures. This is an
				important step for your business growth
			</Text>

			{!link ? (
				<View style={picDownloadStyle.rect}>
					<MaterialIconsIcon
						name="add-to-photos"
						style={picDownloadStyle.icon}
						onPress={download}
					/>
				</View>
			) : (
				<View style={picDownloadStyle.Imagerect}>
					<Image
						style={picDownloadStyle.Image}
						source={{
							uri:
								"https://d3bw9plfvszcnd.cloudfront.net/images/20200716-fbtb21l8r3n-file----users-jamesleyjoseph-library-developer-coresimulator-devices-ed626c56-f963-4da1-969e-5321b87d66f2-data-containers-data-application-dbb8cf0f-69cc-4c58-be06-05240061dd02-library-caches-exponentexperiencedata--2540doffyinc-252fmobil-imagepicker-f07de422-846a-498a-a9f5-a82d1b85decb-jpg",
						}}
					/>
				</View>
			)}
			<BlueButton
				navigationPage="home"
				navigation={navigation}
				Text1="Continue"
				style={picDownloadStyle.BlueButton}
			/>
		</SafeAreaView>
	);
}
