import { IResolvers } from "apollo-server-express";
import { Service } from "../../entity/service";
import { getConnection } from "typeorm";
import { User } from "../../entity/User";

export const searchServicesUser: IResolvers = {
  Query: {
    searchServicesUser: async (_, { search, limit, offset }) => {
      let userQB = getConnection().getRepository(User).createQueryBuilder("u");

      let ServiceQB = getConnection()
        .getRepository(Service)
        .createQueryBuilder("s");

      userQB = userQB.andWhere("u.username ilike :username", {
        username: `%${search}%`,
      });
      ServiceQB = ServiceQB.andWhere("s.name ilike :name", {
        name: `%${search}%`,
      })
        .orWhere("s.category ilike :category", {
          category: `%${search}%`,
        })
        .orWhere("s.coutryId ilike :coutryId", {
          coutryId: `%${search}%`,
        });
      const user = await userQB.take(limit).skip(offset).getMany();
      const service = await ServiceQB.take(limit).skip(offset).getMany();
      console.log("user", user);
      console.log("service", service);

      return { user, service };
    },
  },
};
