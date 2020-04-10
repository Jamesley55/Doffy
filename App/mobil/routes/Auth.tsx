import React, { useState } from "react";
import { AsyncStorage } from "react-native";

interface state {
  email: string;
  emailError: boolean;
  password: string;
  passwordError: boolean;
  confirmPassword: string;
  confirmPasswordError: boolean;
}
type User = null | { Email: string; Password: string };
export const AuthContext = React.createContext<{
  userToken: User;
  email: string;
  setEmail;
  emailError: boolean;
  setEmailError;
  password: string;
  setPassword;
  passwordError: boolean;
  setPasswordError;
  confirmPassword: string;
  setConfirmPassword;
  confirmPasswordError: boolean;
  setConfirmPasswordError;
  login: () => void;
  logout: () => void;
  register: () => void;
}>({
  email: "",
  setEmail: "",
  emailError: false,
  setEmailError: false,
  password: "",
  setPassword: "",
  passwordError: false,
  setPasswordError: false,
  confirmPassword: "",
  setConfirmPassword: "",
  confirmPasswordError: false,
  setConfirmPasswordError: false,
  userToken: null,
  login: () => {},
  logout: () => {},
  register: () => false,
});

interface AuthProviderProps {}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [userToken, setUserToken] = useState<User>(null);
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<boolean>(
    false
  );

  return (
    <AuthContext.Provider
      value={{
        userToken,
        email,
        setEmail,
        emailError,
        setEmailError,
        password,
        setPassword,
        passwordError,
        setPasswordError,
        confirmPassword,
        setConfirmPassword,
        confirmPasswordError,
        setConfirmPasswordError,

        login: () => {
          if (email.length === 0) {
            return setEmailError(true);
          }
          setEmailError(false);

          if (password.length === 0) {
            return setPasswordError(true);
          }
          setPasswordError(false);

          const fakeUser = { Email: email, Password: password };
          setUserToken(fakeUser);
          console.log(fakeUser);
          AsyncStorage.setItem("userToken", JSON.stringify(fakeUser));
        },
        logout: () => {
          setUserToken(null);
          AsyncStorage.removeItem("userToken");
        },
        register: () => {
          if (email.length === 0) {
            return setEmailError(true);
          }
          setEmailError(false);

          if (password.length === 0) {
            return setPasswordError(true);
          }
          setPasswordError(false);

          if (confirmPassword.length === 0) {
            return setConfirmPasswordError(true);
          }
          setConfirmPasswordError(false);

          if (password !== confirmPassword) {
            return setConfirmPasswordError(true);
          }

          setPasswordError(false);
          setConfirmPasswordError(false);

          const fakeUser = { Email: email, Password: password };
          setUserToken(fakeUser);
          AsyncStorage.setItem("userToken", JSON.stringify(fakeUser));
          console.log(fakeUser);

          return true;
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
