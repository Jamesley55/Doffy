import { Column, BaseEntity } from "typeorm";

// BaseEntitie enable the find or create function like
// user.find() or user.create()
export class NotificationMessage extends BaseEntity {
  @Column("text", { nullable: true })
  Title: string;

  @Column("text", { nullable: true })
  Body: string;
}
