import { IResolvers } from "apollo-server-express";
import { Service } from "../../../entity/service";
import { Calendar } from "../../../entity/calendar";
import { ScheduleTime } from "../../../entity/times";

export const DeleteService: IResolvers = {
  Mutation: {
    DeleteService: async (_, { ServiceId }: any) => {
      const service = await Service.findOne({ where: { id: ServiceId } });
      const CalendarId = service?.calendarId;
      Service.delete({ id: ServiceId });
      Calendar.delete({ CalendarId });
      ScheduleTime.delete({ CalendarId });

      return true;
    },
  },
};
