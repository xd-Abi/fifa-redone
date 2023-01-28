import { styled, CSS } from "@nextui-org/react";

export type IconProps = {
  fill?: string;
  size?: string | number;
  height?: string | number;
  width?: string | number;
  label?: string;
  onClick?: () => void;
  className?: string;
  css?: CSS;
};

export const Icon = styled("svg", {});

export { default as ArrowLeftIcon } from "./arrow-left";
export { default as GithubIcon } from "./github";
export { default as MoonIcon } from "./moon";
export { default as NextIcon } from "./next";
export { default as SunIcon } from "./sun";
export { default as TagIcon } from "./tag";
