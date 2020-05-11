import { scheduleTime } from "./scheduleTime";
import { createScheduleDayBool } from "./createScheduleDayBool";

export const createTime = async (ScheduleBool: any, ScheduleTime: any) => {
  const calendar = await createScheduleDayBool(ScheduleBool);
  const id = calendar.CalendarId;
  if (calendar.monday) {
    calendar.mondaySchedule = await scheduleTime(
      ScheduleTime.mondaySchedule.StartTime,
      ScheduleTime.mondaySchedule.EndTime,
      id
    );
  }
  if (calendar.tuesday) {
    calendar.tuesdaySchedule = await scheduleTime(
      ScheduleTime.tuesdaySchedule.StartTime,
      ScheduleTime.tuesdaySchedule.Endtime,
      id
    );
  }
  if (calendar.wednesday) {
    calendar.wednesdaySchedule = await scheduleTime(
      ScheduleTime.wednesdaySchedule.StartTime,
      ScheduleTime.wednesdaySchedule.EndTime,
      id
    );
  }
  if (calendar.thursday) {
    calendar.thusdaySchedule = await scheduleTime(
      ScheduleTime.thusdaySchedule.StartTime,
      ScheduleTime.thusdaySchedule.EndTime,
      id
    );
  }
  if (calendar.friday) {
    calendar.fridaySchedule = await scheduleTime(
      ScheduleTime.fridaySchedule.StartTime,
      ScheduleTime.fridaySchedule.EndTime,
      id
    );
  }
  if (calendar.saturday) {
    calendar.saturdaySchedule = await scheduleTime(
      ScheduleTime.saturdaySchedule.StartTime,
      ScheduleTime.saturdaySchedule.EndTime,
      id
    );
  }
  if (calendar.sunday) {
    calendar.sundaySchedule = await scheduleTime(
      ScheduleTime.sundaySchedule.StartTime,
      ScheduleTime.sundaySchedule.EndTime,
      id
    );
  }
  await calendar.save();
  return calendar;
};
