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

export enum MessageType {
  TEXT,
  LOCATION,
  PICTURE,
}

@Entity("message")
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  content: string;

  @CreateDateColumn()
  createdAt: number;

  @Column({ nullable: true })
  type: MessageType;

  @Column("uuid")
  senderId: string;

  @Column("uuid")
  recipientId: string;

  @ManyToOne(() => User, (user) => user.message)
  @JoinColumn({ name: "senderId" })
  user: User;
}
