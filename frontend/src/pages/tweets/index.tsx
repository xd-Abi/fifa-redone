import React from "react";
import {
  Avatar,
  Button,
  Card,
  Col,
  Container,
  Image,
  Input,
  Row,
  Spacer,
  styled,
  Text,
  Textarea,
} from "@nextui-org/react";
import { AppFooter, AppNavbar, Head } from "@/components";

export const SendIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  label,
  className,
  ...props
}: any) => {
  return (
    <svg
      data-name="Iconly/Curved/Lock"
      xmlns="http://www.w3.org/2000/svg"
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <g transform="translate(2 2)">
        <path
          d="M19.435.582A1.933,1.933,0,0,0,17.5.079L1.408,4.76A1.919,1.919,0,0,0,.024,6.281a2.253,2.253,0,0,0,1,2.1L6.06,11.477a1.3,1.3,0,0,0,1.61-.193l5.763-5.8a.734.734,0,0,1,1.06,0,.763.763,0,0,1,0,1.067l-5.773,5.8a1.324,1.324,0,0,0-.193,1.619L11.6,19.054A1.91,1.91,0,0,0,13.263,20a2.078,2.078,0,0,0,.25-.01A1.95,1.95,0,0,0,15.144,18.6L19.916,2.525a1.964,1.964,0,0,0-.48-1.943"
          fill={fill}
        />
      </g>
    </svg>
  );
};

export const SendButton = styled("button", {
  // reset button styles
  background: "transparent",
  border: "none",
  padding: 0,
  // styles
  width: "24px",
  margin: "0 10px",
  dflex: "center",
  bg: "$primary",
  borderRadius: "$rounded",
  cursor: "pointer",
  transition: "opacity 0.25s ease 0s, transform 0.25s ease 0s",
  svg: {
    size: "100%",
    padding: "4px",
    transition: "transform 0.25s ease 0s, opacity 200ms ease-in-out 50ms",
    boxShadow: "0 5px 20px -5px rgba(0, 0, 0, 0.1)",
    path: {
      fill: "white",
    },
  },
  "&:hover": {
    opacity: 0.8,
  },
  "&:active": {
    transform: "scale(0.9)",
    svg: {
      transform: "translate(24px, -24px)",
      opacity: 0,
    },
  },
});

const Tweets = () => {
  return (
    <React.Fragment>
      <Head
        title="Tweets - FIFA"
        description="Share your thoughts with the world"
      />
      <AppNavbar />
      <main>
        <Container xs>
          <Spacer y={2} />
          <Card isHoverable variant="bordered" css={{ w: "100%" }}>
            <Card.Body>
              <Textarea
                aria-label="Type your tweet"
                placeholder="What's new?"
                onChange={(e) => console.log(e)}
              />
            </Card.Body>
            <Card.Footer>
              <Col></Col>
              <Col css={{ w: "fit-content" }}>
                <SendButton>
                  <SendIcon />
                </SendButton>
              </Col>
            </Card.Footer>
          </Card>
          <Spacer y={1} />

          <Spacer y={1} />
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
                    src="https://pbs.twimg.com/profile_images/1604735392875532294/i4rmSg7k_400x400.jpg"
                  />
                </Col>
                <Col>
                  <Row>
                    <Text weight={"bold"}>FIFA Offical</Text>
                  </Row>
                  <Row>
                    <Text>@fifa</Text>
                  </Row>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Text>Messi or Ronaldo?</Text>
              <Image
                src="https://cdn.theathletic.com/cdn-cgi/image/width=1920,format=auto/https://cdn.theathletic.com/app/uploads/2022/12/05144054/WC22_Editorial_RonaldovsMessi-scaled.jpg"
                css={{
                  mt: "$10",
                  borderRadius: "$lg",
                }}
              />
            </Card.Body>
          </Card>
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
                    src="https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg"
                  />
                </Col>
                <Col>
                  <Row>
                    <Text weight={"bold"}>Mr. Tweet</Text>
                  </Row>
                  <Row>
                    <Text>@elonmusk</Text>
                  </Row>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <Text>CR7 Clear</Text>
              <Image
                src="https://pbs.twimg.com/media/FK2ssjZX0AkwLm4.jpg"
                css={{
                  mt: "$10",
                  borderRadius: "$lg",
                }}
              />
            </Card.Body>
          </Card>
        </Container>
      </main>
      <AppFooter />
    </React.Fragment>
  );
};

export default Tweets;
