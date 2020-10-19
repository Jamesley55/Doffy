import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	OneToMany,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from "typeorm";
import { Message } from "./message";
import { Notification } from "./notification";
// import { UserInfo } from "./UserInfo";
import { Service } from "./service";

@Entity("users")
// BaseEntitie enable the find or create function like
// user.find() or user.create()
export class User extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column("varchar", { length: 255 })
	username: string;

	@Column("varchar", { length: 255 })
	email: string;

	@Column("text")
	password: string;

	@Column("boolean", { default: false })
	confirm: boolean;

	@Column("varchar", { default: "serviceSeeker" })
	userType: string;

	@Column("varchar", { nullable: true })
	firstname: string;

	@Column("varchar", { nullable: true })
	lastname: string;

	@Column("varchar", { nullable: true })
	notificationPushToken: string;

	@Column("date", { nullable: true })
	dateOfBirth: Date;

	@Column("varchar", { default: "email" })
	loginWith: string;

	@Column("varchar", { nullable: true })
	facebookId: string;

	@Column("varchar", { nullable: true })
	intagramId: string;

	@Column("varchar", { nullable: true })
	twitterId: string;

	@Column("uuid", { nullable: true })
	recieveCoupon: string;

	@CreateDateColumn()
	created: Date;

	@UpdateDateColumn()
	lastSeen: Date;

	@Column("date", { nullable: true })
	modify: Date;

	@OneToMany(() => Service, (serviceInstance) => serviceInstance.user)
	services: Service[];

	@OneToMany(() => Message, (message) => message.user)
	message: Message[];

	@OneToMany(() => Notification, (notifications) => notifications.user)
	notifications: Notification[];
}
