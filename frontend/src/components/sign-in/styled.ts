import { styled, Col, Button } from "@nextui-org/react";

export const StyledSignInCol = styled(Col, {
  "@sm": {
    maxWidth: "60%",
  },
  "@smMax": {
    display: "none",
  },
});

export const StyledSignInFormCol = styled(Col, {
  "@sm": {
    maxWidth: "40%",
  },
  "@smMax": {
    minWidth: "100%",
    marginBottom: "$40",
  },
});

export const StyledForm = styled("form", {
  width: "80%",
  "@smMax": {
    minWidth: "100%",
  },
});

export const StyledFormSubmitButton = styled(Button, {
  width: "1200px",
});

export const StyledFormBackButton = styled("button", {
  bg: "transparent",
  border: "transparent",
  "&:hover": {
    "& path": {
      stroke: "$foreground",
    },
  },
});
