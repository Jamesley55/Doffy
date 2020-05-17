import { IResolvers } from "apollo-server-express";
import { Message } from "../../../entity/message";
import { PUBSUB_NEW_MESSAGE } from "../pubSub/constant";

export const createMessage: IResolvers = {
  Mutation: {
    createMessage: async (_, { message }, { pubsub, session }) => {
      const { content, recipientId } = message;
      const databaseMessage = await Message.create({
        content,
        recipientId,
        senderId: session.userId,
      }).save();

      pubsub.publish(PUBSUB_NEW_MESSAGE, {
        newMessage: databaseMessage,
      });
      return true;
    },
  },
};
