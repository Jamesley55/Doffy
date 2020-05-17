import { IResolvers } from "apollo-server-express";
import { Service } from "../../../entity/service";

export const findUrl: IResolvers = {
  Mutation: {
    findUrl: async (_, { serviceId }) => {
      const service = await Service.findOne({ where: { id: serviceId } });
      return service?.pictureUrl;
    },
  },
};
