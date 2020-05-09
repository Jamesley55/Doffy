import { validationSchema } from "@doffy/common";
import { User } from "../../../entity/User";
import { IResolvers } from "apollo-server-express";
import * as bcrypt from "bcryptjs";
import { MutationRegisterArgs } from "../../../types/graphql-hooks";
import { formatYupError } from "../../../Utils/FormatYupError/formatYupError";
import { createConfirmEmailLink } from "../CreateConfirmEmail/createconfirmEmailLink";
import { duplicateEmail } from "../../../Utils/FormatYupError/ErrorMessage";
import { sendEmail } from "../CreateConfirmEmail/sendMail";
import { host } from "../../../Utils/host/host";
import { userSessionIdPrefix } from "../../shared/constant";

// Iresolver is there to add types to the
// ts project
export const registerResolver: IResolvers = {
  Mutation: {
    register: async (
      _,
      args: MutationRegisterArgs,
      { req, redis, session }
    ) => {
      try {
        await validationSchema.validate(args, { abortEarly: false });
      } catch (err) {
        return formatYupError(err);
      }
      const { username, email, password, confirmPassword } = args;
      const userAlreadyExist = await User.findOne({
        where: { email },
        select: ["id"],
      });
      if (userAlreadyExist) {
        return [
          {
            path: "email",
            message: duplicateEmail,
          },
        ];
      }

      if (password !== confirmPassword) {
        return [
          {
            path: "password",
            message: "your password doesnt correspond",
          },
        ];
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        username,
        email,
        password: hashedPassword,
      }).save();

      await sendEmail(
        email,
        await createConfirmEmailLink(host, user.id, redis)
      );

      session.userId = user.id;
      console.log("session Userid", session.userId);

      if (req.sessionID) {
        await redis.lpush(`${userSessionIdPrefix}${user.id}`, req.sessionID);
      }
      console.log("sessionId", req.sessionID);
      return [{ sessionId: req.sessionID }];
    },
  },
};
