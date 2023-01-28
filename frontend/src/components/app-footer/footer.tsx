import { Row, Link } from "@nextui-org/react";
import NextCallout from "../next-callout";
import { StyledAppFooterContainer, StyledAppFooterText } from "./styled";

const AppFooter = () => {
  return (
    <StyledAppFooterContainer fluid lg gap={2}>
      <Row justify="flex-end">
        <StyledAppFooterText>
          Created&nbsp;by&nbsp;
          <Link href="https://github.com/xd-abi" rel="noreferrer">
            xd Abi
          </Link>
        </StyledAppFooterText>
      </Row>
      <Row justify="flex-end">
        <NextCallout />
      </Row>
    </StyledAppFooterContainer>
  );
};

export default AppFooter;
