import { Column } from "typeorm";

export class PersonalInfo {
  @Column("text", { nullable: true })
  firstName: string;

  @Column("text", { nullable: true })
  lastName: string;

  @Column("text", { nullable: true })
  address: string;
}
