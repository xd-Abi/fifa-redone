import { NextCallout } from "@/components";
import { Container, Row, Text, Link } from "@nextui-org/react";

const Footer = () => {
  return (
    <Container
      fluid
      lg
      css={{
        zIndex: "$1",
        padding: "$md $sm",
        "@xsMax": {
          padding: "$sm $xs",
        },
      }}
      gap={2}
    >
      <Row justify="flex-end">
        <Text
          span
          className="footer__by"
          css={{
            fontSize: "$sm",
            color: "$accents7",
            dflex: "center",
          }}
        >
          Created&nbsp;by&nbsp;
          <Link href="https://github.com/xd-abi" rel="noreferrer">
            xd Abi
          </Link>
        </Text>
      </Row>
      <Row justify="flex-end">
        <NextCallout />
      </Row>
    </Container>
  );
};

export default Footer;
