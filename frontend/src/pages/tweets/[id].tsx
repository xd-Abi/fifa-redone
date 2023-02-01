import {
  AppNavbar,
  TweetCreator,
  DefaultTweets,
  UserTweet,
  AppFooter,
  Head,
} from "@/components";
import React from "react";
import {Container, Spacer} from "@nextui-org/react";
import {getTweetsAPI} from "@/lib/api";
import {Tweet} from "@/lib/models";
import {GetServerSidePropsContext} from "next";
import {useRouter} from "next/router";
import UserComment from "@/components/tweets/user-comment";

type Props = {
  tweet: Tweet;
};

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext<{id: string}>) => {
  const tweet = await getTweetsAPI().getTweet(params?.id ?? "");
  return {
    props: {
      tweet,
    },
  };
};

const DetailedTweet = ({tweet}: Props) => {
  const router = useRouter();
  const {id} = router.query;

  return (
    <React.Fragment>
      <Head
        title={`${tweet.text.substring(0, 9)}...`}
        description="Share your thoughts with the world"
      />
      <AppNavbar />
      <main>
        <Container xs>
          <Spacer y={2} />
          <UserTweet {...tweet} />
          {tweet.comments.map(comment => (
            <React.Fragment key={comment.id}>
              <Spacer y={1} />
              <UserComment {...comment} />
            </React.Fragment>
          ))}
        </Container>
      </main>
      <AppFooter />
    </React.Fragment>
  );
};

export default DetailedTweet;
