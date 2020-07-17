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
exports.createService = void 0;
const service_1 = require("../../../entity/service");
const createscheduleTimes_1 = require("../../Time/schedule/createscheduleTimes");
const User_1 = require("../../../entity/User");
exports.createService = {
    Mutation: {
        createService: (_, { inputService, ScheduleBool, ScheduleTime }, { session }) => __awaiter(void 0, void 0, void 0, function* () {
            const { name, category, description, coutryId, stateId, cityId, Taxes, Adress, price, payoutSchedule, customerBillingStatement, latitude, longitude, } = inputService;
            const ownerId = session.userId;
            const calendar = yield createscheduleTimes_1.createTime(ScheduleBool, ScheduleTime);
            yield service_1.Service.create({
                name,
                category,
                description,
                coutryId,
                stateId,
                cityId,
                Taxes,
                Adress,
                price,
                payoutSchedule,
                customerBillingStatement,
                latitude,
                longitude,
                ownerId,
                calendar,
            }).save();
            const userType = "serviceProvider";
            yield User_1.User.update({ id: ownerId }, { userType });
            console.log("calendar", calendar.wednesdaySchedule);
            return true;
        }),
    },
};
//# sourceMappingURL=resolvers.js.map