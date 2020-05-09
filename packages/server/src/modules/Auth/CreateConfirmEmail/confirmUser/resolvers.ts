import { IResolvers } from "apollo-server-express";
import { User } from "../../../../entity/User";
import { redis } from "../../../../redis";
import { MutationConfirmUserArgs } from "../../../../types/graphql-hooks";
import { confirmationPrefix } from "../../../../Utils/constant/redisPrefix";
// Iresolver is there to add types to the
// ts project
export const confirmUser: IResolvers = {
  Mutation: {
    confirmUser: async (_, { token }: MutationConfirmUserArgs) => {
      const userId = await redis.get(confirmationPrefix + token);

      if (!userId) {
        return false;
      }
      await User.update({ id: userId }, { confirm: true });
      await redis.del(confirmationPrefix + token);
      return true;
    },
  },
};
