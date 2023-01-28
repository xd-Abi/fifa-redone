import { Link, Navbar, Spacer } from "@nextui-org/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import AppLogo from "../app-logo";
import { GithubIcon } from "../icons";
import ThemeToggle from "../theme-toggle";
import UserDropdown from "../user-dropdown";
import { DefualtRoutes } from "./routes";
import {
  StyledAppNavbar,
  StyledAppNavbarBadge,
  StyledAppNavbarGithubLink,
  StyledAppNavbarLink,
} from "./styled";

const MobileNavigation = dynamic(() => import("../mobile-navigation"), {
  ssr: false,
});

const AppNavbar = () => {
  const router = useRouter();

  return (
    <StyledAppNavbar variant="sticky" disableShadow>
      <Navbar.Content>
        <MobileNavigation routes={DefualtRoutes} active={router.pathname} />
        <Navbar.Brand>
          <Link href="/">
            <AppLogo />
          </Link>
          <Spacer x={0.2} />
          <StyledAppNavbarBadge color="secondary" variant="flat">
            Beta
          </StyledAppNavbarBadge>
        </Navbar.Brand>
      </Navbar.Content>
      <Navbar.Content hideIn="md">
        {DefualtRoutes.map((route, index) => (
          <StyledAppNavbarLink
            href={route.href}
            key={`${route.title}-${index}`}
            active={route.href === router.pathname}
          >
            {route.title}
          </StyledAppNavbarLink>
        ))}
      </Navbar.Content>
      <Navbar.Content gap={13}>
        <StyledAppNavbarGithubLink href="https://github.com/xd-Abi/FIFA-Redone">
          <GithubIcon />
        </StyledAppNavbarGithubLink>
        <ThemeToggle />
        <UserDropdown />
      </Navbar.Content>
    </StyledAppNavbar>
  );
};

export default AppNavbar;
