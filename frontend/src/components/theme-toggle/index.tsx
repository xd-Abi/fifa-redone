import React from "react";
import { CSS, styled, useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { MoonIcon, SunIcon } from "../icons";
import { useIsMounted } from "@/hooks";

interface Props {
  className?: string;
  css?: CSS;
}

const StyledButton = styled("button", {
  dflex: "center",
  size: "auto",
  cursor: "pointer",
  background: "transparent",
  border: "none",
  padding: 0,
  color: "$gray600",
  "@xsMax": {
    px: "$2",
  },
});

const ThemeToggle = ({ ...props }: Props) => {
  const isMounted = useIsMounted();
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  const handleToggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  if (!isMounted) {
    return <div></div>;
  }

  return (
    <StyledButton
      aria-label="toggle a light and dark color scheme"
      onClick={handleToggleTheme}
      {...props}
    >
      {isDark ? <SunIcon size={20} /> : <MoonIcon size={20} />}
    </StyledButton>
  );
};

export default ThemeToggle;
