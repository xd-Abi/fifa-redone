import React from "react";
import { Container, Spacer } from "@nextui-org/react";
import {
  AppFooter,
  AppNavbar,
  DefaultTweets,
  Head,
  TweetCreator,
  UserTweet,
} from "@/components";
import { Tweet } from "@/lib/models";
import { getTweetsAPI } from "@/lib/api";

type Props = {
  tweets: Tweet[];
};

export const getServerSideProps = async () => {
  const tweets = await getTweetsAPI().getTweets();
  return {
    props: {
      tweets,
    },
  };
};

const Tweets = ({ tweets }: Props) => {
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
          <TweetCreator />
          <Spacer y={2} />
          <DefaultTweets />
          {tweets.map((tweet) => (
            <React.Fragment key={tweet.id}>
              <Spacer y={1} />
              <UserTweet {...tweet} />
            </React.Fragment>
          ))}
        </Container>
      </main>
      <AppFooter />
    </React.Fragment>
  );
};

export default Tweets;
