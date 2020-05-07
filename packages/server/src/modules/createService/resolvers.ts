import { IResolvers } from "apollo-server-express";
import { ServiceInstance } from "../../entity/service";

export const createService: IResolvers = {
  Mutation: {
    createService: async (_, { input }, { session }) => {
      await ServiceInstance.create({
        ...input,
        pictureUrl: "",
        userId: session.userId,
      });
    },
  },
};
