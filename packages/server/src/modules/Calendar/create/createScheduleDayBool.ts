import { Calendar } from "../../../entity/calendar";

export const createScheduleDayBool = async (ScheduleBool: any) => {
  const calendar = Calendar.create();

  if (ScheduleBool.monday) {
    calendar.monday = true;
  }
  if (ScheduleBool.tuesday) {
    calendar.tuesday = true;
  }
  if (ScheduleBool.wednesday) {
    calendar.wednesday = true;
  }
  if (ScheduleBool.thusday) {
    calendar.thursday = true;
  }
  if (ScheduleBool.friday) {
    calendar.friday = true;
  }
  if (ScheduleBool.saturday) {
    calendar.saturday = true;
  }
  if (ScheduleBool.sunday) {
    calendar.sunday = true;
  }
  await calendar.save();
  return calendar;
};
