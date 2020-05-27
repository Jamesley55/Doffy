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
const service_1 = require("../../../entity/service");
const findingSchedule_1 = require("./findingSchedule");
const calendar_1 = require("../../../entity/calendar");
exports.Schedule = (ServiceId) => __awaiter(void 0, void 0, void 0, function* () {
    const services = yield service_1.Service.findOne({ where: { id: ServiceId } });
    const id = services === null || services === void 0 ? void 0 : services.calendarId;
    const calendar = yield calendar_1.Calendar.findOne({ where: { CalendarId: id } });
    const mondayScheduleuuid = yield findingSchedule_1.findingSchedule(calendar === null || calendar === void 0 ? void 0 : calendar.mondayScheduleUuid);
    const tuesdayScheduleuuid = yield findingSchedule_1.findingSchedule(calendar === null || calendar === void 0 ? void 0 : calendar.tuesdayScheduleUuid);
    const wednesdayScheduleuuid = yield findingSchedule_1.findingSchedule(calendar === null || calendar === void 0 ? void 0 : calendar.wednesdayScheduleUuid);
    const thursdayScheduleuuid = yield findingSchedule_1.findingSchedule(calendar === null || calendar === void 0 ? void 0 : calendar.thurdayScheduleUuid);
    const fridayScheduleuuid = yield findingSchedule_1.findingSchedule(calendar === null || calendar === void 0 ? void 0 : calendar.fridayScheduleUuid);
    const saturdayScheduleuuid = yield findingSchedule_1.findingSchedule(calendar === null || calendar === void 0 ? void 0 : calendar.saturdayScheduleUuid);
    const sundayScheduleuuid = yield findingSchedule_1.findingSchedule(calendar === null || calendar === void 0 ? void 0 : calendar.sundayScheduleUuid);
    const schedule = {
        mondaySchedule: {
            StartTime: mondayScheduleuuid === null || mondayScheduleuuid === void 0 ? void 0 : mondayScheduleuuid.startingTime,
            EndTime: mondayScheduleuuid === null || mondayScheduleuuid === void 0 ? void 0 : mondayScheduleuuid.EndTime,
        },
        tuesdaySchedule: {
            StartTime: tuesdayScheduleuuid === null || tuesdayScheduleuuid === void 0 ? void 0 : tuesdayScheduleuuid.startingTime,
            EndTime: tuesdayScheduleuuid === null || tuesdayScheduleuuid === void 0 ? void 0 : tuesdayScheduleuuid.EndTime,
        },
        wednesdaySchedule: {
            StartTime: wednesdayScheduleuuid === null || wednesdayScheduleuuid === void 0 ? void 0 : wednesdayScheduleuuid.startingTime,
            EndTime: wednesdayScheduleuuid === null || wednesdayScheduleuuid === void 0 ? void 0 : wednesdayScheduleuuid.EndTime,
        },
        thursdaySchedule: {
            StartTime: thursdayScheduleuuid === null || thursdayScheduleuuid === void 0 ? void 0 : thursdayScheduleuuid.startingTime,
            EndTime: thursdayScheduleuuid === null || thursdayScheduleuuid === void 0 ? void 0 : thursdayScheduleuuid.EndTime,
        },
        fridaySchedule: {
            StartTime: fridayScheduleuuid === null || fridayScheduleuuid === void 0 ? void 0 : fridayScheduleuuid.startingTime,
            EndTime: fridayScheduleuuid === null || fridayScheduleuuid === void 0 ? void 0 : fridayScheduleuuid.EndTime,
        },
        saturdaySchedule: {
            StartTime: saturdayScheduleuuid === null || saturdayScheduleuuid === void 0 ? void 0 : saturdayScheduleuuid.startingTime,
            EndTime: saturdayScheduleuuid === null || saturdayScheduleuuid === void 0 ? void 0 : saturdayScheduleuuid.EndTime,
        },
        sundaySchedule: {
            StartTime: sundayScheduleuuid === null || sundayScheduleuuid === void 0 ? void 0 : sundayScheduleuuid.startingTime,
            EndTime: sundayScheduleuuid === null || sundayScheduleuuid === void 0 ? void 0 : sundayScheduleuuid.EndTime,
        },
        monday: calendar === null || calendar === void 0 ? void 0 : calendar.monday,
        tuesday: calendar === null || calendar === void 0 ? void 0 : calendar.tuesday,
        wednesday: calendar === null || calendar === void 0 ? void 0 : calendar.wednesday,
        thursday: calendar === null || calendar === void 0 ? void 0 : calendar.thursday,
        friday: calendar === null || calendar === void 0 ? void 0 : calendar.friday,
        saturday: calendar === null || calendar === void 0 ? void 0 : calendar.saturday,
        sunday: calendar === null || calendar === void 0 ? void 0 : calendar.sunday,
    };
    return schedule;
});
//# sourceMappingURL=schedule.js.map