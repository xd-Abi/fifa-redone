import React from "react";

type Props = {
  isLoading: boolean;
  children?: React.ReactNode;
};

const Loading = ({ isLoading, children }: Props) => {
  return <React.Fragment>{!isLoading && children}</React.Fragment>;
};

export default Loading;
