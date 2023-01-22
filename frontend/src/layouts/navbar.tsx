import { Link, Navbar as NextNavbar, Spacer } from "@nextui-org/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import {
  Logo,
  Badge,
  ThemeToggle,
  GithubIcon,
  UserDropdown,
} from "@/components";
import { Route } from "@/lib/route";
import { isActiveLink } from "@/utils";

interface Props {
  routes: Route[];
}

const MobileNavigation = dynamic(
  () => import("../components/mobile-navigation"),
  {
    ssr: false,
  }
);

const Navbar = ({ routes }: Props) => {
  const router = useRouter();

  return (
    <NextNavbar variant="sticky" isBordered>
      <NextNavbar.Brand>
        <MobileNavigation routes={routes} active={router.pathname} />
        <Spacer x={1} />
        <Link href="/">
          <Logo />
        </Link>
        <Spacer x={0.4} />
        <Badge
          solid
          css={{
            px: "$4",
            "@mdMax": {
              display: "none",
            },
          }}
          type="secondary"
        >
          Beta
        </Badge>
      </NextNavbar.Brand>
      <NextNavbar.Content hideIn={"md"}>
        {routes.map((route, index) => (
          <Link
            href={route.href}
            key={`${route.title}-${index}`}
            css={{
              color: isActiveLink(router.pathname, route.href)
                ? "red"
                : "$gray600",
            }}
          >
            {route.title}
          </Link>
        ))}
      </NextNavbar.Content>
      <NextNavbar.Content gap={13}>
        <Link
          css={{
            color: "$gray600",
            "@xsMax": {
              display: "none",
            },
          }}
          href="https://github.com/xd-Abi/FIFA-Redone"
        >
          <GithubIcon />
        </Link>
        <ThemeToggle />
        <UserDropdown />
      </NextNavbar.Content>
    </NextNavbar>
  );
};

export default Navbar;
