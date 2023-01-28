import React from "react";
import { User } from "@/lib/models";

export type UserContextType = {
  user: User | undefined;
};

export const UserContext = React.createContext<UserContextType>(
  {} as UserContextType
);
