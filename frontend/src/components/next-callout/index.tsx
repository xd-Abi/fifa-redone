import { NextIcon } from "../icons";
import { StyledNextCalloutLink, StyledNextCalloutText } from "./styled";

const NextCallout = () => {
  return (
    <StyledNextCalloutLink href="https://nextjs.org/" rel="noopener noreferrer">
      <StyledNextCalloutText>Made with</StyledNextCalloutText>
      <NextIcon width={60} />
    </StyledNextCalloutLink>
  );
};

export default NextCallout;
