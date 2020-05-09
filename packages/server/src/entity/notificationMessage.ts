import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from "typeorm";

@Entity("notificationmessage")
// BaseEntitie enable the find or create function like
// user.find() or user.create()
export class NotificationMessage extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  NotificationMessageId: string;

  @Column("text", { nullable: true })
  Title: string;

  @Column("text", { nullable: true })
  Body: string;
}
