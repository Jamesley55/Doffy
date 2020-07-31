import { IResolvers } from "apollo-server-express";
import { getConnection } from "typeorm";
import { Message } from "../../../entity/message";
import { Service } from "../../../entity/service";
import { User } from "../../../entity/User";
import { Notification } from "./../../../entity/notification";

export const Me: IResolvers = {
	Query: {
		me: async (_, __, { session, req }) => {
			console.log("session req", req);
			const user = await User.findOne({ where: { id: session.userId } });
			console.log("user", user);
			const userId = user?.id;
			const notification = await Notification.find({
				where: { recipientId: userId },
			});
			const senderId = session.userId;
			const recipientId = senderId;
			let MessageQB = getConnection()
				.getRepository(Message)
				.createQueryBuilder("m");

			MessageQB = MessageQB.andWhere("m.senderId = :senderId", {
				senderId,
			}).orWhere("m.recipientId = :recipientId", { recipientId });
			const messages = await MessageQB.getMany();

			let service;
			service = await Service.find({ where: { ownerId: userId } });

			const userService = {
				user: {
					id: user?.id,
					username: user?.username,
					email: user?.email,
					service,
					notification,
					messages,
					sessionId: req.sessionID,
					userType: user?.userType,
				},
				service,
				sessionId: req.sessionID,
			};
			return userService;
		},
	},
};
