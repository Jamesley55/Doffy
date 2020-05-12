import { scheduleTime } from "../create/createTime";
import { updateScheduleDayBool } from "../../Calendar/update/updateScheduleDayBool";
import { ScheduleTime } from "../../../entity/times";

export const updateTime = async (
  CalendarId: any,
  ScheduleBool: any,
  schedule: any
) => {
  const calendar = await updateScheduleDayBool(CalendarId, ScheduleBool);
  if (calendar) {
    ScheduleTime.delete({ CalendarId });
    const id = calendar.CalendarId;
    if (calendar.monday) {
      calendar.mondaySchedule = await scheduleTime(
        schedule.mondaySchedule.StartTime,
        schedule.mondaySchedule.EndTime,
        id
      );
    }
    if (calendar.tuesday) {
      calendar.tuesdaySchedule = await scheduleTime(
        schedule.tuesdaySchedule.StartTime,
        schedule.tuesdaySchedule.Endtime,
        id
      );
    }
    if (calendar.wednesday) {
      calendar.wednesdaySchedule = await scheduleTime(
        schedule.wednesdaySchedule.StartTime,
        schedule.wednesdaySchedule.EndTime,
        id
      );
    }
    if (calendar.thursday) {
      calendar.thusdaySchedule = await scheduleTime(
        schedule.thusdaySchedule.StartTime,
        schedule.thusdaySchedule.EndTime,
        id
      );
    }
    if (calendar.friday) {
      calendar.fridaySchedule = await scheduleTime(
        schedule.fridaySchedule.StartTime,
        schedule.fridaySchedule.EndTime,
        id
      );
    }
    if (calendar.saturday) {
      calendar.saturdaySchedule = await scheduleTime(
        schedule.saturdaySchedule.StartTime,
        schedule.saturdaySchedule.EndTime,
        id
      );
    }
    if (calendar.sunday) {
      calendar.sundaySchedule = await scheduleTime(
        schedule.sundaySchedule.StartTime,
        schedule.sundaySchedule.EndTime,
        id
      );
    }
    await calendar.save();
  }
  return calendar;
};
