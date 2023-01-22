import {
  AnimatedText,
  GithubIcon,
  Section,
  StyledCardBlur,
  Subtitle,
  TagIcon,
  Title,
} from "@/components";
import DefaultLayout from "@/layouts/default";
import {
  Button,
  Card,
  Col,
  Grid,
  Row,
  Text,
  Spacer,
  Container,
  StyledCard,
  Input,
} from "@nextui-org/react";

const SignUp = () => {
  return (
    <DefaultLayout title="Sign up - FIFA">
      <Container
        lg
        css={{
          minHeight: "55vh",
        }}
      >
        <Spacer css={{ "@xsMax": { mt: "$14" } }} y={9} />
        <Section css={{ zIndex: "$10" }}>
          <Col
            css={{
              "@md": {
                width: "65%",
              },
              "@mdMax": {
                width: "100%",
              },
            }}
          >
            <Row justify="flex-start">
              <span>
                <Title>Do </Title>
                <Title color="cyan">more.</Title>
              </span>
            </Row>
            <Row justify="flex-start">
              <span>
                <Title>Join the </Title>
                <Title color="warning">community.</Title>
              </span>
            </Row>
            <Spacer y={1} />
            <Subtitle>
              Sign up now to join the football community and connect with fans
              from around the world.
            </Subtitle>
          </Col>
          <Col
            css={{
              "@md": {
                width: "35%",
              },
              "@mdMax": {
                width: "100%",
                marginTop: "$18",
              },
            }}
          >
            <Card>
              <Card.Body css={{ p: "$10" }}>
                <Row justify="center">
                  <Text h2>Sign Up</Text>
                </Row>
                <Row justify="center">
                  <Subtitle
                    css={{
                      textAlign: "center",
                    }}
                  >
                    Choose a username.
                  </Subtitle>
                </Row>
                <Spacer y={1.5} />
                <Row justify="center">
                  <Input
                    placeholder="Username"
                    size="xl"
                    width="100%"
                    bordered
                    clearable
                    aria-label="Enter username"
                    contentLeft={<TagIcon fill="gray" />}
                  />
                </Row>
                <Spacer y={1.5} />
                <Row justify="center">
                  <Button shadow size="md">
                    Continue
                  </Button>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Section>
      </Container>
    </DefaultLayout>
  );
};

export default SignUp;
