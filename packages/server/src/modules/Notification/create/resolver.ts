import { IResolvers } from "apollo-server-express";
import { PUBSUB_NEW_NOTIFICATION } from "../PubSub/constant";
import { Notification } from "../../../entity/notification";

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

      pubsub.publish(PUBSUB_NEW_NOTIFICATION, {
        newNotifcation: databaseNotification,
      });
      return true;
    },
  },
};
