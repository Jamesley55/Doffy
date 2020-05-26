import { IResolvers } from "apollo-server-express";
import { Notification } from "../../../entity/notification";
import { Booking } from "../../../entity/booking";
import { User } from "../../../entity/User";
import { PUBSUB_NEW_NOTIFICATION } from "../../Notification/PubSub/constant";

export const UpdateBooking: IResolvers = {
  Mutation: {
    updateBooking: async (
      _,
      { NotificationId, response },
      { session, pubsub }
    ) => {
      const notif = await Notification.findOne({
        where: { id: NotificationId },
      });
      if (notif && response) notif.RequestAccepted = response;
      const bookingId = notif?.bookingId;
      const booking = await Booking.findOne({ where: { id: bookingId } });
      if (booking) {
        if (response) {
          booking.confirm = true;
          booking.status = true;
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
          console.log("true");

          pubsub.publish(PUBSUB_NEW_NOTIFICATION, {
            newNotification: databaseNotification,
          });
          notif?.save();
        } else {
          booking.confirm = false;
          booking.status = false;
          const userId = session.userId;
          const user = await User.findOne({ where: { id: userId } });
          const databaseNotification = await Notification.create({
            bookRequest: true,
            message: {
              Title: "booking request refused",
              Body: `${user?.username}  has refused your booking request on ${booking?.date} between ${booking?.startService} and ${booking?.endService}`,
            },
            recipientId: notif?.senderId,
            senderId: session.userId,
            bookingId: notif?.bookingId,
          }).save();
          console.log("false");
          pubsub.publish(PUBSUB_NEW_NOTIFICATION, {
            newNotification: databaseNotification,
          });
        }
      }
      booking?.save();
      return true;
    },
  },
};
