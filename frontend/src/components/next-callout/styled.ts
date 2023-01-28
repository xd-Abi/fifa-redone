import { styled, Link, Text } from "@nextui-org/react";
import { darkTheme, lightTheme } from "@/themes/shared";

export const StyledNextCalloutLink = styled(Link, {
  mt: "$6",
  d: "flex",
  jc: "flex-end",
  ai: "center",
  "& svg": {
    [`.${darkTheme} &`]: {
      color: "$white",
    },
    [`.${lightTheme} &`]: {
      color: "$black",
    },
  },
});

export const StyledNextCalloutText = styled(Text, {
  my: 0,
  mr: "$4",
});
