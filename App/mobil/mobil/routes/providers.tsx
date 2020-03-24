import React from "react";
import { AuthProvider } from "./Auth";
import { Routes } from "./index";

interface ProvidersProps {}

export const Providers: React.FC<ProvidersProps> = ({}) => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};
