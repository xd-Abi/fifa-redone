import * as React from "react";
import { IconProps } from ".";

const ArrowLeftIcon = ({
  fill,
  size,
  width = 24,
  height = 24,
  ...props
}: IconProps) => {
  return (
    <svg
      width={width || 40}
      height={height || 24}
      viewBox="0 0 40 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M35 12L5.25195 12.1113"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.252 19.1113L5.25195 12.1113L12.252 5.11133"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLeftIcon;
