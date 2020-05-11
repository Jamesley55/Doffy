import { scheduleTime } from "./scheduleTime";
import { createScheduleDayBool } from "./createScheduleDayBool";

export const createTime = async (ScheduleBool: any, ScheduleTime: any) => {
  const calendar = await createScheduleDayBool(ScheduleBool);
  if (calendar.monday) {
    calendar.mondaySchedule = await scheduleTime(
      ScheduleTime.mondaySchedule.StartTime,
      ScheduleTime.mondaySchedule.EndTime
    );
  }
  if (calendar.tuesday) {
    calendar.tuesdaySchedule = await scheduleTime(
      ScheduleTime.tuesdaySchedule.StartTime,
      ScheduleTime.tuesdaySchedule.Endtime
    );
  }
  if (calendar.wednesday) {
    calendar.wednesdaySchedule = await scheduleTime(
      ScheduleTime.wednesdaySchedule.StartTime,
      ScheduleTime.wednesdaySchedule.EndTime
    );
  }
  if (calendar.thursday) {
    calendar.thusdaySchedule = await scheduleTime(
      ScheduleTime.thusdaySchedule.StartTime,
      ScheduleTime.thusdaySchedule.EndTime
    );
  }
  if (calendar.friday) {
    calendar.fridaySchedule = await scheduleTime(
      ScheduleTime.fridaySchedule.StartTime,
      ScheduleTime.fridaySchedule.EndTime
    );
  }
  if (calendar.saturday) {
    calendar.saturdaySchedule = await scheduleTime(
      ScheduleTime.saturdaySchedule.StartTime,
      ScheduleTime.saturdaySchedule.EndTime
    );
  }
  if (calendar.sunday) {
    calendar.sundaySchedule = await scheduleTime(
      ScheduleTime.sundaySchedule.StartTime,
      ScheduleTime.sundaySchedule.EndTime
    );
  }
  await calendar.save();
  return calendar;
};
