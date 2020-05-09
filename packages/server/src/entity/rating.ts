import { Column, BaseEntity } from "typeorm";

export class Scores extends BaseEntity {
  @Column("double precision", { default: null })
  score: number;
}
