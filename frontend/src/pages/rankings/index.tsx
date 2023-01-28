import React, { useState } from "react";
import { Container, Spacer } from "@nextui-org/react";
import { AppFooter, AppNavbar, Head } from "@/components";
import { getRankings, GetRankingsResponse } from "@/lib/api";
import TeamRankingsTable from "@/components/team-rankings/table";
import TeamRankingHero from "@/components/team-rankings/hero";

type Props = {
  rankings: GetRankingsResponse;
};

export const getServerSideProps = async () => {
  const rankings = await getRankings();

  return {
    props: {
      rankings,
    },
  };
};

const Rankings = ({ rankings }: Props) => {
  const [displayedTeams, setDisplayedTeams] = useState<"Men" | "Women">("Men");

  return (
    <React.Fragment>
      <Head
        title="Rankings - FIFA"
        description="A redone version of the offical site"
      />
      <AppNavbar />
      <main>
        <Container lg>
          <Spacer y={4} />
          <TeamRankingHero
            current={displayedTeams}
            onSwitch={setDisplayedTeams}
          />
          <TeamRankingsTable
            teams={displayedTeams === "Men" ? rankings.mens : rankings.womens}
          />
        </Container>
      </main>
      <AppFooter />
    </React.Fragment>
  );
};

export default Rankings;
