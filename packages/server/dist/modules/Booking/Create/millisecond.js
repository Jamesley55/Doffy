"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertMiliseconds = void 0;
function convertMiliseconds(miliseconds, format) {
    let totalHours, totalMinutes, totalSeconds;
    totalSeconds = Math.floor(miliseconds / 1000);
    totalMinutes = Math.floor(totalSeconds / 60);
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
exports.convertMiliseconds = convertMiliseconds;
//# sourceMappingURL=millisecond.js.map