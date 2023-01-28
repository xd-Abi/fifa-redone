import { styled } from "@nextui-org/react";

export const StyledThemeToggleButton = styled("button", {
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
