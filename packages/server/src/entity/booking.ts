import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
  JoinColumn,
  ManyToOne,
  // OneToOne,
} from "typeorm";

// import { UserInfo } from "./UserInfo";
import { Transaction } from "./transaction";
import { Service } from "./service";
@Entity("booking")
// BaseEntitie enable the find or create function like
// user.find() or user.create()
export class Booking extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid")
  serviceId: string;

  @Column("text")
  date: string;

  @Column("int")
  startService: number;

  @Column("int")
  endService: number;

  @Column("decimal")
  price: number;

  @Column("decimal", { default: "0" })
  taxes: number;

  @Column("decimal", { default: 0 })
  amoutPaid: number;

  @Column("decimal", { default: "0" })
  depositAmount: number;

  @Column("boolean", { default: true })
  isRefund: boolean;

  @Column("boolean", { default: false })
  confirm: boolean;

  @Column("uuid", { nullable: true })
  recieveCoupon: string;

  @CreateDateColumn()
  created: Date;

  @Column("boolean", { default: false })
  status: boolean;

  @OneToOne(() => Transaction)
  @JoinColumn()
  transaction: Transaction;

  @ManyToOne(() => Service, (user) => user.booking)
  @JoinColumn({ name: "serviceId" })
  service: Service;
}
