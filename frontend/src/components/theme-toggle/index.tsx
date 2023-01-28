import React from "react";
import { useTheme } from "@nextui-org/react";
import { useTheme as useNextTheme } from "next-themes";
import { useIsMounted } from "@/hooks";
import { StyledThemeToggleButton } from "./styled";
import { MoonIcon, SunIcon } from "../icons";

const ThemeToggle = () => {
  const isMounted = useIsMounted();
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  const handleToggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <React.Fragment>
      {isMounted && (
        <StyledThemeToggleButton
          aria-label="toggle a light and dark color scheme"
          onClick={handleToggleTheme}
        >
          {isDark ? <SunIcon size={20} /> : <MoonIcon size={20} />}
        </StyledThemeToggleButton>
      )}
    </React.Fragment>
  );
};

export default ThemeToggle;
