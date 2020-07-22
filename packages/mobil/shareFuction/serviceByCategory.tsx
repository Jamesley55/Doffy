import * as React from "react";
import {
	MessageDocument,
	MessageQuery,
	ServiceByCategoryDocument,
	ServiceByCategoryQuery,
} from "../../controller/src/generated/graphql-hooks";
import { client } from "../src/apollo";

export const serviceByCategoryContext = React.createContext<{
	BarbershopQuery: () => any;
	MessageQuery: () => any;
}>({
	BarbershopQuery: async () => {},
	MessageQuery: async () => {},
});

interface serviceByCategoryContextProps {}

export const ServiceByCategoryProvider: React.FC<serviceByCategoryContextProps> = ({
	children,
}) => {
	return (
		<serviceByCategoryContext.Provider
			value={{
				BarbershopQuery: async () => {
					const Notification = await client.query<ServiceByCategoryQuery>({
						query: ServiceByCategoryDocument,
						variables: {
							category: "HairStylist",
						},
					});
					console.log(Notification.data.ServiceByCategory);
					return Notification.data.ServiceByCategory;
				},
				MessageQuery: async () => {
					const Message = await client.query<MessageQuery>({
						query: MessageDocument,
					});
					console.log(Message.data.messages);
					return Message.data.messages;
				},
			}}
		>
			{children}
		</serviceByCategoryContext.Provider>
	);
};
