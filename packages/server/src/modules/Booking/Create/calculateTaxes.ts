export function calculateTaxes(countryId: string, price: number) {
  let subtotal;
  if (countryId === "CA") {
    const taxes = price * 0.15;
    subtotal = price + taxes;
  }
  return subtotal;
}
