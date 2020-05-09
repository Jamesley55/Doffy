import { IResolvers, withFilter } from "apollo-server-express";
import { PUBSUB_NEW_MESSAGE } from "../pubSub/constant";

export const newMessage: IResolvers = {
  Subscription: {
    newMessage: {
      subscribe: withFilter(
        (_, __, { pubsub }) => pubsub.asyncIterator(PUBSUB_NEW_MESSAGE),
        (payload, variables) => {
          return payload.newMessage.serviceId === variables.serviceId;
        }
      ),
    },
  },
};
