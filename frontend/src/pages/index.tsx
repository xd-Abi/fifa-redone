import { LeaderboardSection, QatarWorldCupSection } from "@/components";
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
} from "@nextui-org/react";

const Home = () => {
  return (
    <DefaultLayout title="Home - FIFA">
      <Container
        lg
        css={{
          position: "relative",
          minHeight: "65vh",
          "@mdMax": {
            overflowX: "hidden",
          },
        }}
      >
        <QatarWorldCupSection />
      </Container>
      <Container
        lg
        css={{
          position: "relative",
          minHeight: "70vh",
          "@mdMax": {
            overflowX: "hidden",
          },
        }}
      >
        <LeaderboardSection />
      </Container>
      <Spacer
        y={10}
        css={{
          "@lg": {
            display: "none",
          },
        }}
      />
    </DefaultLayout>
  );
};

export default Home;
