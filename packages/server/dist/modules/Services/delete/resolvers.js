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
exports.DeleteService = void 0;
const service_1 = require("../../../entity/service");
const calendar_1 = require("../../../entity/calendar");
const times_1 = require("../../../entity/times");
exports.DeleteService = {
    Mutation: {
        DeleteService: (_, { ServiceId }) => __awaiter(void 0, void 0, void 0, function* () {
            const service = yield service_1.Service.findOne({ where: { id: ServiceId } });
            const CalendarId = service === null || service === void 0 ? void 0 : service.calendarId;
            service_1.Service.delete({ id: ServiceId });
            const calendar = yield calendar_1.Calendar.findOne({ where: { CalendarId } });
            const schedules = [];
            schedules.push(calendar === null || calendar === void 0 ? void 0 : calendar.mondayScheduleUuid, calendar === null || calendar === void 0 ? void 0 : calendar.tuesdayScheduleUuid, calendar === null || calendar === void 0 ? void 0 : calendar.wednesdayScheduleUuid, calendar === null || calendar === void 0 ? void 0 : calendar.thurdayScheduleUuid, calendar === null || calendar === void 0 ? void 0 : calendar.fridayScheduleUuid, calendar === null || calendar === void 0 ? void 0 : calendar.saturdayScheduleUuid, calendar === null || calendar === void 0 ? void 0 : calendar.sundayScheduleUuid);
            calendar_1.Calendar.delete({ CalendarId });
            schedules.forEach((element) => __awaiter(void 0, void 0, void 0, function* () {
                yield times_1.ScheduleTime.delete({ scheduleTimeId: element });
            }));
            return true;
        }),
    },
};
//# sourceMappingURL=resolvers.js.map