import { IResolvers } from "apollo-server-express";
import { Schedule } from "./schedule";

export const findServiceCalendar: IResolvers = {
  Query: {
    findServiceCalendar: async (_, { ServiceId }: any) => {
      return Schedule(ServiceId);
    },
  },
};
