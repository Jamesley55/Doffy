import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
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

  @Column("uuid")
  userId: string;

  @Column("date")
  startService: Date;

  @Column("date")
  endService: Date;

  @Column("decimal")
  price: number;

  @Column("decimal", { default: "0" })
  taxes: number;

  @Column("decimal")
  amoutPaid: number;

  @Column("decimal")
  isRefund: boolean;

  @Column("decimal", { default: "0" })
  transactionId: number;

  @Column("boolean", { default: false })
  confirm: boolean;

  @Column("uuid", { nullable: true })
  recieveCoupon: string;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  modify: Date;

  @Column("boolean", { default: true })
  status: boolean;

  @OneToOne(() => Transaction)
  @JoinColumn()
  transaction: Transaction;

  @ManyToOne(() => Service, (user) => user.booking)
  @JoinColumn()
  service: Service;
}
