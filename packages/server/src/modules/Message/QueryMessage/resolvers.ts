import { Message } from "../../../entity/message";
import { IResolvers } from "apollo-server-express";
import { getConnection } from "typeorm";

export const findMessage: IResolvers = {
  Query: {
    messages: async (_, {}, { session }) => {
      const senderId = session.userId;
      const recipientId = senderId;
      console.log("sessionID", recipientId);
      let MessageQB = getConnection()
        .getRepository(Message)
        .createQueryBuilder("m");

      MessageQB = MessageQB.andWhere("m.senderId = :senderId", {
        senderId,
      }).orWhere("m.recipientId = :recipientId", { recipientId });
      const response = await MessageQB.getMany();
      console.log(response);
      return response;
    },
  },
};
