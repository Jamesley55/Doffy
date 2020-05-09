import { IResolvers } from "apollo-server-express";
import { Service } from "../../entity/service";
import { getConnection } from "typeorm";

export const searchServicesUser: IResolvers = {
  Query: {
    searchServicesUser: async (
      _,
      { inputs: { uuidService, uuidUser }, limit, offset }
    ) => {
      const ServicesQB = getConnection()
        .getRepository(Service)
        .createQueryBuilder("l");
      const userQB = getConnection()
        .getRepository(Service)
        .createQueryBuilder("l");
      let services;
      let user;

      if (uuidUser) {
        user = userQB.andWhere("l.id= :id", { uuidUser });
      }
      if (uuidService) {
        services = ServicesQB.andWhere("l.username= ilike :username", {
          username: `${uuidService} `,
        });
      }
      console.log(uuidService);
      console.log(uuidUser);
      user?.take(limit).skip(offset).getMany();
      services?.take(limit).skip(offset).getMany();
      return { services, user };
    },
  },
};
