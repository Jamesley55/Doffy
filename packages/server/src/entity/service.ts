import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./User";

@Entity("ServiceInstance")
export class ServiceInstance extends BaseEntity {
  @PrimaryGeneratedColumn("uuid") id: string;

  @Column("uuid") userId: string;

  @Column("varchar", { length: 100 })
  name: string;

  @Column("varchar", { length: 100 })
  category: string;

  @Column("text", { nullable: true })
  pictureUrl: string[];

  @Column("varchar", { length: 255 })
  description: string;

  @Column("varchar", { length: 100 })
  coutryId: string;

  @Column("varchar", { length: 100 })
  stateId: string;

  @Column("varchar", { length: 100 })
  cityId: string;

  @Column("boolean")
  Taxes: boolean;

  @Column("text")
  Adress: string;

  @Column("double precision") price: number;

  @Column("text") payoutSchedule: string;

  @Column("text") customerBillingStatement: string;

  @Column("double precision") latitude: number;

  @Column("double precision") longitude: number;

  @Column("uuid") ownerId: string;

  @ManyToOne(() => User, (user) => user.services)
  @JoinColumn({ name: "ownerId" })
  user: User;
}
