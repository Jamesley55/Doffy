"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateTaxes(countryId, price) {
    let subtotal;
    if (countryId === "CA") {
        const taxes = price * 0.15;
        subtotal = price + taxes;
    }
    return subtotal;
}
exports.calculateTaxes = calculateTaxes;
//# sourceMappingURL=calculateTaxes.js.map