import React from "react";
import { Spacer, Text, Popover, Button } from "@nextui-org/react";
import {
  StyledProfileAvatar,
  StyledProfileCard,
  StyledProfileCardBody,
} from "./styled";
import { useUser } from "@/hooks";
import { getAuthAPI } from "@/lib/api";
import { showErrorToast } from "../toast";

const ProfileCard = () => {
  const { user } = useUser();

  const onDelete = async () => {
    const isAcounteDeleted = await getAuthAPI().deleteAccount();

    if (isAcounteDeleted) {
      window.location.reload();
    } else {
      showErrorToast("Failed to delete account");
    }
  };

  return (
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
            <Button color="error" flat onPress={onDelete}>
              Delete
            </Button>
          </StyledProfileCardBody>
        </StyledProfileCard>
      </Popover.Trigger>
      <Popover.Content>
        <Text css={{ p: "$10" }}>{user?.uid}</Text>
      </Popover.Content>
    </Popover>
  );
};

export default ProfileCard;
