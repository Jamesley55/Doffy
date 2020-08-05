import {
	NewNotificationDocument,
	NotificationQuery,
	useNotificationQuery,
} from "@doffy/controller";
import * as React from "react";
import {
	MessageDocument,
	MessageQuery,
	NotificationDocument,
} from "../../controller/src/generated/graphql-hooks";
import { client } from "../src/apollo";

type User = null | string | undefined;

export const IntercommunicationContext = React.createContext<{
	NotificationQuery: () => any;
	subscribtionNotif: (id: User, loading?: React.SetStateAction<boolean>) => any;
	MessageQuery: () => any;
}>({
	NotificationQuery: async () => {},
	subscribtionNotif: async () => {},

	MessageQuery: async () => {},
});

interface intercommunicationContextProps {}

export const Intercommunication: React.FC<intercommunicationContextProps> = ({
	children,
}) => {
	const { subscribeToMore } = useNotificationQuery();

	return (
		<IntercommunicationContext.Provider
			value={{
				NotificationQuery: async () => {
					const Notification = await client.query<NotificationQuery>({
						query: NotificationDocument,
						fetchPolicy: "no-cache",
					});
					return Notification.data.notification;
				},
				subscribtionNotif: (Id: User, loading?: any) => {
					subscribeToMore({
						document: NewNotificationDocument,
						variables: { recipientId: Id },
						updateQuery: (prev, { subscriptionData }: any) => {
							if (!subscriptionData.data) return prev;
							else {
								if (loading) loading(true);
								return {
									...prev,
									notification: [
										...prev.notification,
										subscriptionData.data.notification,
									],
								};
							}
						},
					});
				},

				MessageQuery: async () => {
					const Message = await client.query<MessageQuery>({
						query: MessageDocument,
						fetchPolicy: "no-cache",
					});
					console.log(Message.data.messages);

					return Message.data.messages;
				},
			}}
		>
			{children}
		</IntercommunicationContext.Provider>
	);
};
