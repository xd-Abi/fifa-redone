import React, { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import { darkTheme, lightTheme } from "@/themes/shared";
import { UserContextType, UserProvider } from "@/provider";
import "@/styles/globals.css";
import { getMe } from "@/lib/api";

const App = ({ Component, pageProps, me }: AppProps & any) => {
  const [user, setUser] = useState({} as UserContextType);

  useEffect(() => {
    console.log(
      `%c

    ███████╗██╗███████╗ █████╗ 
    ██╔════╝██║██╔════╝██╔══██╗
    █████╗  ██║█████╗  ███████║
    ██╔══╝  ██║██╔══╝  ██╔══██║
    ██║     ██║██║     ██║  ██║
    ╚═╝     ╚═╝╚═╝     ╚═╝  ╚═╝      

There is nothing of interest here and
         CR7 is the goat.
    `,
      "color:#FF5160;font-size:20px;"
    );

    getMe().then((data) => {
      setUser({
        user: data,
      });
    });
  }, []);

  return (
    <React.Fragment>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <UserProvider value={user}>
            <Component {...pageProps} />
          </UserProvider>
        </NextUIProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
