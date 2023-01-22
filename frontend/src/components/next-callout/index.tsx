import { Link, Text } from "@nextui-org/react";
import { darkTheme, lightTheme } from "@/theme/shared";
import { NextIcon } from "../icons";

const NextCallout = () => {
  return (
    <Link
      css={{
        mt: "$6",
        d: "flex",
        jc: "flex-end",
        ai: "center",
        "& svg": {
          [`.${darkTheme} &`]: {
            color: "$white",
          },
          [`.${lightTheme} &`]: {
            color: "$black",
          },
        },
      }}
      href="https://nextjs.org/"
      rel="noopener noreferrer"
    >
      <Text b css={{ my: 0, mr: "$4" }}>
        Made with
      </Text>
      <NextIcon width={60} />
    </Link>
  );
};

export default NextCallout;
