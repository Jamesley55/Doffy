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
const times_1 = require("../../../entity/times");
const calendar_1 = require("../../../entity/calendar");
exports.scheduleTime = (startingTime, EndTime, CalendarId) => __awaiter(void 0, void 0, void 0, function* () {
    const calendar = yield calendar_1.Calendar.findOne({ where: { CalendarId } });
    const scheduleDay = yield times_1.ScheduleTime.create({
        startingTime,
        EndTime,
        calendar,
    }).save();
    return scheduleDay;
});
//# sourceMappingURL=updateTime.js.map