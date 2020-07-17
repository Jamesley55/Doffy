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
exports.createScheduleDayBool = void 0;
const calendar_1 = require("../../../entity/calendar");
exports.createScheduleDayBool = (ScheduleBool) => __awaiter(void 0, void 0, void 0, function* () {
    const calendar = calendar_1.Calendar.create();
    if (ScheduleBool.monday)
        calendar.monday = true;
    if (ScheduleBool.tuesday)
        calendar.tuesday = true;
    if (ScheduleBool.wednesday)
        calendar.wednesday = true;
    if (ScheduleBool.thusday)
        calendar.thursday = true;
    if (ScheduleBool.friday)
        calendar.friday = true;
    if (ScheduleBool.saturday)
        calendar.saturday = true;
    if (ScheduleBool.sunday)
        calendar.sunday = true;
    yield calendar.save();
    return calendar;
});
//# sourceMappingURL=createScheduleDayBool.js.map