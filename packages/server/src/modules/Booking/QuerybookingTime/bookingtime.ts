import { IResolvers } from "apollo-server-express";
import { Booking } from "../../../entity/booking";
import { Calendar } from "../../../entity/calendar";
import { Service } from "../../../entity/service";
import { ScheduleTime } from "../../../entity/times";
import { getHours } from "../../../Sharefonction/milisecondTohours";
import { getWeekDay } from "../../../Sharefonction/wekkday";
export const BookingTime: IResolvers = {
	Query: {
		QueryBookingTime: async (_, { serviceId, date }) => {
			const service = await Service.findOne({ where: { id: serviceId } });
			console.log(service);
			const calendar = await Calendar.findOne({
				where: { CalendarId: service?.calendarId },
			});
			const hours: string[] = [];
			let endTime: number = 0;
			const day: any = new Date(date);
			const weekDay = getWeekDay(day);
			let scheduleTimeId = null;
			weekDay === "Sunday"
				? (scheduleTimeId = calendar?.sundayScheduleUuid)
				: weekDay === "Monday"
				? (scheduleTimeId = calendar?.mondayScheduleUuid)
				: weekDay === "Tuesday"
				? (scheduleTimeId = calendar?.tuesdayScheduleUuid)
				: weekDay === "Wednesday"
				? (scheduleTimeId = calendar?.wednesdayScheduleUuid)
				: weekDay === "Thursday"
				? (scheduleTimeId = calendar?.thurdayScheduleUuid)
				: weekDay === "Friday"
				? (scheduleTimeId = calendar?.fridayScheduleUuid)
				: weekDay === "Saturday"
				? (scheduleTimeId = calendar?.saturdayScheduleUuid)
				: null;

			const schedule = await ScheduleTime.findOne({
				where: { scheduleTimeId },
			});

			console.log(schedule);
			if (schedule?.EndTime) {
				endTime = schedule.EndTime;
			}
			for (
				let i: any = schedule?.startingTime;
				i < endTime;
				i += service?.averageTime
			) {
				const booking = await Booking.findOne({
					where: {
						serviceId,
						date,
						startService: i,
						endService: i + service?.averageTime,
					},
				});
				console.log("boook", booking);

				if (!booking) {
					const h: string = getHours(i);
					hours.push(h);
				}
			}
			console.log(hours);

			return hours;
		},
	},
};
