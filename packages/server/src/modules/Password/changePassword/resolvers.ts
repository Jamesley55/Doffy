import { User } from "./../../../entity/User";
import { IResolvers } from "apollo-server-express";
import * as bcrypt from "bcryptjs";
import { redis } from "../../../redis";
import { MutationChangePasswordArgs } from "../../../types/graphql-hooks";
import { forgetPasswordPrefix } from "../../../Utils/constant/redisPrefix";

// Iresolver is there to add types to the
// ts project
export const changePassword: IResolvers = {
  Mutation: {
    changePassword: async (
      _,
      { token, password }: MutationChangePasswordArgs,
      { req }
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
      await redis.del(forgetPasswordPrefix + token);
      user.save();

      return {
        id: user.id,
        username: user.username,
        email: user.email,
        sessionId: req.sessionID,
      };
    },
  },
};
