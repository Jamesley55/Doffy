import { IResolvers } from "apollo-server-express";
import { Booking } from "../../../entity/booking";

export const QueryBooking: IResolvers = {
  Query: {
    QueryBooking: async (_, { serviceId, date }) => {
      const booking = await Booking.find({ where: { serviceId, date } });
      return booking;
    },
  },
};
