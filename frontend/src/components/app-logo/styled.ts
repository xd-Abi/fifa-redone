import { styled } from "@nextui-org/react";

export const StyledAppLogo = styled("svg", {
  "& path": { fill: "$foreground" },
  variants: {
    auto: {
      true: {
        display: "none",
        "@mdMax": {
          display: "block",
        },
      },
    },
  },
});
