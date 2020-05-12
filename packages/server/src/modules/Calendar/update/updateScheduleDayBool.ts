import { Calendar } from "../../../entity/calendar";

export const updateScheduleDayBool = async (
  CalendarId: any,
  ScheduleBool: any
) => {
  const calendar = await Calendar.findOne({ where: { CalendarId } });
  if (calendar) {
    if (ScheduleBool.monday !== undefined)
      calendar.monday = ScheduleBool.monday;
    if (ScheduleBool.tuesday !== undefined)
      calendar.tuesday = ScheduleBool.tuesday;
    if (ScheduleBool.wednesday !== undefined)
      calendar.wednesday = ScheduleBool.wednesday;
    if (ScheduleBool.thusday !== undefined)
      calendar.thursday = ScheduleBool.thusday;
    if (ScheduleBool.friday !== undefined)
      calendar.friday = ScheduleBool.friday;
    if (ScheduleBool.saturday !== undefined)
      calendar.saturday = ScheduleBool.saturday;
    if (ScheduleBool.sunday !== undefined) {
      calendar.sunday = ScheduleBool.sunday;
    }
    await calendar.save();
  }
  return calendar;
};
