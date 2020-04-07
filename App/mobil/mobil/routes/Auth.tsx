import React, { useState } from "react";
import { AsyncStorage } from "react-native";
import { userInfo } from "os";

type User = null | { Email: string; Password: string };
export const AuthContext = React.createContext<{
  userToken: User;
  login: () => void;
  logout: () => void;
  register: (email, password, confirmPassword) => boolean;
}>({
  userToken: null,
  login: () => {},
  logout: () => {},
  register: () => false,
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userToken, setUserToken] = useState<User>(null);
  return (
    <AuthContext.Provider
      value={{
        userToken,
        login: () => {
          const fakeUser = { Email: "bob", Password: "password" };
          setUserToken(fakeUser);
          AsyncStorage.setItem("userToken", JSON.stringify(fakeUser));
        },
        logout: () => {
          setUserToken(null);
          AsyncStorage.removeItem("userToken");
        },
        register: (email, password, confirmPassword) => {
          if (email.length === 0) {
            //return this.setState({ emailError: true });
          }
          //  this.setState({ emailError: false });

          if (password.length === 0) {
            // return this.setState({ passwordError: true });
          }
          // this.setState({ passwordError: false });

          if (confirmPassword.length === 0) {
            //  return this.setState({ confirmPasswordError: true });
          }
          // this.setState({ confirmPasswordError: false });

          if (password !== confirmPassword) {
            //     return this.setState({
            //     passwordError: true,
            //   confirmPasswordError: true,
            //});
          }
          //  this.setState({ passwordError: false, confirmPasswordError: false });
          const fakeUser = { Email: email, Password: password };
          setUserToken(fakeUser);

          return true;
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
