import { IResolvers } from "apollo-server-express";
import { Message } from "../../entity/message";

export const findMessage: IResolvers = {
  Query: {
    messages: async (_, { bookingId }, { session }) => {
      await Message.find({
        where: {
          bookingId,
          userId: session.userId,
        },
      });
    },
  },
};
