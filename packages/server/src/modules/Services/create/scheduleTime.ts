import { ScheduleTime } from "../../../entity/times";

export const scheduleTime = async (
  startingTime: number,
  EndTime: number,
  CalendarId: string
) => {
  const scheduleDay = await ScheduleTime.create({
    startingTime,
    EndTime,
    CalendarId,
  }).save();
  return scheduleDay;
};
