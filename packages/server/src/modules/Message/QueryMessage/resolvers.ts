import { Message } from "../../../entity/message";
import { IResolvers } from "apollo-server-express";

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
