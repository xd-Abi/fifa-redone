import { Route } from "@/lib/route";
import { isActiveLink } from "@/utils";
import { Link, Navbar as NextNavbar } from "@nextui-org/react";

interface Props {
  active: string;
  routes: Route[];
}

const MobileNavigation = ({ active, routes }: Props) => {
  return (
    <>
      <NextNavbar.Toggle showIn="md" />
      <NextNavbar.Collapse>
        {routes.map((route) => (
          <NextNavbar.CollapseItem key={route.title}>
            <Link
              href={route.href}
              css={{
                color: isActiveLink(active, route.href)
                  ? "$foreground"
                  : "$gray600",
              }}
            >
              {route.title}
            </Link>
          </NextNavbar.CollapseItem>
        ))}
      </NextNavbar.Collapse>
    </>
  );
};

export default MobileNavigation;
