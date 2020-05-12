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
      const calendar = await Calendar.findOne({ where: { CalendarId } });
      const schedules = [];
      schedules.push(
        calendar?.mondayScheduleUuid,
        calendar?.tuesdayScheduleUuid,
        calendar?.wednesdayScheduleUuid,
        calendar?.thurdayScheduleUuid,
        calendar?.fridayScheduleUuid,
        calendar?.saturdayScheduleUuid,
        calendar?.sundayScheduleUuid
      );

      Calendar.delete({ CalendarId });

      schedules.forEach(async (element) => {
        await ScheduleTime.delete({ scheduleTimeId: element });
        const nullv = ScheduleTime.findOne({
          where: { scheduleTimeId: element },
        });
        console.log("nullv", nullv);
      });

      return true;
    },
  },
};
