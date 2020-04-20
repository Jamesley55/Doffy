import {
  Column,
  Entity,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("rating")
export class Rating extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("uuid", { nullable: true })
  serviceId: string;

  @Column("int")
  happynest: number;

  @Column("text")
  comment: string;

  @Column("int")
  score: number;

  @CreateDateColumn()
  created: Date;

  @UpdateDateColumn()
  modify: Date;
}
