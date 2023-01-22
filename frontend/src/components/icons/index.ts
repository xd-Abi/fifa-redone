import { styled, CSS } from "@nextui-org/react";

export interface IconProps {
  fill?: string;
  size?: string | number;
  height?: string | number;
  width?: string | number;
  label?: string;
  onClick?: () => void;
  className?: string;
  css?: CSS;
}

export const Icon = styled("svg", {});

export { default as GithubIcon } from "./Github";
export { default as MoonIcon } from "./Moon";
export { default as NextIcon } from "./Next";
export { default as SunIcon } from "./Sun";
export { default as TagIcon } from "./Tag";
