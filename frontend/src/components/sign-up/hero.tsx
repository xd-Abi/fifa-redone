import React from "react";
import { Row, Spacer, Image } from "@nextui-org/react";
import { Title } from "../primitives";
import { StyledSignUpCol, StyledSignUpFormCol } from "./styled";

type Props = {
  children: React.ReactNode;
};

const SignUpHero = ({ children }: Props) => {
  return (
    <React.Fragment>
      <StyledSignUpFormCol>
        <Spacer y={2} />
        <Row justify="flex-start">
          <span>
            <Title>Do </Title>
            <Title color="cyan">more.</Title>
          </span>
        </Row>
        <Row justify="flex-start">
          <span>
            <Title>Join the </Title>
            <Title color="warning">community.</Title>
          </span>
        </Row>
        <Spacer y={3} />
        <Row justify="flex-start">{children}</Row>
      </StyledSignUpFormCol>
      <StyledSignUpCol></StyledSignUpCol>
    </React.Fragment>
  );
};

export default SignUpHero;
