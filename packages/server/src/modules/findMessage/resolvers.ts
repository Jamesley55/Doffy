import { IResolvers } from "apollo-server-express";
import { Message } from "../../entity/message";

export const findMessage: IResolvers = {
  Query: {
    messages: async (_, { serviceId }) => {
      const response = await Message.find({
        where: {
          serviceId,
        },
      });
      return response;
    },
  },
};
