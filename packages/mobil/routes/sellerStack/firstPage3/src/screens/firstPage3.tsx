import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { SellerStackNavProps } from "../../../../../screenStack/Tydefs/sellerParamList";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";

export function firstPage3({ navigation }: SellerStackNavProps<"Page3">) {
	return (
		<View style={styles.container}>
			<EntypoIcon
				name="chevron-thin-up"
				style={styles.icon1}
				onPress={() => {
					navigation.goBack();
				}}
			></EntypoIcon>
			<Text
				onPress={() => {
					navigation.goBack();
				}}
				style={styles.goBack1}
			>
				Go back
			</Text>
			<Text style={styles.text}>
				you choose your price {"\n"} you do your schedule {"\n"}we do the
				marketing {"\n"}we bring the client
			</Text>
			<View style={styles.icon2Row}>
				<FeatherIcon name="user" style={styles.icon2}></FeatherIcon>
				<Text style={styles.createYourProfile}>Create your profile</Text>
			</View>
			<View style={styles.icon3Row}>
				<EntypoIcon name="text" style={styles.icon3}></EntypoIcon>
				<Text style={styles.doYourSchedule}>do your schedule</Text>
			</View>
			<View style={styles.icon4Row}>
				<IoniconsIcon name="ios-images" style={styles.icon4}></IoniconsIcon>
				<Text style={styles.doYourSchedule1}>
					presente some preview of your work
				</Text>
			</View>
			<View style={styles.icon5Row}>
				<FontAwesomeIcon name="money" style={styles.icon5}></FontAwesomeIcon>
				<Text style={styles.getPaid}>Get paid</Text>
			</View>
			<MaterialButtonPrimary
				text1="Continue "
				style={styles.materialButtonPrimary}
			></MaterialButtonPrimary>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignSelf: "center",
	},
	icon1: {
		color: "rgba(128,128,128,1)",
		fontSize: 24,
		marginTop: 36,
		alignSelf: "center",
		textAlign: "center",
	},
	goBack1: {
		width: 118,
		height: 30,
		color: "rgba(179,179,179,1)",
		fontSize: 20,
		fontFamily: "roboto-regular",
		textAlign: "center",
		alignSelf: "center",
	},
	text: {
		width: "100%",
		height: 102,
		color: "rgba(57,2,2,1)",
		fontSize: 20,
		fontFamily: "calibri-bold",
		textAlign: "center",
		marginTop: 18,
		marginLeft: 21,
		justifyContent: "center",
		alignSelf: "center",
	},
	icon2: {
		color: "rgba(128,128,128,1)",
		fontSize: 30,
	},
	createYourProfile: {
		width: "100%",
		height: 30,
		color: "rgba(32,32,32,1)",
		fontSize: 20,
		fontFamily: "alef-regular",
		marginLeft: 4,
		marginTop: 10,
	},
	icon2Row: {
		height: 40,
		flexDirection: "row",
		marginTop: 62,
		marginLeft: 21,
		marginRight: 96,
	},
	icon3: {
		color: "rgba(128,128,128,1)",
		fontSize: 30,
	},
	doYourSchedule: {
		width: "100%",
		height: 30,
		color: "rgba(32,32,32,1)",
		fontSize: 20,
		fontFamily: "alef-regular",
		marginLeft: 4,
	},
	icon3Row: {
		height: 30,
		flexDirection: "row",
		marginTop: 45,
		marginLeft: 21,
		marginRight: 96,
	},
	icon4: {
		color: "rgba(128,128,128,1)",
		fontSize: 30,
		marginTop: 5,
	},
	doYourSchedule1: {
		width: "100%",
		height: 30,
		color: "rgba(32,32,32,1)",
		fontSize: 20,
		fontFamily: "alef-regular",
		marginLeft: 8,
	},
	icon4Row: {
		height: 35,
		flexDirection: "row",
		marginTop: 51,
		marginLeft: 21,
		marginRight: 96,
	},
	icon5: {
		color: "rgba(128,128,128,1)",
		fontSize: 30,
	},
	getPaid: {
		width: 224,
		height: 30,
		color: "rgba(32,32,32,1)",
		fontSize: 20,
		fontFamily: "alef-regular",
		marginLeft: 2,
		marginTop: 6,
	},
	icon5Row: {
		height: 36,
		flexDirection: "row",
		marginTop: 43,
		marginLeft: 21,
		marginRight: 96,
	},
	materialButtonPrimary: {
		width: 294,
		height: 66,
		borderRadius: 100,
		marginTop: 62,
		marginLeft: 29,
		textAlign: "center",
		alignSelf: "center",
	},
});
