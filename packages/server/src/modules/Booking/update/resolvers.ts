import { IResolvers } from "apollo-server-express";
import { Notification } from "../../../entity/notification";
import { Booking } from "../../../entity/booking";
import { User } from "../../../entity/User";
import { PUBSUB_NEW_NOTIFICATION } from "../../Notification/PubSub/constant";
import IntervalTree from "node-interval-tree";
import { redis, jsonCache } from "../../../redis";

export const UpdateBooking: IResolvers = {
  Mutation: {
    updateBooking: async (
      _,
      { NotificationId, response },
      { session, pubsub }
    ) => {
      const intervalTree: any = new IntervalTree();
      const notif = await Notification.findOne({
        where: { id: NotificationId },
      });
      if (notif && response) notif.RequestAccepted = response;
      const bookingId = notif?.bookingId;
      const booking = await Booking.findOne({ where: { id: bookingId } });
      if (booking && response) {
        intervalTree.insert(
          booking.startService,
          booking.endService,
          booking.date
        );
        const date = booking?.date;
        const serviceId = booking.serviceId;
        await jsonCache.set(
          date + serviceId,
          intervalTree.toString(),
          "ex",
          60 * 60 * 24 * 365
        ); // 1 day expiration
        console.log("previer interval", intervalTree);
        const interval = await redis.get(date + serviceId);
        if (interval) console.log("second Interval", JSON.parse(interval));
        booking.confirm = true;
        const userId = session.userId;
        const user = await User.findOne({ where: { id: userId } });
        const databaseNotification = await Notification.create({
          bookRequest: true,
          message: {
            Title: "booking request accepted",
            Body: `${user?.username}  has accept your booking request on ${booking?.date} between ${booking?.startService} and ${booking?.endService}`,
          },
          recipientId: notif?.senderId,
          senderId: session.userId,
          bookingId: notif?.bookingId,
        }).save();

        pubsub.publish(PUBSUB_NEW_NOTIFICATION, {
          newNotification: databaseNotification,
        });
      }
      return true;
    },
  },
};
