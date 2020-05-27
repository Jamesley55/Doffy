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
const service_1 = require("../../../entity/service");
const calculateTaxes_1 = require("./calculateTaxes");
const day_1 = require("./day");
const notification_1 = require("../../../entity/notification");
const constant_1 = require("../../Notification/PubSub/constant");
const User_1 = require("../../../entity/User");
const overLappingAppointement_1 = require("./overLappingAppointement");
exports.createBooking = {
    Mutation: {
        createBooking: (_, { serviceId, date, startService }, { pubsub, session }) => __awaiter(void 0, void 0, void 0, function* () {
            const service = yield service_1.Service.findOne({ where: { id: serviceId } });
            const averageTime = service === null || service === void 0 ? void 0 : service.averageTime;
            const start = startService;
            const endservice = averageTime + start;
            const response = yield overLappingAppointement_1.overLappingAppointements(start, endservice, averageTime, serviceId, date);
            console.log("response", response);
            if (response === null) {
                return {
                    errors: {
                        path: "overLappingAppointements",
                        message: "theres no appointment available around the time you selected ",
                    },
                };
            }
            const isbetween = yield day_1.week(date, response.start, service);
            let total;
            let taxes;
            if ((service === null || service === void 0 ? void 0 : service.Taxes) === true) {
                total = calculateTaxes_1.calculateTaxes(service.coutryId, service.price);
                if (total)
                    taxes = total - service.price;
            }
            else {
                total = service === null || service === void 0 ? void 0 : service.price;
                taxes = 0;
            }
            let createbooking;
            if (isbetween) {
                createbooking = yield booking_1.Booking.create({
                    serviceId,
                    date,
                    startService: response.start,
                    endService: response.end,
                    price: service === null || service === void 0 ? void 0 : service.price,
                    taxes,
                    depositAmount: service === null || service === void 0 ? void 0 : service.depositAmount,
                    isRefund: service === null || service === void 0 ? void 0 : service.isRefund,
                }).save();
                console.log(createbooking);
                const senderId = session.userId;
                const sender = yield User_1.User.findOne({ where: { id: senderId } });
                const databaseNotification = yield notification_1.Notification.create({
                    bookRequest: true,
                    message: {
                        Title: "new booking request",
                        Body: `${sender === null || sender === void 0 ? void 0 : sender.username} wants to take an appointement with you `,
                    },
                    recipientId: service === null || service === void 0 ? void 0 : service.ownerId,
                    senderId: session.userId,
                    bookingId: createbooking === null || createbooking === void 0 ? void 0 : createbooking.id,
                }).save();
                pubsub.publish(constant_1.PUBSUB_NEW_NOTIFICATION, {
                    newNotification: databaseNotification,
                });
                console.log("notifiID", databaseNotification.id);
                return {
                    booking: {
                        startService: createbooking.startService,
                        endService: createbooking.endService,
                        price: createbooking.price,
                        taxes: createbooking.taxes,
                        depositAmount: createbooking.depositAmount,
                        isRefund: createbooking.isRefund,
                        transactionFee: createbooking.transaction,
                        Total: createbooking.price + createbooking.taxes,
                    },
                };
            }
            else {
                return {
                    errors: {
                        path: "no availability",
                        message: "theres no appointment available around the time you selected ",
                    },
                };
            }
        }),
    },
};
//# sourceMappingURL=resolvers.js.map