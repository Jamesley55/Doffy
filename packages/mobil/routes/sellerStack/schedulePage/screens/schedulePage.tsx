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
	const [hours, setHours] = React.useState("");
	const showDatePicker = () => {
		setDatePickerVisibility(true);
	};

	const hideDatePicker = () => {
		setDatePickerVisibility(false);
	};

	const handleConfirm = (time) => {
		console.log("A time has been picked: ", time);
		const d = new Date(time);
		console.log("hours", d.getUTCHours()); // Hours
		console.log("minute", d.getUTCMinutes()); // minute
		console.log("seconds", d.getUTCSeconds()); // seconds
		const houres = `${d.getUTCHours()}:${d.getUTCMinutes()}`;
		setHours(houres);
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
					<Text style={SchedulePagestyles.Text}>From</Text>
					<Text style={SchedulePagestyles.Text}>To</Text>
				</View>
				<View style={SchedulePagestyles.scheduleRow}>
					<MaterialSwitch2 />
					<Text style={SchedulePagestyles.Text}>Sunday</Text>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={showDatePicker}
					>
						<Text>{hours}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={showDatePicker}
					>
						<Text>{hours}</Text>
					</TouchableOpacity>
				</View>
				<View style={SchedulePagestyles.scheduleRow}>
					<MaterialSwitch2 />
					<Text style={SchedulePagestyles.Text}>Monday</Text>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={showDatePicker}
					>
						<Text>{hours}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={showDatePicker}
					>
						<Text>{hours}</Text>
					</TouchableOpacity>
				</View>
				<View style={SchedulePagestyles.scheduleRow}>
					<MaterialSwitch2 />
					<Text style={SchedulePagestyles.Text}>Tuesday</Text>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={showDatePicker}
					>
						<Text>{hours}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={showDatePicker}
					>
						<Text>{hours}</Text>
					</TouchableOpacity>
				</View>
				<View style={SchedulePagestyles.scheduleRow}>
					<MaterialSwitch2 />
					<Text style={SchedulePagestyles.Text}>Wednesday</Text>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={showDatePicker}
					>
						<Text>{hours}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={showDatePicker}
					>
						<Text>{hours}</Text>
					</TouchableOpacity>
				</View>
				<View style={SchedulePagestyles.scheduleRow}>
					<MaterialSwitch2 />
					<Text style={SchedulePagestyles.Text}>Thursday</Text>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={showDatePicker}
					>
						<Text>{hours}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={showDatePicker}
					>
						<Text>{hours}</Text>
					</TouchableOpacity>
				</View>
				<View style={SchedulePagestyles.scheduleRow}>
					<MaterialSwitch2 />
					<Text style={SchedulePagestyles.Text}>Friday</Text>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={showDatePicker}
					>
						<Text>{hours}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={showDatePicker}
					>
						<Text>{hours}</Text>
					</TouchableOpacity>
				</View>
				<View style={SchedulePagestyles.scheduleRow}>
					<MaterialSwitch2 />
					<Text style={SchedulePagestyles.Text}>Saturday</Text>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={showDatePicker}
					>
						<Text>{hours}</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={SchedulePagestyles.blackRect}
						onPress={showDatePicker}
					>
						<Text>{hours}</Text>
					</TouchableOpacity>
				</View>
				<BlueButton
					navigationPage="picDownload"
					navigation={navigation}
					Text1="Continue"
					style={SchedulePagestyles.BlueButton}
				/>
			</View>
			<DateTimePickerModal
				date={new Date(2300, 10, 20)}
				timeZoneOffsetInMinutes={0}
				minuteInterval={15}
				isVisible={isDatePickerVisible}
				mode="time"
				onConfirm={handleConfirm}
				onCancel={hideDatePicker}
			/>
		</SafeAreaView>
	);
}
