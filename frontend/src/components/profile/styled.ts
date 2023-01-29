import { styled, Col, Button, Card, Avatar } from "@nextui-org/react";

export const StyledProfileTabCol = styled(Col, {
  "@sm": {
    maxWidth: "20%",
    mr: "$20",
  },
  "@smMax": {
    marginBottom: "$20",
  },
});

export const StyledProfileFormCol = styled(Col, {
  "@sm": {
    maxWidth: "40%",
  },
  "@smMax": {
    marginBottom: "$40",
  },
});

export const StyledProfileCard = styled(Card, {
  background: "transparent",
});

export const StyledProfileCardBody = styled(Card.Body, {
  p: "$8",
  textAlign: "center",
});

export const StyledProfileAvatar = styled(Avatar, {
  size: "100%",

  boxShadow: "0 4px 20px 1px var(--nextui-colors-backgroundAlpha);",
});

export const StyledForm = styled("form", {
  width: "100%",
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
