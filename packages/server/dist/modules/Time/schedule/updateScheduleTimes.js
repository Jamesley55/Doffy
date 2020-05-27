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
const createTime_1 = require("./../create/createTime");
const updateScheduleDayBool_1 = require("../../Calendar/update/updateScheduleDayBool");
const times_1 = require("../../../entity/times");
exports.updateTime = (CalendarId, ScheduleBool, schedule) => __awaiter(void 0, void 0, void 0, function* () {
    const calendar = yield updateScheduleDayBool_1.updateScheduleDayBool(CalendarId, ScheduleBool);
    if (calendar) {
        if (calendar.monday !== undefined) {
            const scheduleTimeId = calendar.mondayScheduleUuid;
            const mondaySchedule = yield times_1.ScheduleTime.findOne({
                where: { scheduleTimeId },
            });
            if (mondaySchedule) {
                mondaySchedule.startingTime = schedule.mondaySchedule.StartTime;
                mondaySchedule.EndTime = schedule.mondaySchedule.EndTime;
                mondaySchedule.save();
            }
            else {
                if (schedule.mondaySchedule) {
                    const CreatemondaySchedule = yield createTime_1.scheduleTime(schedule.mondaySchedule.StartTime, schedule.mondaySchedule.EndTime);
                    calendar.mondaySchedule = CreatemondaySchedule;
                    calendar.mondayScheduleUuid = CreatemondaySchedule.scheduleTimeId;
                }
            }
        }
        if (calendar.tuesday !== undefined) {
            const scheduleTimeId = calendar.tuesdayScheduleUuid;
            const tuesdaySchedule = yield times_1.ScheduleTime.findOne({
                where: { scheduleTimeId },
            });
            if (tuesdaySchedule) {
                tuesdaySchedule.startingTime = schedule.tuesdaySchedule.StartTime;
                tuesdaySchedule.EndTime = schedule.tuesdaySchedule.EndTime;
                tuesdaySchedule.save();
            }
            else {
                if (schedule.tuesdaySchedule) {
                    const CreatetuesdaySchedule = yield createTime_1.scheduleTime(schedule.tuesdaySchedule.StartTime, schedule.tuesdaySchedule.Endtime);
                    calendar.tuesdaySchedule = CreatetuesdaySchedule;
                    calendar.tuesdayScheduleUuid = CreatetuesdaySchedule.scheduleTimeId;
                }
            }
        }
        if (calendar.wednesday !== undefined) {
            const scheduleTimeId = calendar.wednesdayScheduleUuid;
            const wednesdaySchedule = yield times_1.ScheduleTime.findOne({
                where: { scheduleTimeId },
            });
            if (wednesdaySchedule) {
                wednesdaySchedule.startingTime = schedule.wednesdaySchedule.StartTime;
                wednesdaySchedule.EndTime = schedule.wednesdaySchedule.EndTime;
                wednesdaySchedule.save();
            }
            else {
                if (schedule.wednesdaySchedule) {
                    const CreatewednesdaySchedule = yield createTime_1.scheduleTime(schedule.wednesdaySchedule.StartTime, schedule.wednesdaySchedule.EndTime);
                    calendar.wednesdaySchedule = CreatewednesdaySchedule;
                    calendar.wednesdayScheduleUuid =
                        CreatewednesdaySchedule.scheduleTimeId;
                }
            }
        }
        if (calendar.thursday !== undefined) {
            const scheduleTimeId = calendar.thurdayScheduleUuid;
            const thursdaySchedule = yield times_1.ScheduleTime.findOne({
                where: { scheduleTimeId },
            });
            if (thursdaySchedule) {
                thursdaySchedule.startingTime = schedule.thursdaySchedule.StartTime;
                thursdaySchedule.EndTime = schedule.thursdaySchedule.EndTime;
                thursdaySchedule.save();
            }
            else {
                if (schedule.thursdaySchedule) {
                    const CreatethursdaySchedule = yield createTime_1.scheduleTime(schedule.thursdaySchedule.StartTime, schedule.thursdaySchedule.EndTime);
                    calendar.thursdaySchedule = CreatethursdaySchedule;
                    calendar.thurdayScheduleUuid = CreatethursdaySchedule.scheduleTimeId;
                }
            }
        }
        if (calendar.friday !== undefined) {
            const scheduleTimeId = calendar.fridayScheduleUuid;
            const fridaySchedule = yield times_1.ScheduleTime.findOne({
                where: { scheduleTimeId },
            });
            if (fridaySchedule) {
                fridaySchedule.startingTime = schedule.fridaySchedule.StartTime;
                fridaySchedule.EndTime = schedule.fridaySchedule.EndTime;
                fridaySchedule.save();
            }
            else {
                if (schedule.fridaySchedule) {
                    const CreatefridaySchedule = yield createTime_1.scheduleTime(schedule.fridaySchedule.StartTime, schedule.fridaySchedule.EndTime);
                    calendar.fridaySchedule = CreatefridaySchedule;
                    calendar.fridayScheduleUuid = CreatefridaySchedule.scheduleTimeId;
                }
            }
        }
        if (calendar.saturday !== undefined) {
            const scheduleTimeId = calendar.saturdayScheduleUuid;
            const saturdaySchedule = yield times_1.ScheduleTime.findOne({
                where: { scheduleTimeId },
            });
            if (saturdaySchedule) {
                saturdaySchedule.startingTime = schedule.saturdaySchedule.StartTime;
                saturdaySchedule.EndTime = schedule.saturdaySchedule.EndTime;
                saturdaySchedule.save();
            }
            else {
                if (schedule.saturdaySchedule) {
                    const CreatesaturdaySchedule = yield createTime_1.scheduleTime(schedule.saturdaySchedule.StartTime, schedule.saturdaySchedule.EndTime);
                    calendar.saturdaySchedule = CreatesaturdaySchedule;
                    calendar.saturdayScheduleUuid = CreatesaturdaySchedule.scheduleTimeId;
                }
            }
        }
        if (calendar.sunday !== undefined) {
            const scheduleTimeId = calendar.sundayScheduleUuid;
            const sundaySchedule = yield times_1.ScheduleTime.findOne({
                where: { scheduleTimeId },
            });
            if (sundaySchedule) {
                sundaySchedule.startingTime = schedule.sundaySchedule.StartTime;
                sundaySchedule.EndTime = schedule.sundaySchedule.EndTime;
                sundaySchedule.save();
            }
            else {
                if (schedule.sundaySchedule) {
                    const CreatesundaySchedule = yield createTime_1.scheduleTime(schedule.sundaySchedule.StartTime, schedule.sundaySchedule.EndTime);
                    calendar.sundaySchedule = CreatesundaySchedule;
                    calendar.sundayScheduleUuid = CreatesundaySchedule.scheduleTimeId;
                }
            }
        }
        yield calendar.save();
    }
    return calendar;
});
//# sourceMappingURL=updateScheduleTimes.js.map