import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  BaseEntity,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { User } from "./User";
import { NotificationMessage } from "./notificationMessage";

@Entity("notification")
export class Notification extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column("text")
  userId: string;

  @Column("text")
  serviceId: string;

  @OneToOne(() => NotificationMessage)
  @JoinColumn()
  message: NotificationMessage;

  @CreateDateColumn()
  createdDate: Date;

  @ManyToOne(() => User, (user) => user.notifications)
  user: User;
}
