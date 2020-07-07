import * as React from "react";
import { StyleSheet, Text, View } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { SellerStackNavProps } from "../../../../../screenStack/Tydefs/sellerParamList";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";

export function serviceProvider({
	navigation,
}: SellerStackNavProps<"serviceProvider">) {
	return (
		<View style={styles.container}>
			<EntypoIcon
				name="arrow-left"
				style={styles.icon}
				onPress={() => {
					navigation.goBack();
				}}
			></EntypoIcon>
			<IoniconsIcon
				name="md-help-circle-outline"
				style={styles.icon2}
				onPress={() => {
					navigation.navigate("help");
				}}
			></IoniconsIcon>
			<Text style={styles.loremIpsum}>
				Choose the services that you are ready to provide
			</Text>
			<View style={styles.rect1Row}>
				<View style={styles.rect1}></View>
				<View style={styles.rect2}></View>
			</View>
			<View style={styles.rect3Row}>
				<View style={styles.rect3}></View>
				<View style={styles.rect4}></View>
			</View>
			<View style={styles.rect6Row}>
				<View style={styles.rect6}></View>
				<View style={styles.rect5}></View>
			</View>
			<MaterialButtonPrimary
				text1="Continue "
				style={styles.materialButtonPrimary1}
			></MaterialButtonPrimary>
			<Text style={styles.selectAtLeastOne}>select at least one.</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	icon: {
		color: "rgba(128,128,128,1)",
		fontSize: 40,
		marginTop: 40,
	},
	icon2: {
		color: "rgba(128,128,128,1)",
		fontSize: 40,
		marginLeft: 248,
	},
	loremIpsum: {
		width: 342,
		height: 68,
		color: "#121212",
		fontSize: 26,
		fontFamily: "roboto-700",
		marginTop: 48,
		marginLeft: 17,
	},
	rect1: {
		width: 158,
		height: 120,
		backgroundColor: "rgba(230, 230, 230,1)",
		borderRadius: 30,
	},
	rect2: {
		width: 158,
		height: 120,
		backgroundColor: "rgba(230, 230, 230,1)",
		borderRadius: 30,
		marginLeft: 27,
	},
	rect1Row: {
		height: 120,
		flexDirection: "row",
		marginTop: 60,
		marginLeft: 19,
		marginRight: 13,
	},
	rect3: {
		width: 158,
		height: 120,
		backgroundColor: "rgba(230, 230, 230,1)",
		borderRadius: 30,
	},
	rect4: {
		width: 158,
		height: 120,
		backgroundColor: "rgba(230, 230, 230,1)",
		borderRadius: 30,
		marginLeft: 27,
	},
	rect3Row: {
		height: 120,
		flexDirection: "row",
		marginTop: 25,
		marginLeft: 19,
		marginRight: 13,
	},
	rect6: {
		width: 158,
		height: 120,
		backgroundColor: "rgba(230, 230, 230,1)",
		borderRadius: 30,
	},
	rect5: {
		width: 158,
		height: 120,
		backgroundColor: "rgba(230, 230, 230,1)",
		borderRadius: 30,
		marginLeft: 29,
	},
	rect6Row: {
		height: 120,
		flexDirection: "row",
		marginTop: 19,
		marginLeft: 17,
		marginRight: 13,
	},
	materialButtonPrimary1: {
		width: 294,
		height: 66,
		borderRadius: 100,
		marginTop: 22,
		marginLeft: 41,
	},
	selectAtLeastOne: {
		width: 228,
		height: 44,
		color: "#121212",
		fontSize: 26,
		fontFamily: "roboto-regular",
		marginTop: -552,
		marginLeft: 19,
	},
});
