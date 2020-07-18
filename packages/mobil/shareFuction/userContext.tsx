import { MeDocument, useRegisterMutation } from "@doffy/controller";
import {
	useLoginMutation,
	useLogoutMutation,
} from "@doffy/controller/src/generated/graphql-hooks";
import * as SecureStore from "expo-secure-store";
import * as React from "react";
import { Error, MeQuery } from "../../controller/src/generated/graphql-hooks";
import { client } from "../src/apollo";

type User = null | string | undefined;
type loginRegister = Promise<
	| ({ __typename?: "Error" | undefined } & Pick<Error, "path" | "message">)
	| null
>;

export const AuthContext = React.createContext<{
	token: string | null;
	user: User;
	register: (values: any) => loginRegister;
	homeScreen: (token: string) => void;
	me: () => void;
	login: (values: any) => loginRegister;
	logout: () => void;
}>({
	token: null,
	user: null,
	register: async () => null,
	homeScreen: () => null,
	me: async () => {},
	login: async () => null,
	logout: () => {},
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = React.useState<string | null | undefined>(null);
	const [token, setToken] = React.useState<string | null>(null);

	const [registerMutation] = useRegisterMutation();
	const [loginMutation] = useLoginMutation();
	const [logoutMutation] = useLogoutMutation();
	return (
		<AuthContext.Provider
			value={{
				token,
				user,
				register: async (values: any) => {
					const register = await registerMutation({
						variables: values,
					});

					if (
						!register.data?.register.errors &&
						register?.data?.register?.sessionId
					) {
						const sessionId = register?.data?.register?.sessionId;
						setToken(sessionId);
						await SecureStore.setItemAsync("sid", sessionId);
					} else if (
						register.data?.register.errors &&
						register.data.register.errors[0]
					) {
						return register.data.register.errors[0];
					}
					return null;
				},
				homeScreen: (tk: string) => {
					setToken(tk);
				},
				me: async () => {
					const Me = await client.query<MeQuery>({ query: MeDocument });
					if (!Me.data.me) {
						logoutMutation();
						setToken(null);
					}
					// tslint:disable-next-line: no-shadowed-variable
					const User: any = Me.data?.me?.user?.username;
					setUser(User);
				},
				login: async (values: any) => {
					console.log("entrer dans login");
					const login = await loginMutation({
						variables: values,
					});

					if (!login.data?.login.errors && login.data?.login.sessionId) {
						const sessionId = login?.data?.login?.sessionId;
						setToken(sessionId);
						await SecureStore.setItemAsync("sid", sessionId);
					} else if (login.data?.login.errors && login.data.login.errors[0]) {
						return login.data.login.errors[0];
					}
					return null;
				},
				logout: async () => {
					logoutMutation();
					setToken(null);
					await SecureStore.deleteItemAsync("sid");
				},
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};