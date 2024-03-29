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
exports.findNotification = void 0;
const typeorm_1 = require("typeorm");
const notification_1 = require("../../../entity/notification");
exports.findNotification = {
    Query: {
        notification: (_, {}, { session }) => __awaiter(void 0, void 0, void 0, function* () {
            const senderId = session.userId;
            const recipientId = senderId;
            console.log("sessionID", recipientId);
            let MessageQB = typeorm_1.getConnection()
                .getRepository(notification_1.Notification)
                .createQueryBuilder("n");
            MessageQB = MessageQB.andWhere("n.recipientId = :recipientId", {
                recipientId,
            }).addOrderBy("n.createdDate", "DESC");
            const response = yield MessageQB.getMany();
            console.log(response);
            return response;
        }),
    },
};
//# sourceMappingURL=resolvers.js.map