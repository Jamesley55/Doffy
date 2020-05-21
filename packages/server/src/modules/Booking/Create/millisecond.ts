export function convertMiliseconds(miliseconds: any, format: any) {
  // tslint:disable-next-line: one-variable-per-declaration
  let totalHours, totalMinutes, totalSeconds;

  totalSeconds = Math.floor(miliseconds / 1000);
  totalMinutes = Math.floor(totalSeconds / 60);
  // tslint:disable-next-line: radix
  totalHours = Math.floor(totalMinutes / 60);
  const days = Math.floor(totalHours / 24);

  switch (format) {
    case "s":
      return totalSeconds;
    case "m":
      return totalMinutes;
    case "h":
      return totalHours;
    case "d":
      return days;
    default:
      return totalMinutes;
  }
}
