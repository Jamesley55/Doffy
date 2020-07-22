import { IResolvers } from "apollo-server-express";
import { Service } from "../../../entity/service";
import { User } from "../../../entity/User";
import { createTime } from "../../Time/schedule/createscheduleTimes";

export const createService: IResolvers = {
	Mutation: {
		createService: async (
			_,
			{ inputService, ScheduleBool, ScheduleTime },
			{ session }
		) => {
			const {
				name,
				category,
				description,
				coutryId,
				stateId,
				cityId,
				Taxes,
				Adress,
				price,
				payoutSchedule,
				customerBillingStatement,
				latitude,
				longitude,
				profilPicture,
				picturesUrl,
				averageTime,
				adresseVisible,
			} = inputService;

			const ownerId = session.userId;

			const calendar = await createTime(ScheduleBool, ScheduleTime);
			const list: string[] = [];
			list.push(picturesUrl);
			await Service.create({
				name,
				category,
				description,
				coutryId,
				stateId,
				cityId,
				Taxes,
				Adress,
				price,
				payoutSchedule,
				customerBillingStatement,
				latitude,
				longitude,
				ownerId,
				calendar,
				picturesUrl: list,
				profilPicture,
				adresseVisible,
				averageTime,
			}).save();

			const userType = "serviceProvider";
			await User.update({ id: ownerId }, { userType });
			console.log("calendar", calendar.wednesdaySchedule);
			return true;
		},
	},
};
