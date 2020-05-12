import { IResolvers } from "apollo-server-express";
import { Service } from "../../../entity/service";
import { updateTime } from "../../Time/schedule/updateScheduleTimes";

export const UpdateService: IResolvers = {
  Mutation: {
    updateService: async (
      _,
      { serviceId, inputService, ScheduleBool, ScheduleTime },
      { session }
    ) => {
      const {
        name,
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
      if (ownerId) {
        const service = await Service.findOne({ where: { id: serviceId } });
        const calendarId = service?.calendarId;
        await updateTime(calendarId, ScheduleBool, ScheduleTime);
        if (service) {
          if (name) service.name = name;

          if (description) service.description = description;

          if (coutryId) service.coutryId = coutryId;

          if (stateId) service.stateId = stateId;

          if (cityId) service.cityId = cityId;

          if (Taxes) service.Taxes = Taxes;

          if (Adress) service.Adress = Adress;

          if (price) service.price = price;

          if (payoutSchedule) service.payoutSchedule = payoutSchedule;

          if (customerBillingStatement)
            service.customerBillingStatement = customerBillingStatement;
          if (latitude && longitude) {
            service.latitude = latitude;
            service.longitude = longitude;
          }
          await service.save();
        }
      }

      return true;
    },
  },
};
