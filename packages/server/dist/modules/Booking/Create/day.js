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
exports.week = void 0;
const wekkday_1 = require("../../../Sharefonction/wekkday");
const schedule_1 = require("../../Calendar/QueryCalendar/schedule");
const isbetween_1 = require("./isbetween");
function week(date, startService, service) {
    return __awaiter(this, void 0, void 0, function* () {
        const day = new Date(date);
        const weekDay = wekkday_1.getWeekDay(day);
        const schedule = yield schedule_1.Schedule(service.id);
        let isbetween;
        if (weekDay === "Sunday") {
            if (schedule.sunday) {
                isbetween = isbetween_1.isBetween(startService, schedule.sundaySchedule.StartTime, schedule.sundaySchedule.EndTime);
            }
            else {
                return null;
            }
        }
        if (weekDay === "Monday") {
            if (schedule.monday) {
                isbetween = isbetween_1.isBetween(startService, schedule.mondaySchedule.StartTime, schedule.mondaySchedule.EndTime);
            }
            else {
                return null;
            }
        }
        if (weekDay === "Tuesday") {
            console.log("arriver ici ");
            if (schedule.tuesday) {
                isbetween = isbetween_1.isBetween(startService, schedule.tuesdaySchedule.StartTime, schedule.tuesdaySchedule.EndTime);
            }
            else {
                return null;
            }
        }
        if (weekDay === "Wednesday") {
            if (schedule.wednesday) {
                isbetween = isbetween_1.isBetween(startService, schedule.wednesdaySchedule.StartTime, schedule.wednesdaySchedule.EndTime);
            }
            else {
                return null;
            }
        }
        if (weekDay === "Thursday") {
            if (schedule.thursday) {
                isbetween = isbetween_1.isBetween(startService, schedule.thursdaySchedule.StartTime, schedule.thursdaySchedule.EndTime);
            }
            else {
                return null;
            }
        }
        if (weekDay === "Friday") {
            if (schedule.friday) {
                isbetween = isbetween_1.isBetween(startService, schedule.fridaySchedule.StartTime, schedule.fridaySchedule.EndTime);
            }
            else {
                return null;
            }
        }
        if (weekDay === "Saturday") {
            if (schedule.saturday) {
                isbetween = isbetween_1.isBetween(startService, schedule.saturdaySchedule.StartTime, schedule.saturdaySchedule.EndTime);
            }
            else {
                return null;
            }
        }
        return isbetween;
    });
}
exports.week = week;
//# sourceMappingURL=day.js.map