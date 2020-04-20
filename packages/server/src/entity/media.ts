import {
  Column,
  Entity,
  BaseEntity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("media")
export class Media extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("text")
  url: string;

  @Column("uuid", { nullable: true })
  serviceId: string;

  @Column("varchar", { nullable: true })
  userId: string;

  @Column("text", { nullable: true })
  address: string;

  @CreateDateColumn()
  created: Date;
}
