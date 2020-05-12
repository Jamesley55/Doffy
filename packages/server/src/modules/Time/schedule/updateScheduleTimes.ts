import { scheduleTime } from "./../create/createTime";
import { updateScheduleDayBool } from "../../Calendar/update/updateScheduleDayBool";
import { ScheduleTime } from "../../../entity/times";

export const updateTime = async (
  CalendarId: any,
  ScheduleBool: any,
  schedule: any
) => {
  const calendar = await updateScheduleDayBool(CalendarId, ScheduleBool);
  if (calendar) {
    if (calendar.monday !== undefined) {
      const scheduleTimeId = calendar.mondayScheduleUuid;
      // we try to look and see if there's a Schedule that is linked to the calendar on a Monday
      const mondaySchedule = await ScheduleTime.findOne({
        where: { scheduleTimeId },
      });
      // if there's a schedule we update it
      if (mondaySchedule) {
        mondaySchedule.startingTime = schedule.mondaySchedule.StartTime;
        mondaySchedule.EndTime = schedule.mondaySchedule.EndTime;
        mondaySchedule.save();
      }
      // if there's no schedule we create one and assigned it to the calendar
      else {
        if (schedule.mondaySchedule) {
          const CreatemondaySchedule = await scheduleTime(
            schedule.mondaySchedule.StartTime,
            schedule.mondaySchedule.EndTime
          );
          calendar.mondaySchedule = CreatemondaySchedule;
          calendar.mondayScheduleUuid = CreatemondaySchedule.scheduleTimeId;
        }
      }
    }
    if (calendar.tuesday !== undefined) {
      const scheduleTimeId = calendar.tuesdayScheduleUuid;

      const tuesdaySchedule = await ScheduleTime.findOne({
        where: { scheduleTimeId },
      });
      if (tuesdaySchedule) {
        tuesdaySchedule.startingTime = schedule.tuesdaySchedule.StartTime;
        tuesdaySchedule.EndTime = schedule.tuesdaySchedule.EndTime;
        tuesdaySchedule.save();
      } else {
        if (schedule.tuesdaySchedule) {
          const CreatetuesdaySchedule = await scheduleTime(
            schedule.tuesdaySchedule.StartTime,
            schedule.tuesdaySchedule.Endtime
          );
          calendar.tuesdaySchedule = CreatetuesdaySchedule;
          calendar.tuesdayScheduleUuid = CreatetuesdaySchedule.scheduleTimeId;
        }
      }
    }
    if (calendar.wednesday !== undefined) {
      const scheduleTimeId = calendar.wednesdayScheduleUuid;

      const wednesdaySchedule = await ScheduleTime.findOne({
        where: { scheduleTimeId },
      });
      if (wednesdaySchedule) {
        wednesdaySchedule.startingTime = schedule.wednesdaySchedule.StartTime;
        wednesdaySchedule.EndTime = schedule.wednesdaySchedule.EndTime;
        wednesdaySchedule.save();
      } else {
        if (schedule.wednesdaySchedule) {
          const CreatewednesdaySchedule = await scheduleTime(
            schedule.wednesdaySchedule.StartTime,
            schedule.wednesdaySchedule.EndTime
          );
          calendar.wednesdaySchedule = CreatewednesdaySchedule;
          calendar.wednesdayScheduleUuid =
            CreatewednesdaySchedule.scheduleTimeId;
        }
      }
    }
    if (calendar.thursday !== undefined) {
      const scheduleTimeId = calendar.thurdayScheduleUuid;

      const thursdaySchedule = await ScheduleTime.findOne({
        where: { scheduleTimeId },
      });
      if (thursdaySchedule) {
        thursdaySchedule.startingTime = schedule.thursdaySchedule.StartTime;
        thursdaySchedule.EndTime = schedule.thursdaySchedule.EndTime;
        thursdaySchedule.save();
      } else {
        if (schedule.thursdaySchedule) {
          const CreatethursdaySchedule = await scheduleTime(
            schedule.thursdaySchedule.StartTime,
            schedule.thursdaySchedule.EndTime
          );
          calendar.thursdaySchedule = CreatethursdaySchedule;
          calendar.thurdayScheduleUuid = CreatethursdaySchedule.scheduleTimeId;
        }
      }
    }
    if (calendar.friday !== undefined) {
      const scheduleTimeId = calendar.fridayScheduleUuid;

      const fridaySchedule = await ScheduleTime.findOne({
        where: { scheduleTimeId },
      });
      if (fridaySchedule) {
        fridaySchedule.startingTime = schedule.fridaySchedule.StartTime;
        fridaySchedule.EndTime = schedule.fridaySchedule.EndTime;
        fridaySchedule.save();
      } else {
        if (schedule.fridaySchedule) {
          const CreatefridaySchedule = await scheduleTime(
            schedule.fridaySchedule.StartTime,
            schedule.fridaySchedule.EndTime
          );
          calendar.fridaySchedule = CreatefridaySchedule;
          calendar.fridayScheduleUuid = CreatefridaySchedule.scheduleTimeId;
        }
      }
    }
    if (calendar.saturday !== undefined) {
      const scheduleTimeId = calendar.saturdayScheduleUuid;

      const saturdaySchedule = await ScheduleTime.findOne({
        where: { scheduleTimeId },
      });
      if (saturdaySchedule) {
        saturdaySchedule.startingTime = schedule.saturdaySchedule.StartTime;
        saturdaySchedule.EndTime = schedule.saturdaySchedule.EndTime;
        saturdaySchedule.save();
      } else {
        if (schedule.saturdaySchedule) {
          const CreatesaturdaySchedule = await scheduleTime(
            schedule.saturdaySchedule.StartTime,
            schedule.saturdaySchedule.EndTime
          );
          calendar.saturdaySchedule = CreatesaturdaySchedule;
          calendar.saturdayScheduleUuid = CreatesaturdaySchedule.scheduleTimeId;
        }
      }
    }
    if (calendar.sunday !== undefined) {
      const scheduleTimeId = calendar.sundayScheduleUuid;

      const sundaySchedule = await ScheduleTime.findOne({
        where: { scheduleTimeId },
      });
      if (sundaySchedule) {
        sundaySchedule.startingTime = schedule.sundaySchedule.StartTime;
        sundaySchedule.EndTime = schedule.sundaySchedule.EndTime;
        sundaySchedule.save();
      } else {
        if (schedule.sundaySchedule) {
          const CreatesundaySchedule = await scheduleTime(
            schedule.sundaySchedule.StartTime,
            schedule.sundaySchedule.EndTime
          );
          calendar.sundaySchedule = CreatesundaySchedule;
          calendar.sundayScheduleUuid = CreatesundaySchedule.scheduleTimeId;
        }
      }
    }
    await calendar.save();
  }
  return calendar;
};
