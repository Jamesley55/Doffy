import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { Calendar } from "./calendar";

@Entity("scheduletime")
// BaseEntitie enable the find or create function like
// user.find() or user.create()
export class ScheduleTime extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  scheduleTimeId: string;

  @Column("int", { nullable: true })
  startingTime: number;

  @Column("int", { nullable: true })
  EndTime: number;

  @ManyToOne(() => Calendar, { onDelete: "CASCADE" })
  calendar: Calendar;
}
