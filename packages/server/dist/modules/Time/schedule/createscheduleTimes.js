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
const createTime_1 = require("../create/createTime");
const createScheduleDayBool_1 = require("../../Calendar/create/createScheduleDayBool");
exports.createTime = (ScheduleBool, ScheduleTime) => __awaiter(void 0, void 0, void 0, function* () {
    const calendar = yield createScheduleDayBool_1.createScheduleDayBool(ScheduleBool);
    if (calendar.monday) {
        const mondaySchedule = yield createTime_1.scheduleTime(ScheduleTime.mondaySchedule.StartTime, ScheduleTime.mondaySchedule.EndTime);
        calendar.mondaySchedule = mondaySchedule;
        calendar.mondayScheduleUuid = mondaySchedule.scheduleTimeId;
    }
    if (calendar.tuesday) {
        const tuesdaySchedule = yield createTime_1.scheduleTime(ScheduleTime.tuesdaySchedule.StartTime, ScheduleTime.tuesdaySchedule.Endtime);
        calendar.tuesdaySchedule = tuesdaySchedule;
        calendar.tuesdayScheduleUuid = tuesdaySchedule.scheduleTimeId;
    }
    if (calendar.wednesday) {
        const wednesdaySchedule = yield createTime_1.scheduleTime(ScheduleTime.wednesdaySchedule.StartTime, ScheduleTime.wednesdaySchedule.EndTime);
        calendar.wednesdaySchedule = wednesdaySchedule;
        calendar.wednesdayScheduleUuid = wednesdaySchedule.scheduleTimeId;
    }
    if (calendar.thursday) {
        const thursdaySchedule = yield createTime_1.scheduleTime(ScheduleTime.thursdaySchedule.StartTime, ScheduleTime.thursdaySchedule.EndTime);
        calendar.thursdaySchedule = thursdaySchedule;
        calendar.thurdayScheduleUuid = thursdaySchedule.scheduleTimeId;
    }
    if (calendar.friday) {
        const fridaySchedule = yield createTime_1.scheduleTime(ScheduleTime.fridaySchedule.StartTime, ScheduleTime.fridaySchedule.EndTime);
        calendar.fridaySchedule = fridaySchedule;
        calendar.fridayScheduleUuid = fridaySchedule.scheduleTimeId;
    }
    if (calendar.saturday) {
        const saturdaySchedule = yield createTime_1.scheduleTime(ScheduleTime.saturdaySchedule.StartTime, ScheduleTime.saturdaySchedule.EndTime);
        calendar.saturdaySchedule = saturdaySchedule;
        calendar.saturdayScheduleUuid = saturdaySchedule.scheduleTimeId;
    }
    if (calendar.sunday) {
        const sundaySchedule = yield createTime_1.scheduleTime(ScheduleTime.sundaySchedule.StartTime, ScheduleTime.sundaySchedule.EndTime);
        calendar.sundaySchedule = sundaySchedule;
        calendar.sundayScheduleUuid = sundaySchedule.scheduleTimeId;
    }
    yield calendar.save();
    return calendar;
});
//# sourceMappingURL=createscheduleTimes.js.map