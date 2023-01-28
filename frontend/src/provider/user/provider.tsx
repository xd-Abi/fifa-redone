import React from "react";
import { UserContext, UserContextType } from "./context";

type Props = {
  value: UserContextType;
  children: React.ReactNode;
};

export const UserProvider = ({ value, children }: Props) => {
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
