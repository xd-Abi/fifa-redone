import React from "react";
import { Row, Spacer } from "@nextui-org/react";
import { Subtitle, Title } from "../primitives";
import { StyledSignUpCol, StyledSignUpFormCol } from "../sign-up/styled";

type Props = {
  children: React.ReactNode;
};

const SignInHero = ({ children }: Props) => {
  return (
    <React.Fragment>
      <StyledSignUpFormCol>
        <Spacer y={2} />
        <Row justify="flex-start">
          <span>
            <Title>Welcome </Title>
            <Title color="violet">back!</Title>
          </span>
        </Row>
        <Row justify="flex-start">
          <span>
            <Title color="pink">Happy </Title>
            <Title>to see </Title>
            <Title>you.</Title>
          </span>
        </Row>
        <Spacer y={3} />
        <Subtitle>Login to continue</Subtitle>
        <Spacer />
        <Row justify="flex-start">{children}</Row>
      </StyledSignUpFormCol>
      <StyledSignUpCol></StyledSignUpCol>
    </React.Fragment>
  );
};

export default SignInHero;
