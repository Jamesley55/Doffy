import { ScheduleTime } from "../../../entity/times";
import { Calendar } from "../../../entity/calendar";

export const scheduleTime = async (
  startingTime: any,
  EndTime: any,
  CalendarId: any
) => {
  const calendar = await Calendar.findOne({ where: { CalendarId } });
  const scheduleDay = await ScheduleTime.create({
    startingTime,
    EndTime,
    calendar,
  }).save();
  return scheduleDay;
};
