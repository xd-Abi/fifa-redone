import { styled, Table, Col } from "@nextui-org/react";

export const StyledTeamRankingFlagCol = styled(Col, {
  w: "fit-content !important",
});

export const StyledTeamRankingMobileTable = styled(Table, {
  "@smMin": {
    d: "none",
  },
});

export const StyledTeamRankingDesktopTable = styled(Table, {
  "@smMax": {
    d: "none",
  },
});

export const StyledTeamRankingPositionText = styled("p", {
  variants: {
    positive: {
      false: {
        color: "$red600",
      },
      true: {
        color: "$green600",
      },
    },
  },
});
