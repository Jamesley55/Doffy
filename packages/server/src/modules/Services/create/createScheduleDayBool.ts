import { Calendar } from "../../../entity/calendar";

export const createScheduleDayBool = async (ScheduleBool: any) => {
  const calendar = Calendar.create();
  console.log("schedueBool monday ", ScheduleBool.monday);
  if (ScheduleBool.monday) {
    calendar.monday = true;
  }
  console.log("schedueBool tuesday ", ScheduleBool.tuesday);
  if (ScheduleBool.tuesday) {
    calendar.monday = true;
  }
  if (ScheduleBool.wednesday) {
    calendar.monday = true;
  }
  if (ScheduleBool.thusday) {
    calendar.monday = true;
  }
  if (ScheduleBool.friday) {
    calendar.monday = true;
  }
  if (ScheduleBool.saturday) {
    calendar.monday = true;
  }
  if (ScheduleBool.sunday) {
    calendar.monday = true;
  }
  await calendar.save();
  return calendar;
};
