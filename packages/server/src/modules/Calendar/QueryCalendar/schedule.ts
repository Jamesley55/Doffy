import { Service } from "../../../entity/service";
import { findingSchedule } from "./findingSchedule";
import { Calendar } from "../../../entity/calendar";

export const Schedule = async (ServiceId: any) => {
  const services = await Service.findOne({ where: { id: ServiceId } });
  const id = services?.calendarId;
  const calendar = await Calendar.findOne({ where: { CalendarId: id } });
  const mondayScheduleuuid = await findingSchedule(
    calendar?.mondayScheduleUuid
  );
  const tuesdayScheduleuuid = await findingSchedule(
    calendar?.tuesdayScheduleUuid
  );
  const wednesdayScheduleuuid = await findingSchedule(
    calendar?.wednesdayScheduleUuid
  );
  const thursdayScheduleuuid = await findingSchedule(
    calendar?.thurdayScheduleUuid
  );
  const fridayScheduleuuid = await findingSchedule(
    calendar?.fridayScheduleUuid
  );
  const saturdayScheduleuuid = await findingSchedule(
    calendar?.saturdayScheduleUuid
  );
  const sundayScheduleuuid = await findingSchedule(
    calendar?.sundayScheduleUuid
  );
  const schedule = {
    mondaySchedule: {
      StartTime: mondayScheduleuuid?.startingTime,
      EndTime: mondayScheduleuuid?.EndTime,
    },
    tuesdaySchedule: {
      StartTime: tuesdayScheduleuuid?.startingTime,
      EndTime: tuesdayScheduleuuid?.EndTime,
    },
    wednesdaySchedule: {
      StartTime: wednesdayScheduleuuid?.startingTime,
      EndTime: wednesdayScheduleuuid?.EndTime,
    },
    thursdaySchedule: {
      StartTime: thursdayScheduleuuid?.startingTime,
      EndTime: thursdayScheduleuuid?.EndTime,
    },
    fridaySchedule: {
      StartTime: fridayScheduleuuid?.startingTime,
      EndTime: fridayScheduleuuid?.EndTime,
    },
    saturdaySchedule: {
      StartTime: saturdayScheduleuuid?.startingTime,
      EndTime: saturdayScheduleuuid?.EndTime,
    },
    sundaySchedule: {
      StartTime: sundayScheduleuuid?.startingTime,
      EndTime: sundayScheduleuuid?.EndTime,
    },
    monday: calendar?.monday,
    tuesday: calendar?.tuesday,
    wednesday: calendar?.wednesday,
    thursday: calendar?.thursday,
    friday: calendar?.friday,
    saturday: calendar?.saturday,
    sunday: calendar?.sunday,
  };
  return schedule;
};
