import React from "react";
import { AppFooter, AppNavbar, Head } from "@/components";

const Home = () => {
  return (
    <React.Fragment>
      <Head
        title="Home - FIFA"
        description="A redone version of the offical site"
      />
      <AppNavbar />
      <main></main>
      <AppFooter />
    </React.Fragment>
  );
};

export default Home;
