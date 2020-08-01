import { NotificationQuery } from "@doffy/controller";
import * as React from "react";
import {
	MessageDocument,
	MessageQuery,
	NotificationDocument,
} from "../../controller/src/generated/graphql-hooks";
import { client } from "../src/apollo";

export const IntercommunicationContext = React.createContext<{
	NotificationQuery: () => any;
	MessageQuery: () => any;
}>({
	NotificationQuery: async () => {},
	MessageQuery: async () => {},
});

interface intercommunicationContextProps {}

export const Intercommunication: React.FC<intercommunicationContextProps> = ({
	children,
}) => {
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
