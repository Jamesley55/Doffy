import { IResolvers } from "apollo-server-express";
import { Service } from "../../../entity/service";
import { User } from "../../../entity/User";

export const ServiceByCategory: IResolvers = {
	Query: {
		ServiceUser: async (_, { ServiceId }: any) => {
			const service = await Service.findOne({ where: { id: ServiceId } });
			const id = service?.ownerId;
			const user = User.findOne({ where: { id } });
			return user;
		},
		ServiceByCategory: async (_, { category }: any) => {
			const service = await Service.find({ where: { category } });
			return service;
		},
	},
};
