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
exports.QueryBooking = void 0;
const booking_1 = require("../../../entity/booking");
exports.QueryBooking = {
    Query: {
        QueryBooking: (_, { serviceId, date }) => __awaiter(void 0, void 0, void 0, function* () {
            const booking = yield booking_1.Booking.find({ where: { serviceId, date } });
            return booking;
        }),
    },
};
//# sourceMappingURL=resolvers.js.map