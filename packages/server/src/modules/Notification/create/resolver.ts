import { IResolvers } from "apollo-server-express";
import { Notification } from "../../../entity/notification";
import { User } from "../../../entity/User";
import { PUBSUB_NEW_NOTIFICATION } from "../PubSub/constant";

export const createNotification: IResolvers = {
	Mutation: {
		setNotificationPushToken: async (_, { pushToken }, { session }) => {
			const user = await User.findOne({
				where: { id: session.userId },
			});
			if (user) {
				user.notificationPushToken = pushToken;
				user.save();
				return true;
			}
			console.log(user);
			return false;
		},
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
			const user = await User.findOne({ where: { id: recipientId } });
			console.log("user", user);
			console.log(databaseNotification.createdDate);
			pubsub.publish(PUBSUB_NEW_NOTIFICATION, {
				newNotification: databaseNotification,
			});
			return true;
		},
	},
};
