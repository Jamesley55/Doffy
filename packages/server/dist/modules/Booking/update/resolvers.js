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
exports.UpdateBooking = void 0;
const booking_1 = require("../../../entity/booking");
const notification_1 = require("../../../entity/notification");
const User_1 = require("../../../entity/User");
const Convert24h_1 = require("../../../Sharefonction/Convert24h");
const milisecondTohours_1 = require("../../../Sharefonction/milisecondTohours");
const constant_1 = require("../../Notification/PubSub/constant");
exports.UpdateBooking = {
    Mutation: {
        updateBooking: (_, { NotificationId, response }, { session, pubsub }) => __awaiter(void 0, void 0, void 0, function* () {
            const notif = yield notification_1.Notification.findOne({
                where: { id: NotificationId },
            });
            if (notif)
                notif.bookRequest = false;
            notif === null || notif === void 0 ? void 0 : notif.save();
            if (notif && response)
                notif.RequestAccepted = response;
            const bookingId = notif === null || notif === void 0 ? void 0 : notif.bookingId;
            const booking = yield booking_1.Booking.findOne({ where: { id: bookingId } });
            if (booking) {
                const d = new Date(booking.date);
                if (response) {
                    booking.confirm = true;
                    booking.status = true;
                    const userId = session.userId;
                    const user = yield User_1.User.findOne({ where: { id: userId } });
                    const databaseNotification = yield notification_1.Notification.create({
                        bookRequest: false,
                        message: {
                            Title: "booking request accepted",
                            Body: `${user === null || user === void 0 ? void 0 : user.username}  has accept your booking request on ${d.toUTCString()} between ${Convert24h_1.tConv24(milisecondTohours_1.getHours(booking === null || booking === void 0 ? void 0 : booking.startService))} and ${Convert24h_1.tConv24(milisecondTohours_1.getHours(booking === null || booking === void 0 ? void 0 : booking.endService))}`,
                        },
                        recipientId: notif === null || notif === void 0 ? void 0 : notif.senderId,
                        senderId: session.userId,
                        bookingId: notif === null || notif === void 0 ? void 0 : notif.bookingId,
                    }).save();
                    console.log("true");
                    pubsub.publish(constant_1.PUBSUB_NEW_NOTIFICATION, {
                        newNotification: databaseNotification,
                    });
                    notif === null || notif === void 0 ? void 0 : notif.save();
                }
                else {
                    booking.confirm = false;
                    booking.status = false;
                    const userId = session.userId;
                    const user = yield User_1.User.findOne({ where: { id: userId } });
                    const databaseNotification = yield notification_1.Notification.create({
                        bookRequest: false,
                        message: {
                            Title: "booking request refused",
                            Body: `${user === null || user === void 0 ? void 0 : user.username}  has refused your booking request on ${d.toUTCString()} between ${Convert24h_1.tConv24(milisecondTohours_1.getHours(booking === null || booking === void 0 ? void 0 : booking.startService))} and ${Convert24h_1.tConv24(milisecondTohours_1.getHours(booking === null || booking === void 0 ? void 0 : booking.endService))}`,
                        },
                        recipientId: notif === null || notif === void 0 ? void 0 : notif.senderId,
                        senderId: session.userId,
                        bookingId: notif === null || notif === void 0 ? void 0 : notif.bookingId,
                    }).save();
                    console.log("false");
                    pubsub.publish(constant_1.PUBSUB_NEW_NOTIFICATION, {
                        newNotification: databaseNotification,
                    });
                }
            }
            booking === null || booking === void 0 ? void 0 : booking.save();
            return true;
        }),
    },
};
//# sourceMappingURL=resolvers.js.map