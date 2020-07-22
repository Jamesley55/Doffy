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
	TatooQuery: () => any;
	HairstylistQuery: () => any;
	MakeupQuery: () => any;
	EyebrowQuery: () => any;
	LashQuery: () => any;
	NailQuery: () => any;
	AestheticianQuery: () => any;
	MessageQuery: () => any;
}>({
	BarbershopQuery: async () => {},
	TatooQuery: async () => {},
	HairstylistQuery: async () => {},
	MakeupQuery: async () => {},
	EyebrowQuery: async () => {},
	LashQuery: async () => {},
	NailQuery: async () => {},
	AestheticianQuery: async () => {},
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
							category: "barbershop",
						},
					});
					console.log(Notification.data.ServiceByCategory);
					return Notification.data.ServiceByCategory;
				},

				TatooQuery: async () => {
					const Notification = await client.query<ServiceByCategoryQuery>({
						query: ServiceByCategoryDocument,
						variables: {
							category: "TatooArtist",
						},
					});
					console.log(Notification.data.ServiceByCategory);
					return Notification.data.ServiceByCategory;
				},
				HairstylistQuery: async () => {
					const Notification = await client.query<ServiceByCategoryQuery>({
						query: ServiceByCategoryDocument,
						variables: {
							category: "HairStylist",
						},
					});
					console.log(Notification.data.ServiceByCategory);
					return Notification.data.ServiceByCategory;
				},
				MakeupQuery: async () => {
					const Notification = await client.query<ServiceByCategoryQuery>({
						query: ServiceByCategoryDocument,
						variables: {
							category: "MakeupArtist",
						},
					});
					console.log(Notification.data.ServiceByCategory);
					return Notification.data.ServiceByCategory;
				},
				EyebrowQuery: async () => {
					const Notification = await client.query<ServiceByCategoryQuery>({
						query: ServiceByCategoryDocument,
						variables: {
							category: "EyebrowTechnician",
						},
					});
					console.log(Notification.data.ServiceByCategory);
					return Notification.data.ServiceByCategory;
				},
				LashQuery: async () => {
					const Notification = await client.query<ServiceByCategoryQuery>({
						query: ServiceByCategoryDocument,
						variables: {
							category: "LashTechnician",
						},
					});
					console.log(Notification.data.ServiceByCategory);
					return Notification.data.ServiceByCategory;
				},
				NailQuery: async () => {
					const Notification = await client.query<ServiceByCategoryQuery>({
						query: ServiceByCategoryDocument,
						variables: {
							category: "NailTechnician",
						},
					});
					console.log(Notification.data.ServiceByCategory);
					return Notification.data.ServiceByCategory;
				},
				AestheticianQuery: async () => {
					const Notification = await client.query<ServiceByCategoryQuery>({
						query: ServiceByCategoryDocument,
						variables: {
							category: "Aesthetician",
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
