const moment = require("moment");
import * as React from "react";
import { NativeModules } from "react-native";
import CalendarStrip from "react-native-calendar-strip";

const { PlatformConstants } = NativeModules;
const deviceType = PlatformConstants.interfaceIdiom;
interface Props {
	onDateSelected: any;
}
export class ScheduleDoffy extends React.PureComponent<Props> {
	render() {
		return (
			<CalendarStrip
				minDate={moment()}
				showMonth={true}
				calendarAnimation={{ type: "sequence", duration: 30 }}
				daySelectionAnimation={{
					type: "background",
					highlightColor: "green",
				}}
				iconContainer={{ flex: 0.1 }}
				useIsoWeekday={false}
				style={{ height: deviceType === "phone" ? 80 : 150 }}
				onDateSelected={this.props.onDateSelected}
			/>
		);
	}
}
