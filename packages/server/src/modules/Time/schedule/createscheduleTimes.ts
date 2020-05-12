import { scheduleTime } from "../create/createTime";
import { createScheduleDayBool } from "../../Calendar/create/createScheduleDayBool";

export const createTime = async (ScheduleBool: any, ScheduleTime: any) => {
  const calendar = await createScheduleDayBool(ScheduleBool);
  if (calendar.monday) {
    const mondaySchedule = await scheduleTime(
      ScheduleTime.mondaySchedule.StartTime,
      ScheduleTime.mondaySchedule.EndTime
    );
    calendar.mondaySchedule = mondaySchedule;
    calendar.mondayScheduleUuid = mondaySchedule.scheduleTimeId;
  }
  if (calendar.tuesday) {
    const tuesdaySchedule = await scheduleTime(
      ScheduleTime.tuesdaySchedule.StartTime,
      ScheduleTime.tuesdaySchedule.Endtime
    );
    calendar.tuesdaySchedule = tuesdaySchedule;
    calendar.tuesdayScheduleUuid = tuesdaySchedule.scheduleTimeId;
  }
  if (calendar.wednesday) {
    const wednesdaySchedule = await scheduleTime(
      ScheduleTime.wednesdaySchedule.StartTime,
      ScheduleTime.wednesdaySchedule.EndTime
    );
    calendar.wednesdaySchedule = wednesdaySchedule;
    calendar.wednesdayScheduleUuid = wednesdaySchedule.scheduleTimeId;
  }
  if (calendar.thursday) {
    const thursdaySchedule = await scheduleTime(
      ScheduleTime.thursdaySchedule.StartTime,
      ScheduleTime.thursdaySchedule.EndTime
    );
    calendar.thursdaySchedule = thursdaySchedule;
    calendar.thurdayScheduleUuid = thursdaySchedule.scheduleTimeId;
  }
  if (calendar.friday) {
    const fridaySchedule = await scheduleTime(
      ScheduleTime.fridaySchedule.StartTime,
      ScheduleTime.fridaySchedule.EndTime
    );
    calendar.fridaySchedule = fridaySchedule;
    calendar.fridayScheduleUuid = fridaySchedule.scheduleTimeId;
  }
  if (calendar.saturday) {
    const saturdaySchedule = await scheduleTime(
      ScheduleTime.saturdaySchedule.StartTime,
      ScheduleTime.saturdaySchedule.EndTime
    );
    calendar.saturdaySchedule = saturdaySchedule;
    calendar.saturdayScheduleUuid = saturdaySchedule.scheduleTimeId;
  }
  if (calendar.sunday) {
    const sundaySchedule = await scheduleTime(
      ScheduleTime.sundaySchedule.StartTime,
      ScheduleTime.sundaySchedule.EndTime
    );
    calendar.sundaySchedule = sundaySchedule;
    calendar.sundayScheduleUuid = sundaySchedule.scheduleTimeId;
  }
  await calendar.save();
  return calendar;
};
