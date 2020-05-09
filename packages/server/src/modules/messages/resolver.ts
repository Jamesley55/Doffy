import { IResolvers } from "apollo-server-express";
import { Message } from "../../entity/message";
import { PUBSUB_NEW_MESSAGE } from "./shared/constant";

export const createMessage: IResolvers = {
  Mutation: {
    createMessage: async (_, { message }, { pubsub }) => {
      const { content, serviceId } = message;
      const databaseMessage = await Message.create({
        content,
        serviceId,
      }).save();

      pubsub.publish(PUBSUB_NEW_MESSAGE, {
        newMessage: databaseMessage,
      });
      return true;
    },
  },
};
