import React, { useState } from "react";
import { AsyncStorage } from "react-native";

type User = null | { username: string };
export const AuthContext = React.createContext<{
  userToken: User;
  login: () => void;
  logout: () => void;
}>({ userToken: null, login: () => {}, logout: () => {} });

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userToken, setUserToken] = useState<User>(null);
  return (
    <AuthContext.Provider
      value={{
        userToken,
        login: () => {
          const fakeUser = { username: "bob" };
          setUserToken(fakeUser);
          AsyncStorage.setItem("userToken", JSON.stringify(fakeUser));
        },
        logout: () => {
          setUserToken(null);
          AsyncStorage.removeItem("userToken");
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
