import { styled } from "@nextui-org/react";

export const StyledTweetsSendButton = styled("button", {
  // reset button styles
  background: "transparent",
  border: "none",
  padding: 0,
  // styles
  width: "24px",
  margin: "0 10px",
  dflex: "center",
  bg: "$primary",
  borderRadius: "$rounded",
  cursor: "pointer",
  transition: "opacity 0.25s ease 0s, transform 0.25s ease 0s",
  svg: {
    size: "100%",
    padding: "4px",
    transition: "transform 0.25s ease 0s, opacity 200ms ease-in-out 50ms",
    boxShadow: "0 5px 20px -5px rgba(0, 0, 0, 0.1)",
    path: {
      fill: "white",
    },
  },
  "&:hover": {
    opacity: 0.8,
  },
  "&:active": {
    transform: "scale(0.9)",
    svg: {
      transform: "translate(24px, -24px)",
      opacity: 0,
    },
  },
  "&:disabled": {
    transform: "none",
    bg: "$gray500",
    svg: {
      transform: "none",
      opacity: 100,
    },
  },
});

export const StyledTweetsLikeButton = styled("button", {
  // reset button styles
  background: "transparent",
  border: "none",
  padding: 0,
  // styles
  width: "24px",
  margin: "0 10px",
  dflex: "center",
  svg: {
    size: "100%",
    boxShadow: "0 5px 20px -5px rgba(0, 0, 0, 0.1)",
    path: {
      fill: "transparent",
      stroke: "$red600",
    },
  },
  "&:disabled": {
    svg: {
      path: {
        fill: "transparent",
      },
    },
  },
  variants: {
    variant: {
      filled: {
        svg: {
          path: {
            fill: "$red600",
            stroke: "$red600",
          },
        },
      },
      default: {},
    },
  },
});
