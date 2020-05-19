import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { User } from "./User";
import { Calendar } from "./calendar";
import { Booking } from "./booking";
import { Scores } from "./rating";

@Entity("service")
export class Service extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column("varchar", { length: 100 })
  name: string;

  @Column("varchar", { length: 100 })
  category: string;

  @Column("simple-array", { nullable: true, array: true })
  pictureUrl: string[];

  @Column("varchar", { length: 255 })
  description: string;

  @Column("varchar", { length: 100 })
  coutryId: string;

  @Column("varchar", { length: 100 })
  stateId: string;

  @Column("varchar", { length: 100 })
  cityId: string;

  @Column("uuid") calendarId: string;

  @OneToOne(() => Calendar, (calendar) => calendar.services)
  @JoinColumn({ name: "calendarId" })
  calendar: Calendar;

  @Column("int", { default: 45 })
  averageTime: number;

  @Column("boolean")
  Taxes: boolean;

  @Column("text")
  Adress: string;

  @Column(() => Scores)
  score: Scores[];

  @Column("double precision", { default: null })
  rating: number;

  @Column("double precision") price: number;

  @Column("text") payoutSchedule: string;

  @Column("text") customerBillingStatement: string;

  @Column("double precision") latitude: number;

  @Column("double precision") longitude: number;

  @Column("uuid") ownerId: string;

  @Column("decimal", { default: "0" })
  depositAmount: number;

  @Column("boolean", { default: true })
  isRefund: boolean;

  @ManyToOne(() => User, (user) => user.services)
  @JoinColumn({ name: "ownerId" })
  user: User;

  @OneToMany(() => Booking, (booking) => booking.service)
  booking: Booking[];
}
