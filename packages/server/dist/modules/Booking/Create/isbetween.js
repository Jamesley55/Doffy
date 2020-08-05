"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBetween = void 0;
function isBetween(n, startTime, endTime) {
    return (n - startTime) * (n - endTime) <= 0;
}
exports.isBetween = isBetween;
//# sourceMappingURL=isbetween.js.map