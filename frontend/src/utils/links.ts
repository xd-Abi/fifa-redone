export const isActiveLink = (pathname: string, href: string) => {
  return pathname && pathname.startsWith(href);
};
