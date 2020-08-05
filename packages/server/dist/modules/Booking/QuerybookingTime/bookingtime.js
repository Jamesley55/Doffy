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
exports.BookingTime = void 0;
const booking_1 = require("../../../entity/booking");
const calendar_1 = require("../../../entity/calendar");
const service_1 = require("../../../entity/service");
const times_1 = require("../../../entity/times");
const milisecondTohours_1 = require("../../../Sharefonction/milisecondTohours");
const wekkday_1 = require("../../../Sharefonction/wekkday");
exports.BookingTime = {
    Query: {
        QueryBookingTime: (_, { serviceId, date }) => __awaiter(void 0, void 0, void 0, function* () {
            const service = yield service_1.Service.findOne({ where: { id: serviceId } });
            console.log(service);
            const calendar = yield calendar_1.Calendar.findOne({
                where: { CalendarId: service === null || service === void 0 ? void 0 : service.calendarId },
            });
            const hours = [];
            let endTime = 0;
            const day = new Date(date);
            const weekDay = wekkday_1.getWeekDay(day);
            let scheduleTimeId = null;
            weekDay === "Sunday"
                ? (scheduleTimeId = calendar === null || calendar === void 0 ? void 0 : calendar.sundayScheduleUuid)
                : weekDay === "Monday"
                    ? (scheduleTimeId = calendar === null || calendar === void 0 ? void 0 : calendar.mondayScheduleUuid)
                    : weekDay === "Tuesday"
                        ? (scheduleTimeId = calendar === null || calendar === void 0 ? void 0 : calendar.tuesdayScheduleUuid)
                        : weekDay === "Wednesday"
                            ? (scheduleTimeId = calendar === null || calendar === void 0 ? void 0 : calendar.wednesdayScheduleUuid)
                            : weekDay === "Thursday"
                                ? (scheduleTimeId = calendar === null || calendar === void 0 ? void 0 : calendar.thurdayScheduleUuid)
                                : weekDay === "Friday"
                                    ? (scheduleTimeId = calendar === null || calendar === void 0 ? void 0 : calendar.fridayScheduleUuid)
                                    : weekDay === "Saturday"
                                        ? (scheduleTimeId = calendar === null || calendar === void 0 ? void 0 : calendar.saturdayScheduleUuid)
                                        : null;
            const schedule = yield times_1.ScheduleTime.findOne({
                where: { scheduleTimeId },
            });
            console.log(schedule);
            if (schedule === null || schedule === void 0 ? void 0 : schedule.EndTime) {
                endTime = schedule.EndTime;
            }
            for (let i = schedule === null || schedule === void 0 ? void 0 : schedule.startingTime; i < endTime; i += service === null || service === void 0 ? void 0 : service.averageTime) {
                const booking = yield booking_1.Booking.findOne({
                    where: {
                        serviceId,
                        date,
                        startService: i,
                        endService: i + (service === null || service === void 0 ? void 0 : service.averageTime),
                    },
                });
                console.log("boook", booking);
                if (!booking) {
                    const h = milisecondTohours_1.getHours(i);
                    hours.push(h);
                }
            }
            console.log(hours);
            return hours;
        }),
    },
};
//# sourceMappingURL=bookingtime.js.map