import {
	BaseEntity,
	Column,
	Entity,
	JoinColumn,
	ManyToOne,
	OneToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { Booking } from "./booking";
import { Calendar } from "./calendar";
import { Scores } from "./rating";
import { User } from "./User";

@Entity("service")
export class Service extends BaseEntity {
	@PrimaryGeneratedColumn("uuid") id: string;

	@Column("varchar", { length: 100 })
	name: string;

	@Column("varchar", { length: 100 })
	category: string;

	@Column("varchar", { nullable: true, array: true })
	picturesUrl: string[];

	@Column("varchar", { nullable: false })
	profilPicture: string;

	@Column("varchar", { length: 255 })
	description: string;

	@Column("varchar", { length: 100 })
	coutryId: string;

	@Column("varchar", { length: 100 })
	stateId: string;

	@Column("varchar", { length: 100 })
	cityId: string;

	@Column("uuid") calendarId: string;

	@OneToOne(() => Calendar, (calendar) => calendar.services)
	@JoinColumn({ name: "calendarId" })
	calendar: Calendar;

	@Column("boolean", { default: false })
	adresseVisible: boolean;

	// in milisecond
	// 45 minute is equal to 2700000 milisecond
	@Column("int", { default: 2700000 })
	averageTime: number;

	@Column("boolean", { nullable: true })
	Taxes: boolean;

	@Column("text")
	Adress: string;

	@Column(() => Scores)
	score: Scores[];

	@Column("double precision", { default: null })
	rating: number;

	@Column("double precision") price: number;

	@Column("text", { nullable: true }) payoutSchedule: string;

	@Column("text", { nullable: true }) customerBillingStatement: string;

	@Column("double precision", { nullable: true }) latitude: number;

	@Column("double precision", { nullable: true }) longitude: number;

	@Column("uuid") ownerId: string;

	@Column("decimal", { default: "0" })
	depositAmount: number;

	@Column("boolean", { default: true })
	isRefund: boolean;

	@ManyToOne(() => User, (user) => user.services)
	@JoinColumn({ name: "ownerId" })
	user: User;

	@OneToMany(() => Booking, (booking) => booking.service)
	booking: Booking[];
}
