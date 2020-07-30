const moment = require("moment");
import * as React from "react";
import CalendarStrip from "react-native-calendar-strip";

interface Props {
	onDateSelected: any;
}
export class ScheduleDoffy extends React.PureComponent<Props> {
	render() {
		return (
			<CalendarStrip
				minDate={moment()}
				selectedDate={moment()}
				showMonth={true}
				calendarAnimation={{ type: "sequence", duration: 30 }}
				daySelectionAnimation={{
					type: "background",
					highlightColor: "green",
				}}
				iconContainer={{ flex: 0.1 }}
				useIsoWeekday={false}
				style={{ height: 80 }}
				onDateSelected={this.props.onDateSelected}
			/>
		);
	}
}
