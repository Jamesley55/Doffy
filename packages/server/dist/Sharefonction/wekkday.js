"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWeekDay = void 0;
function getWeekDay(date) {
    const weekdays = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    const day = date.getUTCDay();
    console.log("day", day);
    return weekdays[day];
}
exports.getWeekDay = getWeekDay;
//# sourceMappingURL=wekkday.js.map