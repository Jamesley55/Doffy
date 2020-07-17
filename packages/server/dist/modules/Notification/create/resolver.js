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
exports.createNotification = void 0;
const constant_1 = require("../PubSub/constant");
const notification_1 = require("../../../entity/notification");
exports.createNotification = {
    Mutation: {
        createNotification: (_, { input }, { pubsub, session }) => __awaiter(void 0, void 0, void 0, function* () {
            const { bookRequest, recipientId, message } = input;
            const { Title, Body } = message;
            const databaseNotification = yield notification_1.Notification.create({
                bookRequest,
                message: {
                    Title,
                    Body,
                },
                recipientId,
                senderId: session.userId,
            }).save();
            console.log(databaseNotification.createdDate);
            pubsub.publish(constant_1.PUBSUB_NEW_NOTIFICATION, {
                newNotification: databaseNotification,
            });
            return true;
        }),
    },
};
//# sourceMappingURL=resolver.js.map