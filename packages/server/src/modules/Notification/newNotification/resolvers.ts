import { IResolvers, withFilter } from "apollo-server-express";
import { User } from "../../../entity/User";
import { sendNotification } from "../../../Sharefonction/sendNotif";
import { PUBSUB_NEW_NOTIFICATION } from "../PubSub/constant";

export const newNotification: IResolvers = {
	Subscription: {
		newNotification: {
			subscribe: withFilter(
				(_, __, { pubsub }) => pubsub.asyncIterator(PUBSUB_NEW_NOTIFICATION),
				async (payload, variables) => {
					console.log("recipient", variables.recipientId);
					const userToken = await User.findOne({
						where: { id: variables.recipientId },
					});
					const massage = {
						app_id: "75ebe6f4-83ab-4d1e-b410-675fe0933122",
						contents: { en: variables.message.Body },
						include_player_ids: [userToken?.notificationPushToken],
					};
					sendNotification(massage);

					return payload.newNotification.recipientId === variables.recipientId;
				}
			),
		},
	},
};
