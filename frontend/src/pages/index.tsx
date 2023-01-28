import React from "react";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { AppFooter, AppNavbar, Head } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
}
