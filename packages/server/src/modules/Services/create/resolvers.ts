import { IResolvers } from "apollo-server-express";
import { Service } from "../../../entity/service";
import { Calendar } from "../../../entity/calendar";
import { ScheduleTime } from "../../../entity/times";
import { scheduleTime } from "./scheduleTime";

export const createService: IResolvers = {
  Mutation: {
    createService: async (_, { input }, { session }) => {
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

      const ownerId = session.userId;
      const monday = scheduleTime(1200, 1600);

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
        ownerId,
        calendar,
      }).save();
      return true;
    },
  },
};
