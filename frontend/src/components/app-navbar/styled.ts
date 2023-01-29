import { styled, Navbar, Badge, Link } from "@nextui-org/react";

export const StyledAppNavbar = styled(Navbar, {
  zIndex: "$max",
});

export const StyledAppNavbarBadge = styled(Badge, {
  px: "$4",
  "@mdMax": {
    display: "none",
  },
});

export const StyledAppNavbarGithubLink = styled(Link, {
  color: "$gray600",
  "@xsMax": {
    display: "none",
  },
});

export const StyledAppNavbarLink = styled(Link, {
  variants: {
    active: {
      true: {
        color: "$foreground",
      },
      false: {
        color: "$gray600",
      },
    },
  },
});
