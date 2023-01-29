import React from "react";
import { useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { StyledThemeToggleButton } from "./styled";
import { MoonIcon, SunIcon } from "../icons";
import Mounted from "../mounted";

const ThemeToggle = () => {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  const handleToggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Mounted>
      <StyledThemeToggleButton
        aria-label="toggle a light and dark color scheme"
        onClick={handleToggleTheme}
      >
        {isDark ? <SunIcon size={20} /> : <MoonIcon size={20} />}
      </StyledThemeToggleButton>
    </Mounted>
  );
};

export default ThemeToggle;
