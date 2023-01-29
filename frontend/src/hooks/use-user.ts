import { getAuthAPI } from "@/lib/api";
import { User } from "@/lib/models";
import { GlobalStoreType } from "@/lib/store";
import { useSelector } from "react-redux";

type UseUserType = {
  user: User | undefined;
  isAuthenticated: boolean | undefined;
  logout: VoidFunction;
};

const useUser = (): UseUserType => {
  const authStore = useSelector((state: GlobalStoreType) => state.auth);

  return {
    user: authStore.user,
    isAuthenticated: authStore.user !== undefined,
    logout: () => {
      getAuthAPI().signOut();
      window.location.reload();
    },
  };
};

export default useUser;
