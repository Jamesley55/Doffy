import { IResolvers } from "apollo-server-express";
import { removeAllUsersSessions } from "./removeUserSession";

export const Logout: IResolvers = {
  Mutation: {
    logout: async (_, __, { session, redis, res }) => {
      const { userId } = session;
      if (userId) {
        removeAllUsersSessions(userId, redis);
        session.destroy((err: any) => {
          if (err) {
            console.log(err);
          }
        });

        res.clearCookie("qid");

        return true;
      }

      return false;
    },
  },
};
