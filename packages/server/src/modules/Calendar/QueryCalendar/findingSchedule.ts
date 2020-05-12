import { ScheduleTime } from "../../../entity/times";
export const findingSchedule = async (scheduleTimeId: string | undefined) => {
  const scheduleTime = await ScheduleTime.findOne({
    where: { scheduleTimeId },
  });
  return scheduleTime;
};
