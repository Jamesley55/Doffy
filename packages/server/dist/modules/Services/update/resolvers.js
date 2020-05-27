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
const updateScheduleTimes_1 = require("../../Time/schedule/updateScheduleTimes");
exports.UpdateService = {
    Mutation: {
        updateService: (_, { serviceId, inputService, ScheduleBool, ScheduleTime }, { session }) => __awaiter(void 0, void 0, void 0, function* () {
            const { name, description, coutryId, stateId, cityId, Taxes, Adress, price, payoutSchedule, customerBillingStatement, latitude, longitude, } = inputService || {};
            const ownerId = session.userId;
            console.log("ownerId", ownerId);
            if (ownerId) {
                const service = yield service_1.Service.findOne({ where: { id: serviceId } });
                const calendarId = service === null || service === void 0 ? void 0 : service.calendarId;
                yield updateScheduleTimes_1.updateTime(calendarId, ScheduleBool, ScheduleTime);
                if (service) {
                    if (name)
                        service.name = name;
                    if (description)
                        service.description = description;
                    if (coutryId)
                        service.coutryId = coutryId;
                    if (stateId)
                        service.stateId = stateId;
                    if (cityId)
                        service.cityId = cityId;
                    if (Taxes)
                        service.Taxes = Taxes;
                    if (Adress)
                        service.Adress = Adress;
                    if (price)
                        service.price = price;
                    if (payoutSchedule)
                        service.payoutSchedule = payoutSchedule;
                    if (customerBillingStatement)
                        service.customerBillingStatement = customerBillingStatement;
                    if (latitude && longitude) {
                        service.latitude = latitude;
                        service.longitude = longitude;
                    }
                    yield service.save();
                }
            }
            return true;
        }),
    },
};
//# sourceMappingURL=resolvers.js.map