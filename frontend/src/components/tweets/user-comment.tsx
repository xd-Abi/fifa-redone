import React from "react";
import {Avatar, Card, Col, Row, Text} from "@nextui-org/react";
import {Comment} from "@/lib/models";

type Props = Comment;

const UserComment = ({text, creator}: Props) => {
  return (
    <Card variant="bordered" css={{w: "100%", p: "$5", bg: "transparent"}}>
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
      </Card.Body>
    </Card>
  );
};

export default UserComment;
