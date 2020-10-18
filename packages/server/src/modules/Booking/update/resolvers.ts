import { IResolvers } from "apollo-server-express";
import { Booking } from "../../../entity/booking";
import { Notification } from "../../../entity/notification";
import { User } from "../../../entity/User";
import { tConv24 } from "../../../Sharefonction/Convert24h";
import { getHours } from "../../../Sharefonction/milisecondTohours";
import { sendNotification } from "../../../Sharefonction/sendNotif";
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
			if (notif) notif.bookRequest = false;
			notif?.save();
			if (notif && response) notif.RequestAccepted = response;
			const bookingId = notif?.bookingId;
			const booking = await Booking.findOne({ where: { id: bookingId } });

			if (booking) {
				const d = new Date(booking.date);

				if (response) {
					booking.confirm = true;
					booking.status = true;
					const userId = session.userId;
					const user = await User.findOne({ where: { id: userId } });
					const databaseNotification = await Notification.create({
						bookRequest: false,
						message: {
							Title: "booking request accepted",
							Body: `${
								user?.username
							}  has accept your booking request on ${d.toUTCString()} between ${tConv24(
								getHours(booking?.startService)
							)} and ${tConv24(getHours(booking?.endService))}`,
						},
						recipientId: notif?.senderId,
						senderId: session.userId,
						bookingId: notif?.bookingId,
					}).save();
					// Todo hardcoded app_id will change later
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

					notif?.save();
				} else {
					booking.confirm = false;
					booking.status = false;
					const userId = session.userId;
					const user = await User.findOne({ where: { id: userId } });

					const databaseNotification = await Notification.create({
						bookRequest: false,
						message: {
							Title: "booking request refused",
							Body: `${
								user?.username
							}  has refused your booking request on ${d.toUTCString()} between ${tConv24(
								getHours(booking?.startService)
							)} and ${tConv24(getHours(booking?.endService))}`,
						},
						recipientId: notif?.senderId,
						senderId: session.userId,
						bookingId: notif?.bookingId,
					}).save();
					// hardcoded app_id will change later
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
				}
			}
			booking?.save();

			return true;
		},
	},
};
