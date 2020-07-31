import { IResolvers } from "apollo-server-express";
import { Booking } from "../../../entity/booking";
import { Notification } from "../../../entity/notification";
import { Service } from "../../../entity/service";
import { User } from "../../../entity/User";
import { tConv24 } from "../../../Sharefonction/Convert24h";
import { getHours } from "../../../Sharefonction/milisecondTohours";
import { PUBSUB_NEW_NOTIFICATION } from "../../Notification/PubSub/constant";
import { calculateTaxes } from "./calculateTaxes";

export const createBooking: IResolvers = {
	Mutation: {
		// date need to be in the format of ("2015-03-26");
		createBooking: async (
			_,
			{ serviceId, date, startService },
			{ pubsub, session }
		) => {
			const service = await Service.findOne({ where: { id: serviceId } });

			let total;
			let taxes;
			// tslint:disable-next-line: prefer-conditional-expression
			if (service?.Taxes === true) {
				total = calculateTaxes(service.coutryId, service.price);
				if (total) taxes = total - service.price;
			} else {
				total = service?.price;
				taxes = 0;
			}
			let createbooking;
			const booking = await Booking.findOne({
				where: {
					serviceId,
					date,
					startService,
					endService: startService + service?.averageTime,
				},
			});
			console.log("booking", booking);
			if (!booking) {
				let Total;
				if (service && taxes) Total = service.price + taxes;

				createbooking = await Booking.create({
					serviceId,
					date,
					startService,
					endService: startService + service?.averageTime,
					price: service?.price,
					taxes,
					depositAmount: service?.depositAmount,
					isRefund: service?.isRefund,
					Total,
				}).save();
				let d = new Date(date);

				const senderId = session.userId;
				const sender = await User.findOne({ where: { id: senderId } });
				const databaseNotification = await Notification.create({
					bookRequest: true,
					message: {
						Title: "new booking request",
						Body: `${
							sender?.username
						} wants to take an appointement with you on ${d.toDateString()} between ${tConv24(
							getHours(startService)
						)} and ${tConv24(getHours(startService + service?.averageTime))} `,
					},
					recipientId: service?.ownerId,
					senderId: session.userId,
					bookingId: createbooking?.id,
				}).save();

				pubsub.publish(PUBSUB_NEW_NOTIFICATION, {
					newNotification: databaseNotification,
				});

				console.log("booking", createbooking.price + createbooking.taxes);
				return {
					booking: {
						startService: createbooking.startService,
						endService: createbooking.endService,
						price: createbooking.price,
						taxes: createbooking.taxes,
						depositAmount: createbooking.depositAmount,
						isRefund: createbooking.isRefund,
						transactionFee: createbooking.transaction,
						Total,
					},
				};
			} else {
				return {
					errors: {
						path: "no availability",
						message:
							"theres no appointment available around the time you selected ",
					},
				};
			}
		},
	},
};
