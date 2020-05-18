import { IResolvers, withFilter } from "apollo-server-express";
import { PUBSUB_NEW_NOTIFICATION } from "../PubSub/constant";

export const newNotification: IResolvers = {
  Subscription: {
    newNotification: {
      subscribe: withFilter(
        (_, __, { pubsub }) => pubsub.asyncIterator(PUBSUB_NEW_NOTIFICATION),
        (payload, variables) => {
          console.log("recipient", variables.recipientId);
          return payload.newNotification.recipientId === variables.recipientId;
        }
      ),
    },
  },
};
