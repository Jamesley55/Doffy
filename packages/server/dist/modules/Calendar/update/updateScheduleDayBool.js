"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateScheduleDayBool = void 0;
const calendar_1 = require("../../../entity/calendar");
exports.updateScheduleDayBool = (CalendarId, ScheduleBool) => __awaiter(void 0, void 0, void 0, function* () {
    const calendar = yield calendar_1.Calendar.findOne({ where: { CalendarId } });
    if (calendar) {
        if (ScheduleBool.monday !== undefined)
            calendar.monday = ScheduleBool.monday;
        if (ScheduleBool.tuesday !== undefined)
            calendar.tuesday = ScheduleBool.tuesday;
        if (ScheduleBool.wednesday !== undefined)
            calendar.wednesday = ScheduleBool.wednesday;
        if (ScheduleBool.thusday !== undefined)
            calendar.thursday = ScheduleBool.thusday;
        if (ScheduleBool.friday !== undefined)
            calendar.friday = ScheduleBool.friday;
        if (ScheduleBool.saturday !== undefined)
            calendar.saturday = ScheduleBool.saturday;
        if (ScheduleBool.sunday !== undefined) {
            calendar.sunday = ScheduleBool.sunday;
        }
        yield calendar.save();
    }
    return calendar;
});
//# sourceMappingURL=updateScheduleDayBool.js.map