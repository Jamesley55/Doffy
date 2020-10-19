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
exports.createBooking = void 0;
const booking_1 = require("../../../entity/booking");
const notification_1 = require("../../../entity/notification");
const service_1 = require("../../../entity/service");
const User_1 = require("../../../entity/User");
const Convert24h_1 = require("../../../Sharefonction/Convert24h");
const milisecondTohours_1 = require("../../../Sharefonction/milisecondTohours");
const sendNotif_1 = require("../../../Sharefonction/sendNotif");
const constant_1 = require("../../Notification/PubSub/constant");
const calculateTaxes_1 = require("./calculateTaxes");
exports.createBooking = {
    Mutation: {
        createBooking: (_, { serviceId, date, startService }, { pubsub, session }) => __awaiter(void 0, void 0, void 0, function* () {
            const service = yield service_1.Service.findOne({ where: { id: serviceId } });
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
            const booking = yield booking_1.Booking.findOne({
                where: {
                    serviceId,
                    date,
                    startService,
                    endService: startService + (service === null || service === void 0 ? void 0 : service.averageTime),
                },
            });
            if (!booking) {
                let Total;
                if (service && taxes)
                    Total = service.price + taxes;
                createbooking = yield booking_1.Booking.create({
                    serviceId,
                    date,
                    startService,
                    endService: startService + (service === null || service === void 0 ? void 0 : service.averageTime),
                    price: service === null || service === void 0 ? void 0 : service.price,
                    taxes,
                    depositAmount: service === null || service === void 0 ? void 0 : service.depositAmount,
                    isRefund: service === null || service === void 0 ? void 0 : service.isRefund,
                    Total,
                }).save();
                let d = new Date(date);
                const senderId = session.userId;
                const sender = yield User_1.User.findOne({ where: { id: senderId } });
                const databaseNotification = yield notification_1.Notification.create({
                    bookRequest: true,
                    message: {
                        Title: "new booking request",
                        Body: `${sender === null || sender === void 0 ? void 0 : sender.username} wants to take an appointement with you on ${d.toUTCString()} between ${Convert24h_1.tConv24(milisecondTohours_1.getHours(startService))} and ${Convert24h_1.tConv24(milisecondTohours_1.getHours(startService + (service === null || service === void 0 ? void 0 : service.averageTime)))} `,
                    },
                    recipientId: service === null || service === void 0 ? void 0 : service.ownerId,
                    senderId: session.userId,
                    bookingId: createbooking === null || createbooking === void 0 ? void 0 : createbooking.id,
                }).save();
                const user = yield User_1.User.findOne({
                    where: { id: session.userId },
                });
                const massage = {
                    app_id: "75ebe6f4-83ab-4d1e-b410-675fe0933122",
                    contents: {
                        en: databaseNotification.message.Body,
                    },
                    subtitle: {
                        en: databaseNotification.message.Title,
                    },
                    include_player_ids: [user === null || user === void 0 ? void 0 : user.notificationPushToken],
                };
                sendNotif_1.sendNotification(massage);
                pubsub.publish(constant_1.PUBSUB_NEW_NOTIFICATION, {
                    newNotification: databaseNotification,
                });
                return {
                    booking: {
                        startService: createbooking.startService,
                        endService: createbooking.endService,
                        price: createbooking.price,
                        taxes: createbooking.taxes,
                        depositAmount: createbooking.depositAmount,
                        isRefund: createbooking.isRefund,
                        transactionFee: createbooking.transaction,
                        Total,
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