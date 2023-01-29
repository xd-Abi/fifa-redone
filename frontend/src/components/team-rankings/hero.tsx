import React from "react";
import { Button, Row, Spacer } from "@nextui-org/react";
import { Title, Subtitle } from "../primitives";

type Props = {
  current: "Men" | "Women";
  onSwitch: (type: "Men" | "Women") => void;
};

const TeamRankingHero = ({ current, onSwitch }: Props) => {
  return (
    <React.Fragment>
      {current === "Men" && (
        <React.Fragment>
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
          <Subtitle>
            Brazil still is rankend one on the Global Leaderboard
          </Subtitle>
        </React.Fragment>
      )}
      {current === "Women" && (
        <React.Fragment>
          <Row justify="flex-start">
            <span>
              <Title color="cyan">USA </Title>
              <Title>is ranked</Title>
            </span>
          </Row>
          <Row justify="flex-start">
            <span>
              <Title>number </Title>
              <Title color="warning">#1</Title>
            </span>
          </Row>
          <Spacer y={1} />
          <Subtitle>
            USA secures number one Position on the Global Womens Leaderboard
          </Subtitle>
        </React.Fragment>
      )}
      <Spacer y={2} />
      <Button.Group>
        <Button onPress={() => onSwitch("Men")} disabled={current === "Men"}>
          Men
        </Button>
        <Button
          onPress={() => onSwitch("Women")}
          disabled={current === "Women"}
        >
          Women
        </Button>
      </Button.Group>
    </React.Fragment>
  );
};

export default TeamRankingHero;
