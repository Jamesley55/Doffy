import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import CupertinoRadio from "../components/CupertinoRadio";
import CupertinoRadio1 from "../components/CupertinoRadio1";
import CupertinoRadio2 from "../components/CupertinoRadio2";
import CupertinoRadio3 from "../components/CupertinoRadio3";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";

export function payement({ navigation }) {
	return (
		<View style={styles.container}>
			<View style={styles.icon1Row}>
				<EntypoIcon
					name="arrow-left"
					style={styles.icon1}
					onPress={() => {
						navigation.goBack();
					}}
				></EntypoIcon>
				<TouchableOpacity
					onPress={() => {
						navigation.toggleDrawer();
					}}
				>
					<MaterialCommunityIconsIcon
						name="account"
						style={styles.icon2}
					></MaterialCommunityIconsIcon>
				</TouchableOpacity>
			</View>
			<View style={styles.rectStack}>
				<View style={styles.rect}>
					<View style={styles.depositAmountStack}>
						<Text style={styles.depositAmount}>Deposit amount</Text>
						<Text style={styles.servicePrice}>Service price:</Text>
					</View>
					<Text style={styles.transactionFees}>transaction fees :</Text>
					<View style={styles.subtotal2Stack}>
						<Text style={styles.subtotal2}>Subtotal:</Text>
						<Text style={styles.canadaGstTps5}>Canada GST/TPS : 5%</Text>
						<Text style={styles.total3}>Total:</Text>
					</View>
				</View>
				<Text style={styles.billOverview}>Bill overview</Text>
			</View>
			<View style={styles.loremIpsumStack}>
				<Text style={styles.loremIpsum}>
					You credit card will be chard $deposit amount $ before the appointment
				</Text>
				<Text style={styles.loremIpsum1}>
					You credit card will be chard $Total-depositamomount$ after you
					recieve your service the
				</Text>
			</View>
			<View style={styles.paymentMethodeStack}>
				<Text style={styles.paymentMethode}>Payment methode</Text>
				<View style={styles.rect1}>
					<View style={styles.cupertinoRadioStack}>
						<CupertinoRadio style={styles.cupertinoRadio}></CupertinoRadio>
						<CupertinoRadio1 style={styles.cupertinoRadio1}></CupertinoRadio1>
						<CupertinoRadio2 style={styles.cupertinoRadio2}></CupertinoRadio2>
						<CupertinoRadio3 style={styles.cupertinoRadio3}></CupertinoRadio3>
						<Text style={styles.loremIpsum2}>Credit card Debit Card</Text>
						<Text style={styles.paypal}>Paypal</Text>
						<Text style={styles.applePay}>Apple pay</Text>
						<Text style={styles.googlePay}>Google pay</Text>
					</View>
				</View>
			</View>
			<MaterialButtonPrimary
				text1="Checkout"
				style={styles.materialButtonPrimary1}
			></MaterialButtonPrimary>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	icon1: {
		color: "rgba(128,128,128,1)",
		fontSize: 40,
		marginTop: 25,
	},
	image1: {
		width: 191,
		height: 64,
		marginLeft: 27,
	},
	icon2: {
		color: "rgba(128,128,128,1)",
		fontSize: 40,
		marginLeft: 280,
		marginTop: 25,
	},
	icon1Row: {
		height: 65,
		flexDirection: "row",
		marginTop: 37,
		marginLeft: 14,
		marginRight: 14,
	},
	rect: {
		top: 25,
		left: 0,
		width: 347,
		height: 162,
		backgroundColor: "rgba(230, 230, 230,1)",
		position: "absolute",
		borderRadius: 20,
	},
	depositAmount: {
		top: 0,
		left: 0,
		width: 77,
		height: 23,
		color: "rgba(59,33,33,1)",
		position: "absolute",
		fontSize: 12,
		fontFamily: "roboto-regular",
		lineHeight: 14,
		letterSpacing: -1,
	},
	servicePrice: {
		top: 22,
		left: 0,
		width: 77,
		height: 23,
		color: "rgba(59,33,33,1)",
		position: "absolute",
		fontSize: 12,
		fontFamily: "roboto-regular",
		lineHeight: 14,
		letterSpacing: -1,
	},
	depositAmountStack: {
		width: 77,
		height: 45,
		marginTop: 12,
		marginLeft: 13,
	},
	transactionFees: {
		width: 77,
		height: 23,
		color: "rgba(59,33,33,1)",
		fontSize: 12,
		fontFamily: "roboto-regular",
		lineHeight: 14,
		letterSpacing: -1,
		marginLeft: 13,
	},
	subtotal2: {
		top: 0,
		left: 0,
		width: 77,
		height: 23,
		color: "rgba(59,33,33,1)",
		position: "absolute",
		fontSize: 12,
		fontFamily: "roboto-regular",
		lineHeight: 14,
		letterSpacing: -1,
	},
	canadaGstTps5: {
		top: 20,
		left: 0,
		width: 113,
		height: 23,
		color: "rgba(59,33,33,1)",
		position: "absolute",
		fontSize: 12,
		fontFamily: "roboto-regular",
		lineHeight: 14,
		letterSpacing: -1,
	},
	total3: {
		top: 42,
		left: 0,
		width: 77,
		height: 23,
		color: "rgba(59,33,33,1)",
		position: "absolute",
		fontSize: 12,
		fontFamily: "roboto-regular",
		lineHeight: 14,
		letterSpacing: -1,
	},
	subtotal2Stack: {
		width: 113,
		height: 65,
		marginTop: 2,
		marginLeft: 13,
	},
	billOverview: {
		top: 0,
		left: 5,
		width: "80%",
		height: 33,
		color: "rgba(59,33,33,1)",
		position: "absolute",
		fontSize: 24,
		fontFamily: "roboto-700",
		lineHeight: 23,
		letterSpacing: -1,
	},
	rectStack: {
		width: "100%",
		height: 187,
		marginTop: 19,
		marginLeft: 14,
	},
	loremIpsum: {
		top: 0,
		left: 0,
		width: "100%",
		height: 44,
		color: "rgba(59,33,33,1)",
		position: "absolute",
		fontSize: 12,
		fontFamily: "roboto-regular",
		lineHeight: 14,
		letterSpacing: -1,
	},
	loremIpsum1: {
		top: 42,
		left: 0,
		width: "100%",
		height: 44,
		color: "rgba(59,33,33,1)",
		position: "absolute",
		fontSize: 12,
		fontFamily: "roboto-regular",
		lineHeight: 14,
		letterSpacing: -1,
	},
	loremIpsumStack: {
		width: "100%",
		height: 86,
		marginTop: 15,
		marginLeft: 19,
	},
	paymentMethode: {
		top: 0,
		left: 5,
		width: 202,
		height: 33,
		color: "rgba(59,33,33,1)",
		position: "absolute",
		fontSize: 24,
		fontFamily: "roboto-700",
		lineHeight: 23,
		letterSpacing: -1,
	},
	rect1: {
		top: 29,
		left: 0,
		width: "100%",
		height: 171,
		backgroundColor: "rgba(230, 230, 230,1)",
		position: "absolute",
		borderRadius: 20,
	},
	cupertinoRadio: {
		top: 0,
		left: 0,
		width: 40,
		height: 40,
		position: "absolute",
	},
	cupertinoRadio1: {
		top: 33,
		left: 0,
		width: 40,
		height: 40,
		position: "absolute",
	},
	cupertinoRadio2: {
		top: 65,
		left: 0,
		width: 40,
		height: 40,
		position: "absolute",
	},
	cupertinoRadio3: {
		top: 98,
		left: 0,
		width: 40,
		height: 40,
		position: "absolute",
	},
	loremIpsum2: {
		top: 12,
		left: 39,
		width: 157,
		height: 20,
		color: "rgba(59,33,33,1)",
		position: "absolute",
		fontSize: 12,
		fontFamily: "roboto-regular",
		lineHeight: 14,
		letterSpacing: -1,
	},
	paypal: {
		top: 43,
		left: 39,
		width: 157,
		height: 20,
		color: "rgba(59,33,33,1)",
		position: "absolute",
		fontSize: 12,
		fontFamily: "roboto-regular",
		lineHeight: 14,
		letterSpacing: -1,
	},
	applePay: {
		top: 79,
		left: 39,
		width: 157,
		height: 20,
		color: "rgba(59,33,33,1)",
		position: "absolute",
		fontSize: 12,
		fontFamily: "roboto-regular",
		lineHeight: 14,
		letterSpacing: -1,
	},
	googlePay: {
		top: 109,
		left: 39,
		width: 157,
		height: 20,
		color: "rgba(59,33,33,1)",
		position: "absolute",
		fontSize: 12,
		fontFamily: "roboto-regular",
		lineHeight: 14,
		letterSpacing: -1,
	},
	cupertinoRadioStack: {
		width: 196,
		height: 138,
		marginTop: 1,
		marginLeft: 13,
	},
	paymentMethodeStack: {
		width: "100%",
		height: 200,
		marginTop: 1,
		marginLeft: 14,
	},
	materialButtonPrimary1: {
		width: 218,
		height: 32,
		borderRadius: 100,
		marginTop: 34,
		marginLeft: 63,
	},
});
