import { getWeekDay } from "../../../Sharefonction/wekkday";
import { Schedule } from "../../Calendar/QueryCalendar/schedule";
import { isBetween } from "./isbetween";

export async function week(date: any, startService: any, service: any) {
	const day: any = new Date(date);
	const weekDay = getWeekDay(day);
	const schedule = await Schedule(service.id);
	let isbetween;
	if (weekDay === "Sunday") {
		if (schedule.sunday) {
			isbetween = isBetween(
				startService,
				schedule.sundaySchedule.StartTime,
				schedule.sundaySchedule.EndTime
			);
		} else {
			return null;
		}
	}
	if (weekDay === "Monday") {
		if (schedule.monday) {
			isbetween = isBetween(
				startService,
				schedule.mondaySchedule.StartTime,
				schedule.mondaySchedule.EndTime
			);
		} else {
			return null;
		}
	}
	if (weekDay === "Tuesday") {
		console.log("arriver ici ");
		if (schedule.tuesday) {
			isbetween = isBetween(
				startService,
				schedule.tuesdaySchedule.StartTime,
				schedule.tuesdaySchedule.EndTime
			);
		} else {
			return null;
		}
	}
	if (weekDay === "Wednesday") {
		if (schedule.wednesday) {
			isbetween = isBetween(
				startService,
				schedule.wednesdaySchedule.StartTime,
				schedule.wednesdaySchedule.EndTime
			);
		} else {
			return null;
		}
	}
	if (weekDay === "Thursday") {
		if (schedule.thursday) {
			isbetween = isBetween(
				startService,
				schedule.thursdaySchedule.StartTime,
				schedule.thursdaySchedule.EndTime
			);
		} else {
			return null;
		}
	}
	if (weekDay === "Friday") {
		if (schedule.friday) {
			isbetween = isBetween(
				startService,
				schedule.fridaySchedule.StartTime,
				schedule.fridaySchedule.EndTime
			);
		} else {
			return null;
		}
	}
	if (weekDay === "Saturday") {
		if (schedule.saturday) {
			isbetween = isBetween(
				startService,
				schedule.saturdaySchedule.StartTime,
				schedule.saturdaySchedule.EndTime
			);
		} else {
			return null;
		}
	}
	return isbetween;
}
