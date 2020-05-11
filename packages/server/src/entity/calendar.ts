import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToOne,
} from "typeorm";
import { ScheduleTime } from "./times";
import { Service } from "./service";

@Entity("calendar")
// BaseEntitie enable the find or create function like
// user.find() or user.create()
export class Calendar extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  CalendarId: string;

  @Column("boolean", { default: false })
  monday: boolean;

  @OneToOne(() => ScheduleTime, (time) => time.calendar)
  mondaySchedule: ScheduleTime;

  @Column("boolean", { default: false })
  tuesday: boolean;

  @OneToOne(() => ScheduleTime, (time) => time.calendar)
  tuesdaySchedule: ScheduleTime;

  @Column("boolean", { default: false })
  wednesday: boolean;

  @OneToOne(() => ScheduleTime, (time) => time.calendar)
  wednesdaySchedule: ScheduleTime;

  @Column("boolean", { default: false })
  thursday: boolean;

  @OneToOne(() => ScheduleTime, (time) => time.calendar)
  thusdaySchedule: ScheduleTime;

  @Column("boolean", { default: false })
  friday: boolean;

  @OneToOne(() => ScheduleTime, (time) => time.calendar)
  fridaySchedule: ScheduleTime;

  @Column("boolean", { default: false })
  saturday: boolean;

  @OneToOne(() => ScheduleTime, (time) => time.calendar)
  saturdaySchedule: ScheduleTime;

  @Column("boolean", { default: false })
  sunday: boolean;

  @OneToOne(() => ScheduleTime, (time) => time.calendar)
  sundaySchedule: ScheduleTime;

  @OneToOne(() => Service, (service) => service.calendar)
  services: Service;
}
