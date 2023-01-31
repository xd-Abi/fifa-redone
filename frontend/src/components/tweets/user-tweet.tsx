import React, { useState, useEffect } from "react";
import { Avatar, Card, Col, Image, Row, Text } from "@nextui-org/react";
import { Tweet } from "@/lib/models";
import { HeartIcon } from "../icons";
import { StyledTweetsLikeButton } from "./styled";
import { useUser } from "@/hooks";

type Props = Tweet;

const UserTweet = ({ id, text, image, creator, likes }: Props) => {
  const user = useUser();
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    const isTweetLikedByUser = () => {
      if (user.user !== undefined && likes.includes(user.user)) {
        return true;
      }

      return false;
    };

    setIsLiked(isTweetLikedByUser());
  }, []);

  const onLikeButtonClick = () => {
    if (!user.isAuthenticated) {
      return;
    }

    setIsLiked(!isLiked);
  };

  return (
    <Card
      isHoverable
      variant="bordered"
      css={{ w: "100%", p: "$5", bg: "transparent" }}
    >
      <Card.Header>
        <Row>
          <Col css={{ w: "fit-content", mr: "$7" }}>
            <Avatar
              bordered
              as="button"
              color="primary"
              size="xl"
              src={creator.picture ?? "/images/def-avatar.png"}
            />
          </Col>
          <Col>
            <Row>
              <Text
                weight={"bold"}
              >{`${creator.firstname} ${creator.lastname}`}</Text>
            </Row>
            <Row>
              <Text>{`@${creator.username}`}</Text>
            </Row>
          </Col>
        </Row>
      </Card.Header>
      <Card.Body>
        {text.split("\n").map((line) => (
          <Text key={line}>{line}</Text>
        ))}
        {image !== null && image?.length !== 0 && (
          <Image
            src={image ?? ""}
            alt="image"
            css={{
              mt: "$10",
              borderRadius: "$lg",
            }}
          />
        )}
      </Card.Body>
      <Card.Footer>
        <Col css={{ w: "fit-content" }}>
          <StyledTweetsLikeButton
            disabled={!user.isAuthenticated}
            variant={isLiked ? "filled" : "default"}
            onClick={onLikeButtonClick}
          >
            <HeartIcon />
          </StyledTweetsLikeButton>
        </Col>
      </Card.Footer>
    </Card>
  );
};

export default UserTweet;
