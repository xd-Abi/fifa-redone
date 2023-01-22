import { Paragraph, Section, Subtitle, Title } from "@/components";
import { useIsMounted } from "@/hooks";
import {
  Button,
  Col,
  Image,
  Row,
  Spacer,
  Table,
  User,
} from "@nextui-org/react";
import { useRouter } from "next/router";

const LeaderboardSection = () => {
  const router = useRouter();
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <></>;
  }

  return (
    <>
      <Spacer css={{ "@xsMax": { mt: "$14" } }} y={3} />
      <Spacer css={{ "@xsMax": { display: "none" } }} y={7} />

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
          <Row justify="flex-start">
            <span>
              <Title color="green">Brazil </Title>
              <Title>is ranked</Title>
            </span>
          </Row>
          <Row justify="flex-start">
            <span>
              <Title>número </Title>
              <Title color="warning">#1</Title>
            </span>
          </Row>
          <Spacer y={1} />
          <Subtitle css={{ minWidth: "90%" }}>
            Brazil secures number one Position on the Global Leaderboard: A Look
            at the latest Rankings.
          </Subtitle>
          <Spacer y={2} />
          <Button shadow onClick={(e) => router.push("/leaderboard")}>
            See Leaderboard
          </Button>
        </Col>
        <Col
          css={{
            "@md": {
              width: "45%",
            },
            "@mdMax": {
              width: "100%",
              marginTop: "$14",
            },
          }}
        >
          <Table
            aria-label="Example table with static content"
            css={{
              height: "auto",
              w: "90%",
            }}
          >
            <Table.Header>
              <Table.Column>Rank</Table.Column>
              <Table.Column>Team</Table.Column>
              <Table.Column>Total Points</Table.Column>
              <Table.Column>Previous Points</Table.Column>
              <Table.Column>+/-</Table.Column>
            </Table.Header>
            <Table.Body>
              <Table.Row key="bra-1">
                <Table.Cell>
                  <Paragraph
                    color="warning"
                    css={{
                      fontWeight: "bold",
                    }}
                  >
                    #1
                  </Paragraph>
                </Table.Cell>
                <Table.Cell>Brazil</Table.Cell>
                <Table.Cell>1840.77</Table.Cell>
                <Table.Cell>1841.3</Table.Cell>
                <Table.Cell>
                  <Paragraph color="warning">-0.53</Paragraph>
                </Table.Cell>
              </Table.Row>
              <Table.Row key="arg-1">
                <Table.Cell>
                  <Paragraph
                    color="pink"
                    css={{
                      fontWeight: "bold",
                    }}
                  >
                    #2
                  </Paragraph>
                </Table.Cell>
                <Table.Cell>Argentina</Table.Cell>
                <Table.Cell>1838.38</Table.Cell>
                <Table.Cell>1773.88</Table.Cell>
                <Table.Cell>
                  <Paragraph color="green">64.50</Paragraph>
                </Table.Cell>
              </Table.Row>
              <Table.Row key="fra-1">
                <Table.Cell>
                  <Paragraph
                    color="cyan"
                    css={{
                      fontWeight: "bold",
                    }}
                  >
                    #3
                  </Paragraph>
                </Table.Cell>
                <Table.Cell>France</Table.Cell>
                <Table.Cell>1823.29</Table.Cell>
                <Table.Cell>1759.78</Table.Cell>
                <Table.Cell>
                  <Paragraph color="green">63.61</Paragraph>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Col>
      </Section>
    </>
  );
};

export default LeaderboardSection;
