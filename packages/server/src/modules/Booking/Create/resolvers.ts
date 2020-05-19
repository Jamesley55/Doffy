import { IResolvers } from "apollo-server-express";
import { Booking } from "../../../entity/booking";
import { Service } from "../../../entity/service";
import { isBetween } from "./isbetween";
import { calculateTaxes } from "./calculateTaxes";

export const createBooking: IResolvers = {
  Mutation: {
    createBooking: async (_, { serviceId, date, startService }) => {
      const service = await Service.findOne({ where: serviceId });
      const averageTime = service?.averageTime;
      const start = startService;
      const endservice = averageTime + start;
      for (startService; startService < endservice; startService++) {
        const endService = averageTime + startService;
        const booking = await Booking.findOne({
          where: { date, serviceId, startService, endService },
        });
        if (booking?.status) {
          return null;
        }
      }
      const isbetween = isBetween(
        startService,
        service?.calendar.mondaySchedule.startingTime,
        service?.calendar.mondaySchedule.EndTime
      );
      let taxes;
      // tslint:disable-next-line: prefer-conditional-expression
      if (service?.Taxes === true) {
        taxes = calculateTaxes(service.coutryId, service.price);
      } else {
        taxes = 0;
      }
      let createbooking;
      if (isbetween) {
        createbooking = await Booking.create({
          serviceId,
          date,
          startService,
          endService: endservice,
          price: service?.price,
          taxes,
          depositAmount: service?.depositAmount,
          isRefund: service?.isRefund,
        }).save();
      }
      return createbooking;
    },
  },
};
