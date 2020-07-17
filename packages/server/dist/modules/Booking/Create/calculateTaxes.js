"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTaxes = void 0;
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