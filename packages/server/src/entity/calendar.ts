import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
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

  @Column("uuid", { nullable: true })
  mondayScheduleUuid: string;

  @OneToOne(() => ScheduleTime, (time) => time.calendar, {
    cascade: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "mondayScheduleUuid" })
  mondaySchedule: ScheduleTime;

  @Column("boolean", { default: false })
  tuesday: boolean;

  @Column("uuid", { nullable: true })
  tuesdayScheduleUuid: string;

  @OneToOne(() => ScheduleTime, (time) => time.calendar, {
    cascade: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "tuesdayScheduleUuid" })
  tuesdaySchedule: ScheduleTime;

  @Column("boolean", { default: false })
  wednesday: boolean;

  @Column("uuid", { nullable: true })
  wednesdayScheduleUuid: string;

  @OneToOne(() => ScheduleTime, (time) => time.calendar, {
    cascade: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "wednesdayScheduleUuid" })
  wednesdaySchedule: ScheduleTime;

  @Column("boolean", { default: false })
  thursday: boolean;

  @Column("uuid", { nullable: true })
  thurdayScheduleUuid: string;

  @OneToOne(() => ScheduleTime, (time) => time.calendar, {
    cascade: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "thurdayScheduleUuid" })
  thursdaySchedule: ScheduleTime;

  @Column("boolean", { default: false })
  friday: boolean;

  @Column("uuid", { nullable: true })
  fridayScheduleUuid: string;

  @OneToOne(() => ScheduleTime, (time) => time.calendar, {
    cascade: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "fridayScheduleUuid" })
  fridaySchedule: ScheduleTime;

  @Column("boolean", { default: false })
  saturday: boolean;

  @Column("uuid", { nullable: true })
  saturdayScheduleUuid: string;

  @OneToOne(() => ScheduleTime, (time) => time.calendar, {
    cascade: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "saturdayScheduleUuid" })
  saturdaySchedule: ScheduleTime;

  @Column("boolean", { default: false })
  sunday: boolean;

  @Column("uuid", { nullable: true })
  sundayScheduleUuid: string;

  @OneToOne(() => ScheduleTime, (time) => time.calendar, {
    cascade: true,
    onDelete: "CASCADE",
  })
  @JoinColumn({ name: "sundayScheduleUuid" })
  sundaySchedule: ScheduleTime;

  @OneToOne(() => Service, (service) => service.calendar)
  services: Service;
}
