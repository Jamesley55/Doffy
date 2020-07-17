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
exports.createMessage = void 0;
const message_1 = require("../../../entity/message");
const constant_1 = require("../pubSub/constant");
exports.createMessage = {
    Mutation: {
        createMessage: (_, { message }, { pubsub, session }) => __awaiter(void 0, void 0, void 0, function* () {
            const { content, recipientId } = message;
            const databaseMessage = yield message_1.Message.create({
                content,
                recipientId,
                senderId: session.userId,
            }).save();
            pubsub.publish(constant_1.PUBSUB_NEW_MESSAGE, {
                newMessage: databaseMessage,
            });
            return true;
        }),
    },
};
//# sourceMappingURL=resolver.js.map