import { User } from "@/lib/models";
import { GlobalStoreType } from "@/lib/store";
import { useSelector } from "react-redux";

const useUser = (): User | undefined => {
  const userStore = useSelector((state: GlobalStoreType) => state.user);
  return userStore.user;
};

export default useUser;
