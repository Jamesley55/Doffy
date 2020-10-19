import { IResolvers, withFilter } from "apollo-server-express";
import { PUBSUB_NEW_NOTIFICATION } from "../PubSub/constant";
export const newNotification: IResolvers = {
	Subscription: {
		newNotification: {
			subscribe: withFilter(
				(_, __, { pubsub }) => pubsub.asyncIterator(PUBSUB_NEW_NOTIFICATION),
				(payload, variables) => {
					return payload.newNotification.recipientId === variables.recipientId;
				}
			),
		},
	},
};
