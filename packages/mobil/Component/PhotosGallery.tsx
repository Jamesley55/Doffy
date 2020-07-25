import * as React from "react";
import { FlatList, ImageBackground, Text, View } from "react-native";
import { requestPageStyle } from "../routes/bookingPages/requestPage/styles/style";
interface Props {
	data: any;
}

export class PhotoGalery extends React.PureComponent<Props> {
	scrollToIndex = (index) => {
		this.flatListRef.scrollToIndex({
			animated: true,
			index,
		});
	};
	state = {
		imageLoaded: false,
		timePassed: false,
		index: 0,
	};
	flatListRef: any;

	render() {
		const { data } = this.props;
		return (
			<View>
				<FlatList
					horizontal={true}
					keyExtractor={(idem, index) => index.toString()}
					style={{ flex: 1 }}
					renderItem={({ item, index }) => {
						this.setState({ index });
						return (
							<View style={requestPageStyle.rect2}>
								<ImageBackground
									style={{
										flex: 1,
										width: "100%",
										height: "100%",
										backgroundColor: "gray",
									}}
									source={{ uri: item }}
								>
									{!this.state.timePassed && (
										<View
											style={{
												backgroundColor: "rgba(230, 230, 230,1)",
												width: 20,
												height: 20,
												alignSelf: "flex-end",
												alignItems: "center",
												borderRadius: 10,
											}}
										>
											<Text
												style={{
													color: "black",
													fontSize: 14,
													alignSelf: "center",
												}}
											>
												{`${index + 1}/${this.props.data.length}`}
											</Text>
										</View>
									)}
								</ImageBackground>
							</View>
						);
					}}
					data={data}
					showsHorizontalScrollIndicator={false}
					// Performance settings
					removeClippedSubviews={true} // Unmount components when outside of window
					initialNumToRender={2} // Reduce initial render amount
					maxToRenderPerBatch={1} // Reduce number in each render batch
					updateCellsBatchingPeriod={100} // Increase time between renders
					windowSize={7} // Reduce the window size
					ref={(ref) => {
						this.flatListRef = ref;
					}}
				/>
				{this.state.index > 0 ? (
					<FlatList
						horizontal={true}
						keyExtractor={(idem, index) => index.toString()}
						style={{ alignSelf: "center", width: 20 }}
						renderItem={({ item, index }) => {
							return (
								<View style={{ flexDirection: "row" }}>
									<View
										style={{
											backgroundColor:
												this.state.index === index ? "green" : "gray",
											height: 10,
											width: 10,
											borderRadius: 30,
											elevation: 2,
											alignSelf: "center",
										}}
									/>
								</View>
							);
						}}
						data={data}
						showsHorizontalScrollIndicator={false}
						// Performance settings
						removeClippedSubviews={true} // Unmount components when outside of window
						initialNumToRender={2} // Reduce initial render amount
						maxToRenderPerBatch={1} // Reduce number in each render batch
						updateCellsBatchingPeriod={100} // Increase time between renders
						windowSize={7} // Reduce the window size
						ref={(ref) => {
							this.flatListRef = ref;
						}}
					/>
				) : null}
			</View>
		);
	}
}

export default PhotoGalery;
