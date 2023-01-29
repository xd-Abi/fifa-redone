import { useUser } from "@/hooks";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {
  children?: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const router = useRouter();
  const { isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }, []);

  return <React.Fragment>{isAuthenticated && children}</React.Fragment>;
};

export default ProtectedRoute;
