import { useRegisterMutation } from "@doffy/controller";
import {
	useLoginMutation,
	useLogoutMutation,
	useMeQuery,
} from "@doffy/controller/src/generated/graphql-hooks";
import * as SecureStore from "expo-secure-store";
import * as React from "react";
type User = null | string | undefined;
export const AuthContext = React.createContext<{
	token: string | null;
	user: User;
	register: (
		values: any
	) => Promise<
		| ({ __typename?: "Error" | undefined } & Pick<Error, "path" | "message">)
		| null
	>;
	homeScreen: (token: string) => void;
	me: () => void;
	login: (values: any) => void;
	logout: () => void;
}>({
	token: null,
	user: null,
	register: async () => null,
	homeScreen: () => null,
	me: () => {},
	login: async () => {},
	logout: () => {},
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
	const [user, setUser] = React.useState<string | null | undefined>(null);
	const [token, setToken] = React.useState<string | null>(null);

	const [registerMutation] = useRegisterMutation();
	const [loginMutation] = useLoginMutation();
	const [logoutMutation] = useLogoutMutation();
	const { data } = useMeQuery();
	const meData = data;
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
				me: () => {
					const username = meData?.me?.user?.username;
					setUser(username);
				},
				login: async (values: any) => {
					const login = await loginMutation({
						variables: values,
					});

					if (!login.data?.login.errors && login.data?.login.sessionId) {
						const sessionId = login?.data?.login?.sessionId;
						setUser(sessionId);
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
