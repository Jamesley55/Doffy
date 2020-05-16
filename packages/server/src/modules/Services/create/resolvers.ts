import { IResolvers } from "apollo-server-express";
import { Service } from "../../../entity/service";
import { createTime } from "../../Time/schedule/createscheduleTimes";
import { User } from "../../../entity/User";

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
      const userType = "serviceProvider";
      await User.update({ id: ownerId }, { userType });
      console.log("calendar", calendar.wednesdaySchedule);
      return true;
    },
  },
};
