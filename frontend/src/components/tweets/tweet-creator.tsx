import { useState } from "react";
import { Card, Textarea, Col } from "@nextui-org/react";
import { ProtectedComponent } from "../auth";
import { SendIcon } from "../icons";
import { SendButton } from "./styled";
import getTweetAPI from "@/lib/api/endpoints/tweets";

const TweetCreator = () => {
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const onCreate = () => {
    if (text.length === 0) {
      return;
    }

    getTweetAPI()
      .createTweet({
        text,
        image,
      })
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <ProtectedComponent>
      <Card isHoverable variant="bordered" css={{ w: "100%" }}>
        <Card.Body>
          <Textarea
            aria-label="Type your tweet"
            placeholder="What's new?"
            value={text}
            shadow={false}
            onChange={(e) => setText(e.target.value)}
          />
        </Card.Body>
        <Card.Footer>
          <Col></Col>
          <Col css={{ w: "fit-content" }}>
            <SendButton onClick={onCreate} disabled={text.length === 0}>
              <SendIcon />
            </SendButton>
          </Col>
        </Card.Footer>
      </Card>
    </ProtectedComponent>
  );
};

export default TweetCreator;
