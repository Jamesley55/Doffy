import {
	FindServiceCalendarDocument,
	FindServiceCalendarQuery,
	useUpdateBookingMutation,
} from "@doffy/controller";
import * as React from "react";
import {
	QueryBookingTimeDocument,
	QueryBookingTimeQuery,
	useCreateBookingMutation,
} from "../../controller/src/generated/graphql-hooks";
import { client } from "../src/apollo";

export const BookingContext = React.createContext<{
	BookingMutation: (serviceId: any, date: any, startService: any) => any;
	bookingTime: (serviceId: any, date: any) => any;
	Calendar: (serviceId: any) => any;
	updateBooking: (NotificationId: string, response: boolean) => any;
}>({
	BookingMutation: async () => {},
	bookingTime: async () => {},
	Calendar: async () => {},
	updateBooking: async () => {},
});

interface BookingContextProps {}

export const Booking: React.FC<BookingContextProps> = ({ children }) => {
	const [booking] = useCreateBookingMutation();
	const [updateBooking] = useUpdateBookingMutation();

	return (
		<BookingContext.Provider
			value={{
				BookingMutation: async (serviceId, date, startService) => {
					const Notification = await booking({
						variables: {
							serviceId,
							date,
							startService,
						},
					});
					console.log("booking", Notification.data?.createBooking);
				},
				bookingTime: async (serviceId, date) => {
					const time = await client.query<QueryBookingTimeQuery>({
						query: QueryBookingTimeDocument,
						variables: {
							serviceId,
							date,
						},
						fetchPolicy: "no-cache",
					});
					console.log(time);
					return time?.data?.QueryBookingTime;
				},
				Calendar: async (ServiceId) => {
					const time = await client.query<FindServiceCalendarQuery>({
						query: FindServiceCalendarDocument,
						variables: {
							ServiceId,
						},
					});
					console.log("time", time.data);
					return time;
				},
				updateBooking: async (NotificationId, response) => {
					const Notification = await updateBooking({
						variables: {
							NotificationId,
							response,
						},
					});
					console.log("booking", Notification.data?.updateBooking);
				},
			}}
		>
			{children}
		</BookingContext.Provider>
	);
};
