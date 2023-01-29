import { Col, Row, Spacer } from "@nextui-org/react";
import { ArrowLeftIcon } from "../icons";
import { Subtitle } from "../primitives";
import { StyledFormBackButton } from "./styled";

type Props = {
  subtitle: string;
  onBackButtonPress: VoidFunction;
};

export const SignUpSubtitle = ({ subtitle, onBackButtonPress }: Props) => {
  return (
    <Row align="center">
      <Col css={{ w: "fit-content" }}>
        <StyledFormBackButton onClick={() => onBackButtonPress()}>
          <ArrowLeftIcon fill="gray" />
        </StyledFormBackButton>
      </Col>
      <Col css={{ w: "fit-content" }}>
        <Spacer x={0.2} />
      </Col>
      <Col css={{ h: "45px" }}>
        <Subtitle>{subtitle}</Subtitle>
      </Col>
    </Row>
  );
};
