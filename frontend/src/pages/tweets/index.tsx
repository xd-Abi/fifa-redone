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
import {
  AppFooter,
  AppNavbar,
  DefaultTweets,
  Head,
  SendIcon,
  TweetCreator,
  UserTweet,
} from "@/components";
import { Tweet, User } from "@/lib/models";
import getTweetAPI from "@/lib/api/endpoints/tweets";

type Props = {
  tweets: Tweet[];
};

export const getServerSideProps = async () => {
  const tweets = await getTweetAPI().getTweets();
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
            <React.Fragment>
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
