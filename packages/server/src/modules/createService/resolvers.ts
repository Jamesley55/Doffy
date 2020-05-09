import { IResolvers } from "apollo-server-express";
import { Service } from "../../entity/service";
import { Calendar } from "../../entity/calendar";
import { ScheduleTime } from "../../entity/times";

export const createService: IResolvers = {
  Mutation: {
    createService: async (_, { input }, { req }) => {
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
      } = input;

      const monday = await ScheduleTime.create({
        startingTime: 1200,
        EndTime: 16000,
      }).save();

      const friday = await ScheduleTime.create({
        startingTime: 1000,

        EndTime: 18000,
      }).save();

      const calendar = await Calendar.create({
        mondaySchedule: monday,
        tuesdaySchedule: monday,
        wednesdaySchedule: monday,
        thusdaySchedule: monday,
        fridaySchedule: friday,
        saturdaySchedule: friday,
        sundaySchedule: friday,
      }).save();

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
        ownerId: req.session.userId,
        calendar,
      }).save();
      return true;
    },
  },
};
