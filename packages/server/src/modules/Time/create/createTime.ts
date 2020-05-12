import { ScheduleTime } from "../../../entity/times";

export const scheduleTime = async (startingTime: number, EndTime: number) => {
  const scheduleDay = await ScheduleTime.create({
    startingTime,
    EndTime,
  }).save();
  return scheduleDay;
};
