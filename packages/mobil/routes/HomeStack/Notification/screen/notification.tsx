import { AntDesign } from "@expo/vector-icons";
import * as React from "react";
import {
	ActivityIndicator,
	FlatList,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import { TabsStackNavProps } from "../../../../screenStack/Tydefs/tabsParamsList";
import { BookingContext } from "../../../../shareFuction/booking";
import { IntercommunicationContext } from "../../../../shareFuction/IntercommunicationContext";
import { AuthContext } from "../../../../shareFuction/userContext";
export function Notification({
	navigation,
}: TabsStackNavProps<"notification">) {
	const { NotificationQuery, subscribtionNotif } = React.useContext(
		IntercommunicationContext
	);
	const [loading, setLoading] = React.useState(true);

	const [array, setArray] = React.useState<any[]>([null]);
	const { userType, id } = React.useContext(AuthContext);

	const { updateBooking } = React.useContext(BookingContext);
	React.useEffect(() => {
		NotificationQuery()
			.then((index: any) => {
				setArray(index);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
			});
	}, [loading]);
	React.useEffect(() => {
		subscribtionNotif(id, setLoading as any);
	}, []);

	if (loading) {
		return <ActivityIndicator style={{ flex: 1 }} />;
	}
	if (loading || array.length === 0) {
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
								rightThreshold={0}
								overshootRight={false}
								renderRightActions={(pro, drag) => {
									if (item.bookRequest && userType === "serviceProvider") {
										return (
											<TouchableOpacity
												style={{
													backgroundColor: "green",
													width: "20%",
												}}
												onPress={() => {
													updateBooking(item.id, true);
													setLoading(true);
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
													setLoading(true);
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
										height: 100,
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
											width: "85%",
										}}
									>
										{item.message.Body}
									</Text>
									{item.bookRequest && (
										<AntDesign
											style={{ alignSelf: "flex-end" }}
											name="exclamationcircleo"
											size={12}
											color="black"
										/>
									)}
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
					updateCellsBatchingPeriod={400} // Increase time between renders
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
