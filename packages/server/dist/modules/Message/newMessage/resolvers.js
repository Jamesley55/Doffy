"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const constant_1 = require("../pubSub/constant");
exports.newMessage = {
    Subscription: {
        newMessage: {
            subscribe: apollo_server_express_1.withFilter((_, __, { pubsub }) => pubsub.asyncIterator(constant_1.PUBSUB_NEW_MESSAGE), (payload, variables) => {
                console.log("recipient", variables.recipientId);
                return payload.newMessage.recipientId === variables.recipientId;
            }),
        },
    },
};
//# sourceMappingURL=resolvers.js.map