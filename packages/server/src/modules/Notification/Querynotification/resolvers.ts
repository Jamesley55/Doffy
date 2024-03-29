import { IResolvers } from "apollo-server-express";
import { getConnection } from "typeorm";
import { Notification } from "../../../entity/notification";

export const findNotification: IResolvers = {
	Query: {
		notification: async (_, {}, { session }) => {
			const senderId = session.userId;
			const recipientId = senderId;
			console.log("sessionID", recipientId);
			let MessageQB = getConnection()
				.getRepository(Notification)
				.createQueryBuilder("n");

			MessageQB = MessageQB.andWhere("n.recipientId = :recipientId", {
				recipientId,
			}).addOrderBy("n.createdDate", "DESC");
			const response = await MessageQB.getMany();
			console.log(response);
			return response;
		},
	},
};
