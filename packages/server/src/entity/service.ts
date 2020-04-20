import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne,
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
  pictureUrl: string;

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

  @Column("int") price: number;

  @Column("int") beds: number;

  @Column("int") guests: number;

  @Column("double precision") latitude: number;

  @Column("double precision") longitude: number;

  @Column("text", { array: true })
  amenities: string[];

  @ManyToOne(() => User)
  user: User;
}
