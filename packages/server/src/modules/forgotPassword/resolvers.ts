import { IResolvers } from "apollo-server-express";
import { sendEmail } from "../Auth/CreateConfirmEmail/sendMail";
import { User } from "../../entity/User";
import { v4 } from "uuid";
import { redis } from "../../redis";
import { forgetPasswordPrefix } from "../../Utils/constant/redisPrefix";
import { MutationForgotPasswordArgs } from "../../types/graphql-hooks";

// Iresolver is there to add types to the
// ts project
export const forgotPassword: IResolvers = {
  Mutation: {
    forgotPassword: async (_, { email }: MutationForgotPasswordArgs) => {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return false;
      }
      const token = v4();
      await redis.set(
        forgetPasswordPrefix + token,
        user.id,
        "ex",
        60 * 60 * 24
      );
      const htt = `http://localhost:1000/user/change-password/${token}`;
      await sendEmail(email, htt);
      return true;
    },
  },
};
