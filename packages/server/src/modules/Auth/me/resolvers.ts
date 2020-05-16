import { User } from "../../../entity/User";
import { IResolvers } from "apollo-server-express";
import { Service } from "../../../entity/service";

export const Me: IResolvers = {
  Query: {
    me: async (_, __, { session }) => {
      const user = await User.findOne({ where: { id: session.userId } });
      const userId = user?.id;
      let service;
      service =
        user?.userType === "serviceProvider"
          ? await Service.find({ where: { ownerId: userId } })
          : null;
      const userService = {
        user,
        service,
      };
      return userService;
    },
  },
};
