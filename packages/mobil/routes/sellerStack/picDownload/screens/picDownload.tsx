import { BlueButton } from "@doffy/component";
import { useSignS3Mutation } from "@doffy/controller/src/generated/graphql-hooks";
import { Entypo } from "@expo/vector-icons";
import Constants from "expo-constants";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import * as React from "react";
import {
	ActivityIndicator,
	Alert,
	Image,
	Modal,
	SafeAreaView,
	Text,
	View,
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import MaterialIconsIcon from "react-native-vector-icons/MaterialIcons";
import { SellerStackNavProps } from "../../../../screenStack/Tydefs/sellerParamList";
import { formatFilename } from "../../../../shareFuction/formatFileName";
import { ServiceCreationContext } from "../../../../shareFuction/serviceCreation";
import { uploadToS3 } from "../../../../shareFuction/uploadS3";
import picDownloadStyle from "../style/style";

export function picDownload({
	navigation,
}: SellerStackNavProps<"picDownload">) {
	const { Picture, setfinish, CreateService, finish } = React.useContext(
		ServiceCreationContext
	);

	const [PreviewProfilPicture, setPreviewProfilPicture] = React.useState<
		string | undefined
	>("");
	const [linkProfilPicture, setlinkProfilPicture] = React.useState<string>("");

	const [previewWorkPicture, setPreviewWorkPicture] = React.useState<string>(
		""
	);

	const [linkWorkPicture, setlinkWorkPicture] = React.useState<string>("");

	const [fullScreen, setfullScreen] = React.useState<boolean>(false);
	const [modal, setModal] = React.useState<boolean>(false);
	const [profil, setProfil] = React.useState<boolean>(false);

	console.log("link", PreviewProfilPicture);
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

	const download = async (type: string) => {
		const permisionAcces = await getPermissionAsync();
		if (permisionAcces === true) {
			const files = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.All,
				allowsMultipleSelection: true,
			});
			if (!files.cancelled) {
				if (type === "profil") {
					setPreviewProfilPicture(files.uri);
				} else {
					setPreviewWorkPicture(files.uri);
				}

				console.log(files);
				const response = await uploadS3({
					variables: {
						filename: formatFilename(files.uri),
						filetype: files.type !== undefined ? files.type : "image",
					},
				});
				if (response.data?.signS3 !== undefined) {
					const { signedRequest, url } = response.data.signS3;
					await uploadToS3(files, signedRequest);
					if (type === "profil") {
						setlinkProfilPicture(url);
					} else {
						setlinkWorkPicture(url);
					}
					console.log("url", url);
				}
			}
		}
	};

	React.useEffect(() => {
		if (finish) {
			CreateService();
			navigation.push("home" as any);
			setfinish(false);
		}
	}, [finish]);
	return (
		<SafeAreaView style={picDownloadStyle.container}>
			<Modal visible={modal} animationType="slide">
				<TouchableOpacity
					style={
						fullScreen
							? picDownloadStyle.fullScrreen
							: picDownloadStyle.Imagerect
					}
					onPress={() => {
						setfullScreen(!fullScreen);
						setModal(!modal);
					}}
				>
					{profil ? (
						<Image
							style={picDownloadStyle.ImageFullScreen}
							source={{
								uri: PreviewProfilPicture,
							}}
						/>
					) : (
						<Image
							style={picDownloadStyle.ImageFullScreen}
							source={{
								uri: previewWorkPicture,
							}}
						/>
					)}
				</TouchableOpacity>
			</Modal>
			<ScrollView>
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
				{!linkProfilPicture ? (
					<TouchableOpacity
						style={picDownloadStyle.rect}
						onPress={() => {
							download("profil");
						}}
					>
						<MaterialIconsIcon
							name="add-to-photos"
							style={picDownloadStyle.icon}
							onPress={() => {
								download("profil");
							}}
						/>
					</TouchableOpacity>
				) : (
					<TouchableOpacity
						style={picDownloadStyle.Imagerect}
						onPress={() => {
							setfullScreen(!fullScreen);
							setModal(!modal);
							setProfil(true);
						}}
					>
						<Image
							style={picDownloadStyle.Image}
							source={{
								uri: PreviewProfilPicture,
							}}
						/>

						<Entypo
							name="resize-full-screen"
							size={24}
							color="white"
							style={{
								position: "absolute",
								zIndex: 99999,
							}}
						/>
					</TouchableOpacity>
				)}
				<Text style={picDownloadStyle.Title}>Picture of your work</Text>
				<Text style={picDownloadStyle.Text}>
					Customers will judge your work by looking at those pictures. This is
					an important step for your business growth
				</Text>

				{!linkWorkPicture ? (
					<TouchableOpacity
						style={picDownloadStyle.rect}
						onPress={() => {
							download("work");
						}}
					>
						<MaterialIconsIcon
							name="add-to-photos"
							style={picDownloadStyle.icon}
							onPress={() => {
								download("work");
							}}
						/>
					</TouchableOpacity>
				) : (
					<TouchableOpacity
						style={picDownloadStyle.Imagerect}
						onPress={() => {
							setfullScreen(!fullScreen);
							setModal(!modal);
							setProfil(false);
						}}
					>
						<Image
							style={picDownloadStyle.Image}
							source={{
								uri: previewWorkPicture,
							}}
							onLoadStart={() => {
								return <ActivityIndicator />;
							}}
						/>
						<Entypo
							name="resize-full-screen"
							size={24}
							color="white"
							style={{
								position: "absolute",
								zIndex: 99999,
							}}
						/>
					</TouchableOpacity>
				)}
				<BlueButton
					onPress={() => {
						if (
							(linkProfilPicture !== "" && linkWorkPicture !== "") ||
							(!linkProfilPicture && !linkWorkPicture)
						) {
							Picture(linkProfilPicture, linkWorkPicture);
							setfinish(true);
						} else {
							Alert.alert(
								"",
								"Please Enter all required information",
								[{ text: "OK", onPress: () => console.log("OK Pressed") }],
								{ cancelable: false }
							);
						}
					}}
					Text1="Continue"
					style={picDownloadStyle.BlueButton}
				/>
			</ScrollView>
		</SafeAreaView>
	);
}
