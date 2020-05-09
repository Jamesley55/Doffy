import { User } from "../../../entity/User";
import { IResolvers } from "apollo-server-express";

export const Me: IResolvers = {
  Query: {
    me: (_, __, { session }) => {
      return User.findOne({ where: { id: session.userId } });
    },
  },
};
