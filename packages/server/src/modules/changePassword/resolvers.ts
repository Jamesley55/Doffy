import { forgetPasswordPrefix } from "./../../Utils/constant/redisPrefix";
import { IResolvers } from "apollo-server-express";
import { User } from "../../entity/User";
import { redis } from "../../redis";
import { MutationChangePasswordArgs } from "../../types/graphql-hooks";
import * as bcrypt from "bcryptjs";
import { forgotPassword } from "../forgotPassword/resolvers";

// Iresolver is there to add types to the
// ts project
export const changePassword: IResolvers = {
  Mutation: {
    changePassword: async (
      _,
      { token, password }: MutationChangePasswordArgs
    ) => {
      const userId = await redis.get(forgetPasswordPrefix + token);

      if (!userId) {
        return null;
      }
      const user = await User.findOne(userId);
      if (!user) {
        return null;
      }
      user.password = await bcrypt.hash(password, 10);
      await redis.del(forgotPassword + token);
      user.save();

      return user;
    },
  },
};
