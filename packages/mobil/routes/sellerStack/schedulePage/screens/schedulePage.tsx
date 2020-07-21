import * as React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import EntypoIcon from "react-native-vector-icons/Entypo";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { BlueButton } from "../../../../Component/BlueBotton";
import { MaterialSwitch2 } from "../../../../Component/MaterialSwitch2";
import { SellerStackNavProps } from "../../../../screenStack/Tydefs/sellerParamList";
import { pricePagestyles } from "../../pricePage/style/styles";
import { SchedulePagestyles } from "../style/style";
export function schedulePage({
	navigation,
}: SellerStackNavProps<"schedulePage">) {
	const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
	const [date, selectDate] = React.useState("");
	const [monday, setMonday] = React.useState<boolean>(false);
	const [tuesday, setTuesday] = React.useState(false);
	const [wednesday, setWednesday] = React.useState(false);
	const [thursday, setThursday] = React.useState(false);
	const [friday, setFriday] = React.useState(false);
	const [saturday, setSaturday] = React.useState(false);
	const [sunday, setsunday] = React.useState(false);
	const [mondayStart, setMondayStart] = React.useState("9:05");
	const [tuesdayStart, setTuesdayStart] = React.useState("9:05");
	const [wednesdayStart, setWednesdayStart] = React.useState("9:05");
	const [thursdayStart, setThursdayStart] = React.useState("9:05");
	const [fridayStart, setFridayStart] = React.useState("9:05");
	const [saturdayStart, setSaturdayStart] = React.useState("9:05");
	const [sundayStart, setsundayStart] = React.useState("9:05");
	const [mondayEnd, setMondayEnd] = React.useState("17:05");
	const [tuesdayEnd, setTuesdayEnd] = React.useState("17:05");
	const [wednesdayEnd, setWednesdayEnd] = React.useState("17:05");
	const [thursdayEnd, setThursdayEnd] = React.useState("17:05");
	const [fridayEnd, setFridayEnd] = React.useState("17:05");
	const [saturdayEnd, setSaturdayEnd] = React.useState("17:05");
	const [sundayEnd, setsundayEnd] = React.useState("17:05");

	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const selectSunday = (someArg) => setsunday(someArg);
	const selectMonday = (someArg) => setMonday(someArg);
	const selectTuesday = (someArg) => setTuesday(someArg);
	const selectWednesday = (someArg) => setWednesday(someArg);
	const selectThursday = (someArg) => setThursday(someArg);
	const selectFriday = (someArg) => setFriday(someArg);
	const selectSaturday = (someArg) => setSaturday(someArg);

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
			? setsundayStart(houres)
			: date === "Monday"
			? setMondayStart(houres)
			: date === "Tuesday"
			? setTuesdayStart(houres)
			: date === "Wednesday"
			? setWednesdayStart(houres)
			: date === "Thursday"
			? setThursdayStart(houres)
			: date === "Friday"
			? setFridayStart(houres)
			: date === "Saturday"
			? setSaturdayStart(houres)
			: date === "SundayEnd"
			? setsundayEnd(houres)
			: date === "MondayEnd"
			? setMondayEnd(houres)
			: date === "TuesdayEnd"
			? setTuesdayEnd(houres)
			: date === "WednesdayEnd"
			? setWednesdayEnd(houres)
			: date === "ThursdayEnd"
			? setThursdayEnd(houres)
			: date === "FridayEnd"
			? setFridayEnd(houres)
			: date === "SaturdayEnd"
			? setSaturdayEnd(houres)
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
				<Text style={pricePagestyles.Title}>
					please select your disponibility day and the hours you're available
				</Text>
				<View style={{ flexDirection: "row" }}>
					<Text style={[SchedulePagestyles.from]}>From</Text>
					<Text style={[SchedulePagestyles.to, { marginLeft: 50 }]}>To</Text>
				</View>

				<View style={SchedulePagestyles.scheduleRow}>
					<MaterialSwitch2 handle={selectSunday} />
					<Text style={SchedulePagestyles.Text}>Sunday</Text>
					<TouchableOpacity
						style={[
							SchedulePagestyles.blackRect,
							{
								backgroundColor: !sunday ? "#6b6661" : "white",
							},
						]}
						onPress={() => {
							if (sunday) {
								selectDate("Sunday");
								showDatePicker();
							}
						}}
					>
						<Text style={SchedulePagestyles.hours}>{sundayStart}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							SchedulePagestyles.blackRect,
							{
								backgroundColor: !sunday ? "#6b6661" : "white",
							},
						]}
						onPress={() => {
							if (sunday) {
								selectDate("SundayEnd");
								showDatePicker();
							}
						}}
					>
						<Text style={SchedulePagestyles.hours}>{sundayEnd}</Text>
					</TouchableOpacity>
				</View>
				<View style={SchedulePagestyles.scheduleRow}>
					<MaterialSwitch2 handle={selectMonday} />
					<Text style={SchedulePagestyles.Text}>Monday</Text>
					<TouchableOpacity
						style={[
							SchedulePagestyles.blackRect,
							{
								backgroundColor: !monday ? "#6b6661" : "white",
							},
						]}
						onPress={() => {
							if (monday) {
								selectDate("Monday");
								showDatePicker();
							}
						}}
					>
						<Text style={SchedulePagestyles.hours}>{mondayStart}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							SchedulePagestyles.blackRect,
							{
								backgroundColor: !monday ? "#6b6661" : "white",
							},
						]}
						onPress={() => {
							if (monday) {
								selectDate("MondayEnd");
								showDatePicker();
							}
						}}
					>
						<Text style={SchedulePagestyles.hours}>{mondayEnd}</Text>
					</TouchableOpacity>
				</View>
				<View style={SchedulePagestyles.scheduleRow}>
					<MaterialSwitch2 handle={selectTuesday} />
					<Text style={SchedulePagestyles.Text}>Tuesday</Text>
					<TouchableOpacity
						style={[
							SchedulePagestyles.blackRect,
							{
								backgroundColor: !tuesday ? "#6b6661" : "white",
							},
						]}
						onPress={() => {
							if (tuesday) {
								selectDate("Tuesday");
								showDatePicker();
							}
						}}
					>
						<Text style={SchedulePagestyles.hours}>{tuesdayStart}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							SchedulePagestyles.blackRect,
							{
								backgroundColor: !tuesday ? "#6b6661" : "white",
							},
						]}
						onPress={() => {
							if (tuesday) {
								selectDate("TuesdayEnd");
								showDatePicker();
							}
						}}
					>
						<Text style={SchedulePagestyles.hours}>{tuesdayEnd}</Text>
					</TouchableOpacity>
				</View>
				<View style={SchedulePagestyles.scheduleRow}>
					<MaterialSwitch2 handle={selectWednesday} />
					<Text style={SchedulePagestyles.Text}>Wednesday</Text>
					<TouchableOpacity
						style={[
							SchedulePagestyles.blackRect,
							{
								backgroundColor: !wednesday ? "#6b6661" : "white",
							},
						]}
						onPress={() => {
							if (wednesday) {
								selectDate("Wednesday");
								showDatePicker();
							}
						}}
					>
						<Text style={SchedulePagestyles.hours}>{wednesdayStart}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							SchedulePagestyles.blackRect,
							{
								backgroundColor: !wednesday ? "#6b6661" : "white",
							},
						]}
						onPress={() => {
							if (wednesday) {
								selectDate("WednesdayEnd");
								showDatePicker();
							}
						}}
					>
						<Text style={SchedulePagestyles.hours}>{wednesdayEnd}</Text>
					</TouchableOpacity>
				</View>
				<View style={SchedulePagestyles.scheduleRow}>
					<MaterialSwitch2 handle={selectThursday} />
					<Text style={SchedulePagestyles.Text}>Thursday</Text>
					<TouchableOpacity
						style={[
							SchedulePagestyles.blackRect,
							{
								backgroundColor: !thursday ? "#6b6661" : "white",
							},
						]}
						onPress={() => {
							if (thursday) selectDate("Thursday");
							showDatePicker();
						}}
					>
						<Text style={SchedulePagestyles.hours}>{thursdayStart}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							SchedulePagestyles.blackRect,
							{
								backgroundColor: !thursday ? "#6b6661" : "white",
							},
						]}
						onPress={() => {
							if (thursday) {
								selectDate("ThursdayEnd");
								showDatePicker();
							}
						}}
					>
						<Text style={SchedulePagestyles.hours}>{thursdayEnd}</Text>
					</TouchableOpacity>
				</View>
				<View style={SchedulePagestyles.scheduleRow}>
					<MaterialSwitch2 handle={selectFriday} />
					<Text style={SchedulePagestyles.Text}>Friday</Text>
					<TouchableOpacity
						style={[
							SchedulePagestyles.blackRect,
							{
								backgroundColor: !friday ? "#6b6661" : "white",
							},
						]}
						onPress={() => {
							if (friday) {
								selectDate("Friday");
								showDatePicker();
							}
						}}
					>
						<Text style={SchedulePagestyles.hours}>{fridayStart}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							SchedulePagestyles.blackRect,
							{
								backgroundColor: !friday ? "#6b6661" : "white",
							},
						]}
						onPress={() => {
							if (friday) {
								selectDate("FridayEnd");
								showDatePicker();
							}
						}}
					>
						<Text style={SchedulePagestyles.hours}>{fridayEnd}</Text>
					</TouchableOpacity>
				</View>
				<View style={SchedulePagestyles.scheduleRow}>
					<MaterialSwitch2 handle={selectSaturday} />
					<Text style={SchedulePagestyles.Text}>Saturday</Text>
					<TouchableOpacity
						style={[
							SchedulePagestyles.blackRect,
							{
								backgroundColor: !saturday ? "#6b6661" : "white",
							},
						]}
						onPress={() => {
							if (saturday) {
								selectDate("Saturday");
								showDatePicker();
							}
						}}
					>
						<Text style={SchedulePagestyles.hours}>{saturdayStart}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={[
							SchedulePagestyles.blackRect,
							{
								backgroundColor: !saturday ? "#6b6661" : "white",
							},
						]}
						onPress={() => {
							if (saturday) {
								selectDate("SaturdayEnd");
								showDatePicker();
							}
						}}
					>
						<Text style={SchedulePagestyles.hours}>{saturdayEnd}</Text>
					</TouchableOpacity>
				</View>
				<BlueButton
					onPress={() => navigation.navigate("picDownload", { kaka: "k" })}
					Text1="Continue"
					style={SchedulePagestyles.BlueButton}
				/>
			</View>
			<DateTimePickerModal
				headerTextIOS="Pick an hour"
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
