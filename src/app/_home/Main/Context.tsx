"use client";

import { type ReactNode, createContext } from "react";
import { type User } from "firebase/auth";
import { auth } from "@lib/db";
import { useAuthState } from "react-firebase-hooks/auth";

export type AuthCtx = {
  user: User | null | undefined;
  loading: boolean;
  settings: any;
};

type ContextProps = {
  children: ReactNode;
};

export const AuthContext = createContext<AuthCtx | null>(null);

export const AuthProvider = ({ children }: ContextProps) => {
  const [user, loading] = useAuthState(auth);

  return (
    <AuthContext.Provider value={{ user, loading, settings: [] }}>
      {children}
    </AuthContext.Provider>
  );
};
