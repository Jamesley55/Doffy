export function isBetween(n: any, startTime: any, endTime: any) {
  return (n - startTime) * (n - endTime) <= 0;
}
