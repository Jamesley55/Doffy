import { IResolvers } from "apollo-server-express";
import { User } from "../../../entity/User";
import { redis } from "../../../redis";
import { forgetPasswordPrefix } from "../../../Utils/constant/redisPrefix";
import { MutationForgotPasswordArgs } from "../../../types/graphql-hooks";
import { generate } from "./generate";
import { sendPasswordEmail } from "../SendPasswordEmail/sendPasswordMail";

// Iresolver is there to add types to the
// ts project

export const forgotPassword: IResolvers = {
  Mutation: {
    forgotPassword: async (_, { email }: MutationForgotPasswordArgs) => {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return false;
      }
      const token = generate(9);
      console.log(token);
      await redis.set(
        forgetPasswordPrefix + token,
        user.id,
        "ex",
        60 * 60 * 24
      );
      await sendPasswordEmail(email, token);
      return true;
    },
  },
};
