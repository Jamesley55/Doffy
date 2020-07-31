import {
	BaseEntity,
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	ManyToOne,
	PrimaryGeneratedColumn,
} from "typeorm";
import { NotificationMessage } from "./notificationMessage";
import { User } from "./User";

@Entity("notification")
export class Notification extends BaseEntity {
	@PrimaryGeneratedColumn("uuid")
	id: number;

	@Column("uuid")
	senderId: string;

	@Column("uuid")
	recipientId: string;

	@Column("uuid", { nullable: true })
	bookingId: string;

	@Column(() => NotificationMessage)
	message: NotificationMessage;

	@Column("boolean", { default: false })
	bookRequest: boolean;

	@Column("boolean", { default: false, nullable: true })
	RequestAccepted: boolean;

	@CreateDateColumn()
	createdDate: number;

	@ManyToOne(() => User, (user) => user.notifications)
	@JoinColumn({ name: "senderId" })
	user: User;
}
