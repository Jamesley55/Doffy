import { IResolvers } from "apollo-server-express";
import { Service } from "../../../entity/service";
import { createTime } from "../../Time/schedule/scheduleTimes";

export const createService: IResolvers = {
  Mutation: {
    createService: async (
      _,
      { inputService, ScheduleBool, ScheduleTime },
      { session }
    ) => {
      const {
        name,
        category,
        description,
        coutryId,
        stateId,
        cityId,
        Taxes,
        Adress,
        price,
        payoutSchedule,
        customerBillingStatement,
        latitude,
        longitude,
      } = inputService;

      const ownerId = session.userId;

      const calendar = await createTime(ScheduleBool, ScheduleTime);

      await Service.create({
        name,
        category,
        description,
        coutryId,
        stateId,
        cityId,
        Taxes,
        Adress,
        price,
        payoutSchedule,
        customerBillingStatement,
        latitude,
        longitude,
        ownerId,
        calendar,
      }).save();
      console.log("calendar", calendar.wednesdaySchedule);
      return true;
    },
  },
};
