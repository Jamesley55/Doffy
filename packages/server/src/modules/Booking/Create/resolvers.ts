import { IResolvers } from "apollo-server-express";
import { Booking } from "../../../entity/booking";
import { Service } from "../../../entity/service";
import { calculateTaxes } from "./calculateTaxes";
import { week } from "./day";
import { Notification } from "../../../entity/notification";
import { PUBSUB_NEW_NOTIFICATION } from "../../Notification/PubSub/constant";
import { User } from "../../../entity/User";

export const createBooking: IResolvers = {
  Mutation: {
    // date need to be in the format of ("2015-03-26");
    createBooking: async (
      _,
      { serviceId, date, startService },
      { pubsub, session, redis }
    ) => {
      const service = await Service.findOne({ where: { id: serviceId } });
      const averageTime = service?.averageTime;
      const start = startService;
      const endservice = averageTime + start;
      // TODO #1 algorithm to optimize booking time
      const interval = await redis.get(date + service?.id);
      console.log(interval);
      const isbetween = await week(date, start, service);
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
      if (isbetween) {
        createbooking = await Booking.create({
          serviceId,
          date,
          startService: start,
          endService: endservice,
          price: service?.price,
          taxes,
          depositAmount: service?.depositAmount,
          isRefund: service?.isRefund,
        }).save();
        console.log(createbooking);
        const senderId = session.userId;
        const sender = await User.findOne({ where: { id: senderId } });
        const databaseNotification = await Notification.create({
          bookRequest: true,
          message: {
            Title: "new booking request",
            Body: `${sender?.username} wants to take an appointement with you `,
          },
          recipientId: service?.ownerId,
          senderId: session.userId,
          bookingId: createbooking?.id,
        }).save();

        pubsub.publish(PUBSUB_NEW_NOTIFICATION, {
          newNotification: databaseNotification,
        });
        console.log("notifiID", databaseNotification.id);
        return createbooking;
      } else {
        return null;
      }
    },
  },
};
