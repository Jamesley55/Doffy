import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { ScheduleTime } from "./times";

@Entity("calendar")
// BaseEntitie enable the find or create function like
// user.find() or user.create()
export class Calendar extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  CalendarId: string;

  @Column("boolean", { default: false })
  monday: boolean;

  @OneToOne(() => ScheduleTime, { cascade: true })
  @JoinColumn()
  mondaySchedule: ScheduleTime;

  @Column("boolean", { default: false })
  tuesday: boolean;

  @OneToOne(() => ScheduleTime, { cascade: true })
  @JoinColumn()
  tuesdaySchedule: ScheduleTime;

  @Column("boolean", { default: false })
  wednesday: boolean;

  @OneToOne(() => ScheduleTime, { cascade: true })
  @JoinColumn()
  wednesdaySchedule: ScheduleTime;

  @Column("boolean", { default: false })
  thursday: boolean;

  @OneToOne(() => ScheduleTime, { cascade: true })
  @JoinColumn()
  thusdaySchedule: ScheduleTime;

  @Column("boolean", { default: false })
  friday: boolean;

  @OneToOne(() => ScheduleTime, { cascade: true })
  @JoinColumn()
  fridaySchedule: ScheduleTime;

  @Column("boolean", { default: false })
  saturday: boolean;

  @OneToOne(() => ScheduleTime, { cascade: true })
  @JoinColumn()
  saturdaySchedule: ScheduleTime;

  @Column("boolean", { default: false })
  sunday: boolean;

  @OneToOne(() => ScheduleTime, { cascade: true })
  @JoinColumn()
  sundaySchedule: ScheduleTime;
}
