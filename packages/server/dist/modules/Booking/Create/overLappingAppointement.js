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
const booking_1 = require("../../../entity/booking");
const typeorm_1 = require("typeorm");
function overLappingAppointements(start, endservice, averageTime, serviceId, date) {
    return __awaiter(this, void 0, void 0, function* () {
        const intervalUn = yield booking_1.Booking.findOne({
            where: { serviceId, date, startService: typeorm_1.Between(start, endservice) },
        });
        if (intervalUn) {
            let endService = intervalUn.startService - 5;
            let startService = endService - averageTime;
            const intervalDeux = yield booking_1.Booking.findOne({
                where: { serviceId, date, endService: typeorm_1.Between(startService, endService) },
            });
            if (!intervalDeux) {
                return {
                    start: startService,
                    end: endService,
                };
            }
            else {
                startService = intervalUn.endService + 5;
                endService = startService + averageTime;
                const interValTrois = yield booking_1.Booking.findOne({
                    where: {
                        serviceId,
                        date,
                        endService: typeorm_1.Between(startService, endService),
                    },
                });
                if (!interValTrois) {
                    return {
                        start: startService,
                        end: endService,
                    };
                }
            }
        }
        else {
            return { start, end: endservice };
        }
        return null;
    });
}
exports.overLappingAppointements = overLappingAppointements;
//# sourceMappingURL=overLappingAppointement.js.map