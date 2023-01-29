import React from "react";
import {
  Row,
  Spacer,
  Card,
  Text,
  Avatar,
  Tooltip,
  Popover,
} from "@nextui-org/react";
import { Title, Subtitle } from "../primitives";
import {
  StyledProfileAvatar,
  StyledProfileCard,
  StyledProfileCardBody,
  StyledProfileFormCol,
  StyledProfileTabCol,
} from "./styled";
import { useUser } from "@/hooks";

type Props = {
  children: React.ReactNode;
};

const ProfileHero = ({ children }: Props) => {
  const { user } = useUser();

  return (
    <React.Fragment>
      <StyledProfileTabCol>
        <Popover>
          <Popover.Trigger>
            <StyledProfileCard isPressable isHoverable variant="bordered">
              <StyledProfileCardBody>
                <StyledProfileAvatar
                  src="/images/def-avatar.png"
                  size="xl"
                  bordered
                  css={{
                    size: "100%",
                  }}
                />
                <Spacer y={1} />
                <Text h5 weight={"bold"}>
                  {user?.username}
                </Text>
                <Text h5 weight={"bold"} color="$gray500">
                  {user?.email}
                </Text>
              </StyledProfileCardBody>
            </StyledProfileCard>
          </Popover.Trigger>

          <Popover.Content>
            <Text css={{ p: "$10" }}>{user?.uid}</Text>
          </Popover.Content>
        </Popover>
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
