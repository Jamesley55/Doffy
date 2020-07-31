import { useNewNotificationSubscription } from "@doffy/controller/src/generated/graphql-hooks";
import * as React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { TabsStackNavProps } from "../../../../screenStack/Tydefs/tabsParamsList";
import { BookingContext } from "../../../../shareFuction/booking";
import { IntercommunicationContext } from "../../../../shareFuction/IntercommunicationContext";
import { AuthContext } from "../../../../shareFuction/userContext";

export function Notification({
	navigation,
}: TabsStackNavProps<"notification">) {
	const { data, error } = useNewNotificationSubscription({
		variables: {
			recipientId: "f192de00-3a2e-40bf-8d97-a2be81705c7a",
		},
	});

	const { NotificationQuery } = React.useContext(IntercommunicationContext);
	const [loading, setLoading] = React.useState(true);
	const [array, setArray] = React.useState<any[]>([]);
	const { userType } = React.useContext(AuthContext);
	const { updateBooking } = React.useContext(BookingContext);
	React.useEffect(() => {
		NotificationQuery()
			.then((index: any) => {
				console.log("variables ", index);
				setArray(index);
				setLoading(false);
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	}, []);

	if (loading || array.length === 0) {
		console.log("cette fonction sanbs flatlist");
		return (
			<View
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<Text>NOTHING TO SEE HERE --YET.</Text>
				<Text>
					this is where all the activity of your bookings will happen{" "}
				</Text>
			</View>
		);
	} else {
		console.log("cette fontion avec flatlist", array);
		return (
			<View style={{ flex: 1 }}>
				{userType === "serviceProvider" ? (
					<Text
						style={{
							alignSelf: "center",
							color: "green",
							fontSize: 20,
							fontFamily: "roboto-regular",
						}}
					>
						swipe left to accept a booking request
					</Text>
				) : null}
				<FlatList
					style={{ flex: 1 }}
					renderItem={({ item }) => {
						return (
							<Swipeable
								renderRightActions={() => {
									if (item.bookRequest && userType === "serviceProvider") {
										return (
											<TouchableOpacity
												style={{
													backgroundColor: "green",
													width: "20%",
												}}
												onPress={() => {
													updateBooking(item.id, true);
												}}
											>
												<Text
													style={{
														color: "white",
														alignSelf: "center",
														marginTop: "40%",
													}}
												>
													Accept
												</Text>
											</TouchableOpacity>
										);
									} else {
										return null;
									}
								}}
								renderLeftActions={() => {
									if (item.bookRequest && userType === "serviceProvider") {
										return (
											<TouchableOpacity
												style={{ backgroundColor: "red", width: "20%" }}
												onPress={() => {
													updateBooking(item.id, false);
												}}
											>
												<Text
													style={{
														color: "white",
														alignSelf: "center",
														marginTop: "40%",
													}}
												>
													Refuse
												</Text>
											</TouchableOpacity>
										);
									} else {
										return null;
									}
								}}
							>
								<TouchableOpacity
									style={{
										flex: 1,
										borderWidth: 1,
										width: "100%",
										height: 80,
									}}
								>
									<Text
										style={{
											alignSelf: "center",
											color: "rgba(59,33,33,1)",
											fontSize: 14,
											marginTop: 20,
											fontFamily: "roboto-regular",
										}}
									>
										{item.message.Title}
									</Text>

									<Text
										style={{
											alignSelf: "center",
											color: "gray",
											fontSize: 14,
											fontFamily: "roboto-regular",
											textAlign: "center",
											width: "80%",
										}}
									>
										{item.message.Body}
									</Text>
								</TouchableOpacity>
							</Swipeable>
						);
					}}
					keyExtractor={(_item, index) => index.toString()}
					data={array}
					// performace setting
					removeClippedSubviews={true} // Unmount components when outside of window
					initialNumToRender={2} // Reduce initial render amount
					maxToRenderPerBatch={1} // Reduce number in each render batch
					updateCellsBatchingPeriod={100} // Increase time between renders
					windowSize={7} // Reduce the window size
				/>
			</View>
		);
	}
}

export function NotifDescription({
	route,
}: TabsStackNavProps<"NotifDescription">) {
	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Text
				style={{
					flex: 1,
					alignItems: "center",
					justifyContent: "center",
					position: "absolute",
				}}
			>
				{route.params.kaka}
			</Text>
		</View>
	);
}
