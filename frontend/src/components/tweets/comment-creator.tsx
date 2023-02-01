import {useState} from "react";
import {Card, Col, Spacer, Input} from "@nextui-org/react";
import {ProtectedComponent} from "../auth";
import {SendIcon} from "../icons";
import {StyledCommentSendButton} from "./styled";
import {getTweetsAPI} from "@/lib/api";

type Props = {
  tweetId: string;
};

const CommentCreator = ({tweetId}: Props) => {
  const [text, setText] = useState("");

  const onCreate = () => {
    if (text.length === 0) {
      return;
    }

    getTweetsAPI()
      .addComment({
        tweetId,
        text,
      })
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <ProtectedComponent>
      <Spacer y={1} />
      <Card isHoverable variant="bordered" css={{w: "100%"}}>
        <Card.Body css={{h: "8vh"}}>
          <Input
            aria-label="Type your tweet"
            placeholder="Write your comment..."
            shadow={false}
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </Card.Body>
        <Card.Footer>
          <Col />
          <Col css={{w: "fit-content"}}>
            <StyledCommentSendButton
              onClick={onCreate}
              disabled={text.length === 0}
            >
              <SendIcon />
            </StyledCommentSendButton>
          </Col>
        </Card.Footer>
      </Card>
      <Spacer y={1} />
    </ProtectedComponent>
  );
};

export default CommentCreator;
