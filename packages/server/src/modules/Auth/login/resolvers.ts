import { invalidLogin, confirmEmailError } from "./errorMessages";
import { IResolvers } from "apollo-server-express";
import * as bcrypt from "bcryptjs";
import { User } from "../../../entity/User";
import { MutationLoginArgs } from "../../../types/graphql-hooks";
import { userSessionIdPrefix } from "../../shared/constant";

// Iresolver is there to add types to the
// ts project

export const loginResolver: IResolvers = {
  Mutation: {
    login: async (
      _,
      { email, password }: MutationLoginArgs,
      { req, session, redis }
    ) => {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return null;
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        return [
          {
            path: "email",
            message: invalidLogin,
          },
        ];
      }
      if (!user.confirm) {
        return [
          {
            path: "email",
            message: confirmEmailError,
          },
        ];
      }
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
