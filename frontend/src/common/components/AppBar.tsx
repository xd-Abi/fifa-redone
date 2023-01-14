import { Avatar } from "primereact/avatar";
import { Menubar } from "primereact/menubar";
import AppLogo from "./AppLogo";
import Container from "./Container";

const AppBar = () => {
  const items = [
    {
      label: "Tweets",
    },
    {
      label: "Leaderboard",
    },
    {
      label: "World Cup 2022",
    },
    {
      label: "About",
    },
  ];

  return (
    <Container padding={false}>
      <div className="grid pr-3 pl-3">
        <div className="col">
          <AppLogo size={80} />
        </div>
        <div className="col-5 mt-3 md:col-9 md:mt-0 justify-content-start md:flex md:justify-content-center">
          <Menubar model={items} />
        </div>
        <div className="col"></div>
      </div>
    </Container>
  );
};

export default AppBar;
