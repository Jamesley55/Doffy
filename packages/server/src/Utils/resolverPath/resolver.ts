// TODO: implemente an optinal algortihm for the resolver path.
import { loginResolver } from "../../modules/Auth/login/resolvers";
import { Logout } from "../../modules/Auth/logout/resolvers";
import { Me } from "../../modules/Auth/me/resolvers";
import { registerResolver } from "../../modules/Auth/register/resolvers";
import { createBooking } from "../../modules/Booking/Create/resolvers";
import { QueryBooking } from "../../modules/Booking/QueryBooking/resolvers";
import { BookingTime } from "../../modules/Booking/QuerybookingTime/bookingtime";
import { UpdateBooking } from "../../modules/Booking/update/resolvers";
import { findServiceCalendar } from "../../modules/Calendar/QueryCalendar/resolvers";
import { createMessage } from "../../modules/Message/create/resolver";
import { newMessage } from "../../modules/Message/newMessage/resolvers";
import { findMessage } from "../../modules/Message/QueryMessage/resolvers";
import { createNotification } from "../../modules/Notification/create/resolver";
import { newNotification } from "../../modules/Notification/newNotification/resolvers";
import { findNotification } from "../../modules/Notification/Querynotification/resolvers";
import { forgotPassword } from "../../modules/Password/forgotPassword/resolvers";
import { fileUpload } from "../../modules/Pictures/uploadS3/resolvers";
import { searchServicesUser } from "../../modules/search/resolvers";
import { createService } from "../../modules/Services/create/resolvers";
import { DeleteService } from "../../modules/Services/delete/resolvers";
import { ServiceByCategory } from "../../modules/Services/QueryServices/resolver";
import { UpdateService } from "../../modules/Services/update/resolvers";
import { changePassword } from "./../../modules/Password/changePassword/resolvers";

export const resolvers = [
	loginResolver,
	registerResolver,
	forgotPassword,
	changePassword,
	fileUpload,
	createService,
	createMessage,
	findMessage,
	newMessage,
	searchServicesUser,
	Me,
	Logout,
	ServiceByCategory,
	DeleteService,
	UpdateService,
	findServiceCalendar,
	createNotification,
	newNotification,
	findNotification,
	createBooking,
	UpdateBooking,
	QueryBooking,
	BookingTime,
];
