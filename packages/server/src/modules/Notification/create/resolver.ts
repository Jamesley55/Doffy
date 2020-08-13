import { IResolvers } from "apollo-server-express";
import { Notification } from "../../../entity/notification";
import { User } from "../../../entity/User";
import { sendNotification } from "../../../Sharefonction/sendNotif";
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
			const user = await User.findOne({
				where: { id: session.userId },
			});
			const massage = {
				app_id: "75ebe6f4-83ab-4d1e-b410-675fe0933122",
				contents: {
					en: databaseNotification.message.Body,
				},
				subtitle: {
					en: databaseNotification.message.Title,
				},
				include_player_ids: [user?.notificationPushToken],
			};
			sendNotification(massage);
			pubsub.publish(PUBSUB_NEW_NOTIFICATION, {
				newNotification: databaseNotification,
			});
			return true;
		},
	},
};
