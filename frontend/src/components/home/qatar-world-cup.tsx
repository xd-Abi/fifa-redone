import { Section, Subtitle, Title } from "@/components";
import { Button, Col, Row, Spacer, Image } from "@nextui-org/react";
import { useRouter } from "next/router";

const QatarWorldCupSection = () => {
  const router = useRouter();

  return (
    <>
      <Spacer css={{ "@xsMax": { mt: "$14" } }} y={3} />
      <Section css={{ zIndex: "$10" }}>
        <Col
          css={{
            "@md": {
              width: "50%",
            },
            "@mdMax": {
              width: "100%",
            },
          }}
        >
          <Spacer css={{ "@xsMax": { display: "none" } }} y={7} />

          <Row justify="flex-start">
            <span>
              <Title>Is </Title>
              <Title color="warning">Qatar 2022 </Title>
              <Title>World Cup</Title>
            </span>
          </Row>
          <Row justify="flex-start">
            <span>
              <Title>the best </Title>
              <Title color="cyan">ever?</Title>
            </span>
          </Row>
          <Spacer y={1} />
          <Subtitle css={{ minWidth: "90%" }}>
            The 2022 FIFA World Cup in Qatar has the potential to be the best
            tournament in history for a number of reasons.
          </Subtitle>
          <Spacer y={2} />
          <Button shadow onClick={(e) => router.push("/world-cup-2022")}>
            Learn more
          </Button>
        </Col>
        <Col
          css={{
            "@md": {
              width: "50%",
            },
            "@mdMax": {
              display: "none",
            },
          }}
        >
          <Spacer y={2} />
          <Image src="/images/world-cup-2022-logo.png" width="80%" />
        </Col>
      </Section>
    </>
  );
};

export default QatarWorldCupSection;
