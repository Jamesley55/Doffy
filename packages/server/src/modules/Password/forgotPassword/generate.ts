export function generate(n: any): any {
  const add = 1;
  let max = 12 - add; // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.

  if (n > max) {
    return generate(max) + generate(n - max);
  }

  max = Math.pow(10, n + add);
  const min = max / 10; // Math.pow(10, n) basically
  const numberGenerated = Math.floor(Math.random() * (max - min + 1)) + min;

  return ("" + numberGenerated).substring(add);
}
