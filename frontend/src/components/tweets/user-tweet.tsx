import React from "react";
import { Avatar, Card, Col, Image, Row, Text } from "@nextui-org/react";
import { Tweet } from "@/lib/models";

type Props = Tweet;

const UserTweet = ({ text, image, creator }: Props) => {
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
        <Text>{text}</Text>
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
    </Card>
  );
};

export default UserTweet;
