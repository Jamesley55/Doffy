import { Calendar } from "../../../entity/calendar";
import { Service } from "../../../entity/service";
import { getHours } from "../../../Sharefonction/milisecondTohours";
import { findingSchedule } from "./findingSchedule";

export const Schedule = async (ServiceId: any) => {
	const services = await Service.findOne({ where: { id: ServiceId } });
	const id = services?.calendarId;
	const calendar = await Calendar.findOne({ where: { CalendarId: id } });
	const mondayScheduleuuid = await findingSchedule(
		calendar?.mondayScheduleUuid
	);
	const tuesdayScheduleuuid = await findingSchedule(
		calendar?.tuesdayScheduleUuid
	);
	const wednesdayScheduleuuid = await findingSchedule(
		calendar?.wednesdayScheduleUuid
	);
	const thursdayScheduleuuid = await findingSchedule(
		calendar?.thurdayScheduleUuid
	);
	const fridayScheduleuuid = await findingSchedule(
		calendar?.fridayScheduleUuid
	);
	const saturdayScheduleuuid = await findingSchedule(
		calendar?.saturdayScheduleUuid
	);
	const sundayScheduleuuid = await findingSchedule(
		calendar?.sundayScheduleUuid
	);
	const schedule = {
		mondaySchedule: {
			StartTime: getHours(mondayScheduleuuid?.startingTime),
			EndTime: getHours(mondayScheduleuuid?.EndTime),
		},
		tuesdaySchedule: {
			StartTime: getHours(tuesdayScheduleuuid?.startingTime),
			EndTime: getHours(tuesdayScheduleuuid?.EndTime),
		},
		wednesdaySchedule: {
			StartTime: getHours(wednesdayScheduleuuid?.startingTime),
			EndTime: getHours(wednesdayScheduleuuid?.EndTime),
		},
		thursdaySchedule: {
			StartTime: getHours(thursdayScheduleuuid?.startingTime),
			EndTime: getHours(thursdayScheduleuuid?.EndTime),
		},
		fridaySchedule: {
			StartTime: getHours(fridayScheduleuuid?.startingTime),
			EndTime: getHours(fridayScheduleuuid?.EndTime),
		},
		saturdaySchedule: {
			StartTime: getHours(saturdayScheduleuuid?.startingTime),
			EndTime: getHours(saturdayScheduleuuid?.EndTime),
		},
		sundaySchedule: {
			StartTime: getHours(sundayScheduleuuid?.startingTime),
			EndTime: getHours(sundayScheduleuuid?.EndTime),
		},
		monday: calendar?.monday,
		tuesday: calendar?.tuesday,
		wednesday: calendar?.wednesday,
		thursday: calendar?.thursday,
		friday: calendar?.friday,
		saturday: calendar?.saturday,
		sunday: calendar?.sunday,
	};
	return schedule;
};
