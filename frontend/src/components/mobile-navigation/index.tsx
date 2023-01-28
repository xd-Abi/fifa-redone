import React from "react";
import { Route } from "../app-navbar/routes";
import { Navbar } from "@nextui-org/react";
import { StyledAppNavbarLink } from "../app-navbar/styled";

type Props = {
  active: string;
  routes: Route[];
};

const MobileNavigation = ({ active, routes }: Props) => {
  return (
    <React.Fragment>
      <Navbar.Toggle showIn="md" />
      <Navbar.Collapse>
        {routes.map((route) => (
          <Navbar.CollapseItem key={route.title}>
            <StyledAppNavbarLink
              href={route.href}
              active={route.href === active}
            >
              {route.title}
            </StyledAppNavbarLink>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </React.Fragment>
  );
};

export default MobileNavigation;
