"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getWeekDay(date) {
    const weekdays = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    const day = date.getDay();
    return weekdays[day];
}
exports.getWeekDay = getWeekDay;
//# sourceMappingURL=wekkday.js.map