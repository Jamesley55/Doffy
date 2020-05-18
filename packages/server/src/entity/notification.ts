import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  BaseEntity,
  JoinColumn,
} from "typeorm";
import { User } from "./User";
import { NotificationMessage } from "./notificationMessage";

@Entity("notification")
export class Notification extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("uuid")
  senderId: string;

  @Column("uuid")
  recipientId: string;

  @Column(() => NotificationMessage)
  message: NotificationMessage;

  @Column("boolean", { default: false })
  bookRequest: boolean;

  @Column("boolean", { default: false, nullable: true })
  RequestAccepted: boolean;

  @CreateDateColumn()
  createdDate: number;

  @ManyToOne(() => User, (user) => user.notifications)
  @JoinColumn({ name: "senderId" })
  user: User;
}
