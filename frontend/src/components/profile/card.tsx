import React, { useState } from "react";
import { Spacer, Text, Popover, Button, Modal, Col } from "@nextui-org/react";
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
  const [isDeletModalVisible, setIsDeletModalVisible] = useState(false);

  const onConfirmDelete = async () => {
    const isAcounteDeleted = await getAuthAPI().deleteAccount();

    if (isAcounteDeleted) {
      window.location.reload();
    } else {
      showErrorToast("Failed to delete account");
    }
  };

  return (
    <React.Fragment>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={isDeletModalVisible}
        onClose={() => setIsDeletModalVisible(false)}
      >
        <Modal.Header>
          <Text id="modal-title" size={18} weight="semibold">
            Are you sure?
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Text
            id="modal-title"
            size={18}
            color="$gray600"
            css={{ textAlign: "center" }}
          >
            Once performed, this action will result in the permanent deletion of
            your account and cannot be undone.
          </Text>
        </Modal.Body>
        <Modal.Footer>
          <Button
            auto
            shadow
            color="error"
            onPress={onConfirmDelete}
            css={{ w: "100%" }}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
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
              <Button
                color="error"
                flat
                onPress={() => setIsDeletModalVisible(true)}
              >
                Delete
              </Button>
            </StyledProfileCardBody>
          </StyledProfileCard>
        </Popover.Trigger>
        <Popover.Content>
          <Text css={{ p: "$10" }}>{user?.uid}</Text>
        </Popover.Content>
      </Popover>
    </React.Fragment>
  );
};

export default ProfileCard;
