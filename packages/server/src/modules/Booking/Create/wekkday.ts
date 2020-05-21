/**
 * Function takes in a Date object and returns the day of the week in a text format.
 */
export function getWeekDay(date: any) {
  const weekdays: string[] = new Array(
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  );
  const day = date.getDay();
  return weekdays[day];
}
