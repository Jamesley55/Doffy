import * as React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { BlueButton } from "../../../../Component/BlueBotton";
import { MaterialSwitch2 } from "../../../../Component/MaterialSwitch2";
import { SellerStackNavProps } from "../../../../screenStack/Tydefs/sellerParamList";
import { SchedulePagestyles } from "../style/style";
export function schedulePage({
	navigation,
}: SellerStackNavProps<"schedulePage">) {
	const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
	const [date, selectDate] = React.useState("");

	const [monday, setMonday] = React.useState("");
	const [tuesday, setTuesday] = React.useState("");
	const [wednesday, setWednesday] = React.useState("");
	const [thursday, setThursday] = React.useState("");
	const [friday, setFriday] = React.useState("");
	const [saturday, setSaturday] = React.useState("");
	const [sunday, setsunday] = React.useState("");

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleConfirm = (time, date) => {
		console.log("time", time);

		console.log("A time has been picked: ", time);
		const d = new Date(time);
		console.log("hours", d.getUTCHours()); // Hours
		console.log("minute", d.getUTCMinutes()); // minute
		console.log("seconds", d.getUTCSeconds()); // seconds
		const minute = d.getUTCMinutes();
		let houres: any;
		// tslint:disable-next-line: prefer-conditional-expression
		if (minute.toLocaleString() === "0") {
			houres = `${d.getUTCHours()}:00`;
		} else {
			houres = `${d.getUTCHours()}:${d.getUTCMinutes()}`;
		}
		date === "Sunday"
			? setsunday(houres)
			: date === "Monday"
			? setMonday(houres)
			: date === "Tuesday"
			? setTuesday(houres)
			: date === "Wednesday"
			? setWednesday(houres)
			: date === "Thursday"
			? setThursday(houres)
			: date === "Friday"
			? setFriday(houres)
			: date === "Saturday"
			? setSaturday(houres)
			: hideDatePicker();
		hideDatePicker();
	};

	return (
		<SafeAreaView style={SchedulePagestyles.container}>
			<View style={SchedulePagestyles.Row}>
				<EntypoIcon
					name="arrow-left"
					style={SchedulePagestyles.arrowLeft}
					onPress={() => {
						navigation.goBack();
					}}
				/>
				<IoniconsIcon
					name="md-help-circle-outline"
					style={SchedulePagestyles.Help}
					onPress={() => {
						navigation.navigate("help");
					}}
				/>
			</View>
			<View style={SchedulePagestyles.rect}>
				<View style={SchedulePagestyles.fromRow}>
					<Text>From</Text>
					<Text>To</Text>
				</View>
				<View style={SchedulePagestyles.scheduleRow}>
					<MaterialSwitch2 />
					<Text style={SchedulePagestyles.Text}>Sunday</Text>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={() => {
							selectDate("Sunday");
							showDatePicker();
						}}
					>
						<Text style={SchedulePagestyles.hours}>{sunday}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={() => {
							selectDate("Sunday");
							showDatePicker();
						}}
					>
						<Text style={SchedulePagestyles.hours}>{sunday}</Text>
					</TouchableOpacity>
				</View>
				<View style={SchedulePagestyles.scheduleRow}>
					<MaterialSwitch2 />
					<Text style={SchedulePagestyles.Text}>Monday</Text>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={() => {
							selectDate("Monday");
							showDatePicker();
						}}
					>
						<Text style={SchedulePagestyles.hours}>{monday}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={() => {
							selectDate("Monday");
							showDatePicker();
						}}
					>
						<Text style={SchedulePagestyles.hours}>{monday}</Text>
					</TouchableOpacity>
				</View>
				<View style={SchedulePagestyles.scheduleRow}>
					<MaterialSwitch2 />
					<Text style={SchedulePagestyles.Text}>Tuesday</Text>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={() => {
							selectDate("Tuesday");
							showDatePicker();
						}}
					>
						<Text style={SchedulePagestyles.hours}>{tuesday}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={() => {
							selectDate("Tuesday");
							showDatePicker();
						}}
					>
						<Text style={SchedulePagestyles.hours}>{tuesday}</Text>
					</TouchableOpacity>
				</View>
				<View style={SchedulePagestyles.scheduleRow}>
					<MaterialSwitch2 />
					<Text style={SchedulePagestyles.Text}>Wednesday</Text>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={() => {
							selectDate("Wednesday");
							showDatePicker();
						}}
					>
						<Text style={SchedulePagestyles.hours}>{wednesday}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={() => {
							selectDate("Wednesday");
							showDatePicker();
						}}
					>
						<Text style={SchedulePagestyles.hours}>{wednesday}</Text>
					</TouchableOpacity>
				</View>
				<View style={SchedulePagestyles.scheduleRow}>
					<MaterialSwitch2 />
					<Text style={SchedulePagestyles.Text}>Thursday</Text>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={() => {
							selectDate("Thursday");
							showDatePicker();
						}}
					>
						<Text style={SchedulePagestyles.hours}>{thursday}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={() => {
							selectDate("Thursday");
							showDatePicker();
						}}
					>
						<Text style={SchedulePagestyles.hours}>{thursday}</Text>
					</TouchableOpacity>
				</View>
				<View style={SchedulePagestyles.scheduleRow}>
					<MaterialSwitch2 />
					<Text style={SchedulePagestyles.Text}>Friday</Text>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={() => {
							selectDate("Friday");
							showDatePicker();
						}}
					>
						<Text style={SchedulePagestyles.hours}>{friday}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={() => {
							selectDate("Friday");
							showDatePicker();
						}}
					>
						<Text style={SchedulePagestyles.hours}>{friday}</Text>
					</TouchableOpacity>
				</View>
				<View style={SchedulePagestyles.scheduleRow}>
					<MaterialSwitch2 />
					<Text style={SchedulePagestyles.Text}>Saturday</Text>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={() => {
							selectDate("saturday");
							showDatePicker();
						}}
					>
						<Text style={SchedulePagestyles.hours}>{saturday}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={() => {
							selectDate("saturday");
							showDatePicker();
						}}
					>
						<Text style={SchedulePagestyles.hours}>{saturday}</Text>
					</TouchableOpacity>
				</View>
				<BlueButton
					onPress={() => navigation.navigate("picDownload", { kaka: "k" })}
					Text1="Continue"
					style={SchedulePagestyles.BlueButton}
				/>
			</View>
			<DateTimePickerModal
				headerTextIOS="Start"
				date={new Date(2300, 10, 20)}
				timeZoneOffsetInMinutes={0}
				minuteInterval={15}
				isVisible={isDatePickerVisible}
				mode="time"
				onConfirm={(e) => handleConfirm(e, date)}
				onCancel={hideDatePicker}
			/>
		</SafeAreaView>
	);
}
