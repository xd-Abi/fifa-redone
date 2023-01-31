import React from "react";
import { Spacer } from "@nextui-org/react";
import { User } from "@/lib/models";
import UserTweet from "./user-tweet";

const DefaultTweets = () => {
  return (
    <React.Fragment>
      <UserTweet
        creator={
          {
            username: "ESPNUK",
            firstname: "ESPN",
            lastname: "UK",
            picture:
              "https://play-lh.googleusercontent.com/6Jaqkn0Ok9ycbZ0TdDTZ9OAaNfQ3v0J8ftP4QQG-MHnUGIej7-5nLBFTREa0i9EgjHM=w240-h480-rw",
          } as User
        }
        text={"João Cancelo after one week of training at Bayern Munich...."}
        image={
          "https://pbs.twimg.com/media/Fn0GHS6XEAEVOBf?format=jpg&name=small"
        }
      />
      <Spacer y={1} />
      <UserTweet
        creator={
          {
            username: "goal",
            firstname: "GOAL",
            lastname: "",
            picture:
              "https://pbs.twimg.com/profile_images/1457725055178260480/_GOnheh__400x400.jpg",
          } as User
        }
        text={
          "Gavi is registered as Barcelona’s new number 6️⃣ \n It’s like looking in a mirror 😊"
        }
        image={
          "https://pbs.twimg.com/media/Fn0z3h7XoAQ7a3D?format=jpg&name=small"
        }
      />
      <Spacer y={1} />
      <UserTweet
        creator={
          {
            username: "fifa",
            firstname: "FIFA",
            lastname: "Offial",
            picture:
              "https://pbs.twimg.com/profile_images/1604735392875532294/i4rmSg7k_400x400.jpg",
          } as User
        }
        text={"Messi or Ronaldo?"}
        image={
          "https://cdn.theathletic.com/cdn-cgi/image/width=1920,format=auto/https://cdn.theathletic.com/app/uploads/2022/12/05144054/WC22_Editorial_RonaldovsMessi-scaled.jpg"
        }
      />
      <Spacer y={1} />
      <UserTweet
        creator={
          {
            username: "elonmusk",
            firstname: "Mr.",
            lastname: "Tweet",
            picture:
              "https://pbs.twimg.com/profile_images/1590968738358079488/IY9Gx6Ok_400x400.jpg",
          } as User
        }
        text={"CR7 Clear. 🥇"}
        image={"https://pbs.twimg.com/media/FK2ssjZX0AkwLm4.jpg"}
      />
    </React.Fragment>
  );
};

export default DefaultTweets;
