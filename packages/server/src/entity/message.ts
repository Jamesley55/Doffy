import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

export enum MessageType {
  TEXT,
  LOCATION,
  PICTURE,
}

@Entity("message")
export class Message {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @CreateDateColumn()
  createdAt: number;

  @Column({ nullable: true })
  type: MessageType;
}
