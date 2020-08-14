"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newNotification = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const constant_1 = require("../PubSub/constant");
exports.newNotification = {
    Subscription: {
        newNotification: {
            subscribe: apollo_server_express_1.withFilter((_, __, { pubsub }) => pubsub.asyncIterator(constant_1.PUBSUB_NEW_NOTIFICATION), (payload, variables) => {
                return payload.newNotification.recipientId === variables.recipientId;
            }),
        },
    },
};
//# sourceMappingURL=resolvers.js.map