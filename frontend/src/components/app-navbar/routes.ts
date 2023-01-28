export type Route = {
  title: string;
  href: string;
};

export const DefualtRoutes = [
  {
    title: "Tweets",
    href: "/tweets",
  },
  {
    title: "World Cup 2022",
    href: "/world-cup-2022",
  },
  {
    title: "Rankings",
    href: "/rankings",
  },
  {
    title: "About",
    href: "/about",
  },
] as Route[];
