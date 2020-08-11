import { FindServiceCalendarQuery } from "@doffy/controller";
import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import FastImage from "react-native-fast-image";
import { tConv24 } from "../../../../shareFuction/Convert24h";
import { openMap } from "../../../../shareFuction/openMaps";
import requestPageStyle from "../styles/style";
interface Props {
	adresseVisible: boolean;
	state: string;
	country: string;
	city: string;
	cal: FindServiceCalendarQuery | undefined;
	Adresse: string;
}

export class Availability extends React.PureComponent<Props> {
	render() {
		const { adresseVisible, state, country, city, cal, Adresse } = this.props;

		return (
			<View>
				<Text style={[requestPageStyle.Title, { textAlign: "center" }]}>
					{adresseVisible ? "Location & hours" : "availability"}
				</Text>
				<FastImage
					style={adresseVisible ? requestPageStyle.map : requestPageStyle.open}
					source={
						adresseVisible
							? require("../Images/Maps.jpg")
							: require("../Images/Open.jpg")
					}
				>
					<LinearGradient
						// Background Linear Gradient
						colors={["black", "transparent"]}
						style={{
							position: "absolute",
							top: 0,
							bottom: "100%",
							left: 0,
							right: 0,
							width: "100%",
							height: "100%",
						}}
						start={[0, 0.2]}
						end={[0.8, 1]}
					>
						<View>
							{adresseVisible && (
								<View
									style={{
										flexDirection: "row",
										justifyContent: "space-between",
										marginTop: 5,
									}}
								>
									<View>
										<Text
											style={[
												requestPageStyle.AvailabilityStyle,
												{ marginBottom: 0 },
											]}
										>
											Adress: {Adresse}
										</Text>
										<Text
											style={[
												requestPageStyle.AvailabilityStyle,
												{ marginBottom: 0 },
											]}
										>
											{city},{state}
										</Text>
										<Text style={requestPageStyle.AvailabilityStyle}>
											{country}
										</Text>
									</View>
									<TouchableOpacity
										style={requestPageStyle.openInGoogle}
										onPress={() => openMap(Adresse, city, state)}
									>
										<Text style={requestPageStyle.openGoogle}>
											open in Google maps
										</Text>
									</TouchableOpacity>
								</View>
							)}
							<Text style={requestPageStyle.AvailabilityStyle}>
								{cal?.findServiceCalendar?.monday
									? `monday: ${tConv24(
											cal.findServiceCalendar.mondaySchedule?.StartTime
									  )} - ${tConv24(
											cal.findServiceCalendar.mondaySchedule?.EndTime
									  )}`
									: "monday: unavalaible"}
							</Text>
							<Text style={requestPageStyle.AvailabilityStyle}>
								{cal?.findServiceCalendar?.tuesday
									? `tuesday: ${tConv24(
											cal.findServiceCalendar.tuesdaySchedule?.StartTime
									  )} - ${tConv24(
											cal.findServiceCalendar.tuesdaySchedule?.EndTime
									  )}`
									: "tuesday: unavalaible"}
							</Text>
							<Text style={requestPageStyle.AvailabilityStyle}>
								{cal?.findServiceCalendar?.wednesday
									? `wednesday: ${tConv24(
											cal.findServiceCalendar.wednesdaySchedule?.StartTime
									  )} - ${tConv24(
											cal.findServiceCalendar.wednesdaySchedule?.EndTime
									  )}`
									: "wednesday: unavalaible"}
							</Text>
							<Text style={requestPageStyle.AvailabilityStyle}>
								{cal?.findServiceCalendar?.thursday
									? `thursday: ${tConv24(
											cal.findServiceCalendar.thursdaySchedule?.StartTime
									  )} - ${tConv24(
											cal.findServiceCalendar.thursdaySchedule?.EndTime
									  )}`
									: "thursday: unavalaible"}
							</Text>
							<Text style={requestPageStyle.AvailabilityStyle}>
								{cal?.findServiceCalendar?.friday
									? `friday: ${tConv24(
											cal.findServiceCalendar.fridaySchedule?.StartTime
									  )} - ${tConv24(
											cal.findServiceCalendar.fridaySchedule?.EndTime
									  )}`
									: "friday: unavalaible"}
							</Text>
							<Text style={requestPageStyle.AvailabilityStyle}>
								{cal?.findServiceCalendar?.saturday
									? `saturday: ${tConv24(
											cal.findServiceCalendar.saturdaySchedule?.StartTime
									  )} - ${tConv24(
											cal.findServiceCalendar.saturdaySchedule?.EndTime
									  )}`
									: "saturday: unavalaible"}
							</Text>
							<Text style={requestPageStyle.AvailabilityStyle}>
								{cal?.findServiceCalendar?.sunday
									? `sunday: ${tConv24(
											cal.findServiceCalendar.saturdaySchedule?.StartTime
									  )} - ${tConv24(
											cal.findServiceCalendar.sundaySchedule?.EndTime
									  )}`
									: "sunday: unavalaible"}
							</Text>
						</View>
					</LinearGradient>
				</FastImage>
			</View>
		);
	}
}
