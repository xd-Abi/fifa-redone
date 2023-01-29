import { useIsMounted } from "@/hooks";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

const Mounted = ({ children }: Props) => {
  const isMounted = useIsMounted();

  return <React.Fragment>{isMounted && children}</React.Fragment>;
};

export default Mounted;
