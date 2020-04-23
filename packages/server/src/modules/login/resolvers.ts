import { IResolvers } from "apollo-server-express";
import * as bcrypt from "bcryptjs";
import { User } from "../../entity/User";
import { MutationLoginArgs } from "../../types/graphql-hooks";
// Iresolver is there to add types to the
// ts project
export const loginResolver: IResolvers = {
  Mutation: {
    login: async (_, { email, password }: MutationLoginArgs, { req }) => {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return {
          errors: [
            {
              path: "email",
              message: "user not found",
            },
          ],
        };
      }
      const valid = await bcrypt.compare(password, user.password);
      if (!valid) {
        return {
          errors: [
            {
              path: "email",
              message: "is not valid",
            },
          ],
        };
      }
      req.session.userId = user.id;
      if (!user.confirm) {
        return {
          errors: [
            {
              path: "email",
              message: "is not confirm",
            },
          ],
        };
      }

      return { user };
    },
  },
};
