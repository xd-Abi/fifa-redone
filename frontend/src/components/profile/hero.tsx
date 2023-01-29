import React from "react";
import { Row, Spacer } from "@nextui-org/react";
import { Title, Subtitle } from "../primitives";
import { StyledProfileFormCol, StyledProfileTabCol } from "./styled";
import ProfileCard from "./card";

type Props = {
  children: React.ReactNode;
};

const ProfileHero = ({ children }: Props) => {
  return (
    <React.Fragment>
      <StyledProfileTabCol>
        <ProfileCard />
      </StyledProfileTabCol>
      <StyledProfileFormCol>
        <Row justify="flex-start">
          <span>
            <Title>Edit </Title>
            <Title color="green">Profile</Title>
          </span>
        </Row>
        <Spacer y={1} />
        <Subtitle>Need some changes?</Subtitle>
        <Spacer y={2} />
        {children}
      </StyledProfileFormCol>
      <StyledProfileTabCol />
    </React.Fragment>
  );
};

export default ProfileHero;
