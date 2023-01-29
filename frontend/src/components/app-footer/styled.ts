import { styled, Container, Text } from "@nextui-org/react";

export const StyledAppFooterContainer = styled(Container, {
  zIndex: "$1",
  padding: "$md $sm",
  "@xsMax": {
    padding: "$sm $xs",
  },
});

export const StyledAppFooterText = styled(Text, {
  fontSize: "$sm",
  color: "$accents7",
  dflex: "center",
});
