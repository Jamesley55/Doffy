import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  // OneToOne,
} from "typeorm";

// import { UserInfo } from "./UserInfo";
@Entity("transaction")
// BaseEntitie enable the find or create function like
// user.find() or user.create()
export class Transaction extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  transactinId: string;

  @Column("uuid")
  serviceId: string;

  @Column("uuid")
  receiverId: string;

  @Column("uuid")
  providerId: string;

  @Column("uuid")
  bookingId: string;

  @Column("decimal")
  amount: number;

  @Column("decimal", { default: 0 })
  Fee: number;

  @Column("varchar")
  currencyId: string;

  @Column("uuid", { nullable: true })
  promoCode: string;

  @Column("decimal")
  DiscountAmount: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  modify: Date;

  @Column("boolean", { default: true })
  status: boolean;
}
