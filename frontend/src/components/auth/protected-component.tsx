import React from "react";
import { useUser } from "@/hooks";

type Props = {
  children?: React.ReactNode;
};

const ProtectedComponent = ({ children }: Props) => {
  const { isAuthenticated } = useUser();

  return <React.Fragment>{isAuthenticated && children}</React.Fragment>;
};

export default ProtectedComponent;
