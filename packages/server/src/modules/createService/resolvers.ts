import { IResolvers } from "apollo-server-express";
import { ServiceInstance } from "../../entity/service";

export const createService: IResolvers = {
  Mutation: {
    createService: async (_, { input }, { req }) => {
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
      } = input;
      await ServiceInstance.create({
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
        ownerId: req.session.userId,
      }).save();

      return true;
    },
  },
};
