import { IResolvers } from "apollo-server-express";
import { Notification } from "../../../entity/notification";
import { PUBSUB_NEW_NOTIFICATION } from "../PubSub/constant";

export const createNotification: IResolvers = {
	Mutation: {
		createNotification: async (_, { input }, { pubsub, session }) => {
			const { bookRequest, recipientId, message } = input;
			const { Title, Body } = message;
			const databaseNotification = await Notification.create({
				bookRequest,
				message: {
					Title,
					Body,
				},
				recipientId,
				senderId: session.userId,
			}).save();

			console.log(databaseNotification.createdDate);
			pubsub.publish(PUBSUB_NEW_NOTIFICATION, {
				newNotification: databaseNotification,
			});
			return true;
		},
	},
};
