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
exports.Me = void 0;
const typeorm_1 = require("typeorm");
const message_1 = require("../../../entity/message");
const service_1 = require("../../../entity/service");
const User_1 = require("../../../entity/User");
const notification_1 = require("./../../../entity/notification");
exports.Me = {
    Query: {
        me: (_, __, { session, req }) => __awaiter(void 0, void 0, void 0, function* () {
            const user = yield User_1.User.findOne({ where: { id: session.userId } });
            const userId = user === null || user === void 0 ? void 0 : user.id;
            const notification = yield notification_1.Notification.find({
                where: { recipientId: userId },
            });
            const senderId = session.userId;
            const recipientId = senderId;
            let MessageQB = typeorm_1.getConnection()
                .getRepository(message_1.Message)
                .createQueryBuilder("m");
            MessageQB = MessageQB.andWhere("m.senderId = :senderId", {
                senderId,
            }).orWhere("m.recipientId = :recipientId", { recipientId });
            const messages = yield MessageQB.getMany();
            let service;
            service = yield service_1.Service.find({ where: { ownerId: userId } });
            const userService = {
                user: {
                    id: user === null || user === void 0 ? void 0 : user.id,
                    username: user === null || user === void 0 ? void 0 : user.username,
                    email: user === null || user === void 0 ? void 0 : user.email,
                    service,
                    notification,
                    messages,
                    sessionId: req.sessionID,
                    userType: user === null || user === void 0 ? void 0 : user.userType,
                },
                service,
                sessionId: req.sessionID,
            };
            return userService;
        }),
    },
};
//# sourceMappingURL=resolvers.js.map