import { updateScheduleDayBool } from "../../Calendar/update/updateScheduleDayBool";
import { ScheduleTime } from "../../../entity/times";

export const updateTime = async (
  CalendarId: any,
  ScheduleBool: any,
  schedule: any
) => {
  const calendar = await updateScheduleDayBool(CalendarId, ScheduleBool);
  if (calendar) {
    if (calendar.monday) {
      const scheduleTimeId = calendar.mondayScheduleUuid;

      const mondaySchedule = await ScheduleTime.findOne({
        where: { scheduleTimeId },
      });
      if (mondaySchedule) {
        mondaySchedule.startingTime = schedule.mondaySchedule.StartTime;
        mondaySchedule.EndTime = schedule.mondaySchedule.EndTime;
        mondaySchedule.save();
      }
    }
    if (calendar.tuesday) {
      const scheduleTimeId = calendar.tuesdayScheduleUuid;

      const tuesdaySchedule = await ScheduleTime.findOne({
        where: { scheduleTimeId },
      });
      if (tuesdaySchedule) {
        tuesdaySchedule.startingTime = schedule.tuesdaySchedule.StartTime;
        tuesdaySchedule.EndTime = schedule.tuesdaySchedule.EndTime;
        tuesdaySchedule.save();
      }
    }
    if (calendar.wednesday) {
      const scheduleTimeId = calendar.wednesdayScheduleUuid;

      const wednesdaySchedule = await ScheduleTime.findOne({
        where: { scheduleTimeId },
      });
      if (wednesdaySchedule) {
        wednesdaySchedule.startingTime = schedule.wednesdaySchedule.StartTime;
        wednesdaySchedule.EndTime = schedule.wednesdaySchedule.EndTime;
        wednesdaySchedule.save();
      }
    }
    if (calendar.thursday) {
      const scheduleTimeId = calendar.thurdayScheduleUuid;

      const thursdaySchedule = await ScheduleTime.findOne({
        where: { scheduleTimeId },
      });
      if (thursdaySchedule) {
        thursdaySchedule.startingTime = schedule.thursdaySchedule.StartTime;
        thursdaySchedule.EndTime = schedule.thursdaySchedule.EndTime;
        thursdaySchedule.save();
      }
    }
    if (calendar.friday) {
      const scheduleTimeId = calendar.fridayScheduleUuid;

      const fridaySchedule = await ScheduleTime.findOne({
        where: { scheduleTimeId },
      });
      if (fridaySchedule) {
        fridaySchedule.startingTime = schedule.fridaySchedule.StartTime;
        fridaySchedule.EndTime = schedule.fridaySchedule.EndTime;
        fridaySchedule.save();
      }
    }
    if (calendar.saturday) {
      const scheduleTimeId = calendar.saturdayScheduleUuid;

      const saturdaySchedule = await ScheduleTime.findOne({
        where: { scheduleTimeId },
      });
      if (saturdaySchedule) {
        saturdaySchedule.startingTime = schedule.saturdaySchedule.StartTime;
        saturdaySchedule.EndTime = schedule.saturdaySchedule.EndTime;
        saturdaySchedule.save();
      }
    }
    if (calendar.sunday) {
      const scheduleTimeId = calendar.sundayScheduleUuid;

      const sundaySchedule = await ScheduleTime.findOne({
        where: { scheduleTimeId },
      });
      if (sundaySchedule) {
        sundaySchedule.startingTime = schedule.sundaySchedule.StartTime;
        sundaySchedule.EndTime = schedule.sundaySchedule.EndTime;
        sundaySchedule.save();
      }
    }
    await calendar.save();
  }
  return calendar;
};
