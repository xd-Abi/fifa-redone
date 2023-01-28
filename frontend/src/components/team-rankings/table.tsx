import React from "react";
import { Table, Row, Col, Image, Text } from "@nextui-org/react";
import { Team } from "@/lib/models";
import {
  StyledTeamRankingDesktopTable,
  StyledTeamRankingFlagCol,
  StyledTeamRankingMobileTable,
  StyledTeamRankingPositionText,
} from "./styled";
import { useIsMounted } from "@/hooks";

type Props = {
  teams: Team[];
};

const TeamRankingsTable = ({ teams }: Props) => {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return <React.Fragment />;
  }

  return (
    <React.Fragment>
      <StyledTeamRankingDesktopTable shadow={false} aria-label="team rankings">
        <Table.Header>
          <Table.Column>Rank</Table.Column>
          <Table.Column>Name</Table.Column>
          <Table.Column>Total Points</Table.Column>
          <Table.Column>Previous Points</Table.Column>
          <Table.Column>+/-</Table.Column>
        </Table.Header>
        <Table.Body>
          {teams.map((team) => (
            <Table.Row key={team.code}>
              <Table.Cell>
                <Text weight="bold">{team.rank}</Text>
              </Table.Cell>
              <Table.Cell>
                <Row justify="flex-start" align="center">
                  <StyledTeamRankingFlagCol>
                    <Image
                      src={team.flag.src}
                      height={team.flag.height}
                      width={team.flag.width}
                    />
                  </StyledTeamRankingFlagCol>
                  <Col css={{ pl: "$10" }}>
                    <Text>{team.name}</Text>
                  </Col>
                </Row>
              </Table.Cell>
              <Table.Cell>{team.points.total}</Table.Cell>
              <Table.Cell>{team.points.previous}</Table.Cell>
              <Table.Cell>
                <StyledTeamRankingPositionText
                  positive={team.points.total - team.points.previous >= 0}
                >
                  {(team.points.total - team.points.previous).toFixed(2)}
                </StyledTeamRankingPositionText>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Pagination shadow noMargin align="center" rowsPerPage={40} />
      </StyledTeamRankingDesktopTable>
      <StyledTeamRankingMobileTable shadow={false} aria-label="team rankings">
        <Table.Header>
          <Table.Column>RNK</Table.Column>
          <Table.Column>Name</Table.Column>
          <Table.Column>PTS</Table.Column>
          <Table.Column>+/-</Table.Column>
        </Table.Header>
        <Table.Body>
          {teams.map((team) => (
            <Table.Row key={team.code}>
              <Table.Cell>
                <Text weight="bold">{team.rank}</Text>
              </Table.Cell>
              <Table.Cell>
                <Row justify="flex-start" align="center">
                  <StyledTeamRankingFlagCol>
                    <Image src={team.flag.src} />
                  </StyledTeamRankingFlagCol>
                  <Col css={{ pl: "$10" }}>
                    <Text>{team.code}</Text>
                  </Col>
                </Row>
              </Table.Cell>
              <Table.Cell>{team.points.total}</Table.Cell>
              <Table.Cell>
                <StyledTeamRankingPositionText
                  positive={team.points.total - team.points.previous >= 0}
                >
                  {(team.points.total - team.points.previous).toFixed(2)}
                </StyledTeamRankingPositionText>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
        <Table.Pagination shadow noMargin align="center" rowsPerPage={40} />
      </StyledTeamRankingMobileTable>
    </React.Fragment>
  );
};

export default TeamRankingsTable;
