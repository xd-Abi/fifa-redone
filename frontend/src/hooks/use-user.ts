import { User } from "@/lib/models";
import { UserContext } from "@/provider";
import { useContext } from "react";

const useUser = (): User | undefined => {
  const context = useContext(UserContext);
  return context.user;
};

export default useUser;
