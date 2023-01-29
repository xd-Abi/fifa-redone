import React, { useState } from "react";
import { Container, Spacer } from "@nextui-org/react";
import { AppFooter, AppNavbar, Head } from "@/components";
import TeamRankingsTable from "@/components/team-rankings/table";
import TeamRankingHero from "@/components/team-rankings/hero";
import { Team } from "@/lib/models";
import { getRankingsAPI } from "@/lib/api";

type Rankings = {
  mens: Team[];
  womens: Team[];
};

type Props = {
  rankings: Rankings;
};

export const getServerSideProps = async () => {
  const rankings: Rankings = {
    mens: await getRankingsAPI().getMensRanking(),
    womens: await getRankingsAPI().getWomensRanking(),
  };

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
