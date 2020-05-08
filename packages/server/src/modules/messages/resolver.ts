import { IResolvers } from "apollo-server-express";
import { Message } from "../../entity/message";

export const createMessage: IResolvers = {
  Mutation: {
    createMessage: async (_, { message }) => {
      const { content, serviceId } = message;
      await Message.create({
        content,
        serviceId,
      }).save();
      return true;
    },
  },
};
