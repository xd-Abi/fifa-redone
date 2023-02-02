import React, {useState, useEffect} from "react";
import {Avatar, Card, Col, Image, Row, Text} from "@nextui-org/react";
import {Tweet} from "@/lib/models";
import {DeleteIcon, HeartIcon, SpeachBubbleIcon} from "../icons";
import {
  StyledTweetsCommentContainer,
  StyledTweetsDeleteButton,
  StyledTweetsLikeButton,
} from "./styled";
import {useUser} from "@/hooks";
import {getTweetsAPI} from "@/lib/api";

type Props = Tweet;

const UserTweet = ({id, text, image, creator, likes, comments}: Props) => {
  const user = useUser();
  const [isLiked, setIsLiked] = useState(false);
  const [likesAmount, setLikesAmount] = useState(likes.length);

  useEffect(() => {
    const isTweetLikedByUser = () => {
      if (user.user !== undefined) {
        for (const like of likes) {
          if (like.uid === user.user.uid) {
            return true;
          }
        }
      }

      return false;
    };

    setIsLiked(isTweetLikedByUser());
  }, []);

  const onLikeButtonClick = () => {
    if (!user.isAuthenticated) {
      return;
    }

    setLikesAmount(isLiked ? likesAmount - 1 : likesAmount + 1);
    setIsLiked(!isLiked);

    getTweetsAPI().likeTweet(id);
  };

  return (
    <Card
      isHoverable
      variant="bordered"
      css={{w: "100%", p: "$5", bg: "transparent"}}
    >
      <Card.Header>
        <Row>
          <Col css={{w: "fit-content", mr: "$7"}}>
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
        {text.split("\n").map(line => (
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
        <Col css={{w: "fit-content"}}>
          <StyledTweetsLikeButton
            disabled={!user.isAuthenticated}
            variant={isLiked ? "filled" : "default"}
            onClick={onLikeButtonClick}
          >
            <HeartIcon />
          </StyledTweetsLikeButton>
        </Col>
        <Col css={{w: "fit-content"}}>
          <Text color="$gray500">{likesAmount}</Text>
        </Col>
        <Col css={{w: "fit-content", ml: "$10"}}>
          <StyledTweetsCommentContainer>
            <SpeachBubbleIcon fill="none" />
          </StyledTweetsCommentContainer>
        </Col>
        <Col css={{w: "fit-content"}}>
          <Text color="$gray500">{comments.length}</Text>
        </Col>
        <Col></Col>
        <Col css={{w: "fit-content"}}>
          <StyledTweetsDeleteButton>
            <DeleteIcon size={20} />
          </StyledTweetsDeleteButton>
        </Col>
      </Card.Footer>
    </Card>
  );
};

export default UserTweet;
