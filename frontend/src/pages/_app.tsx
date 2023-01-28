import React, { useEffect } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

import { darkTheme, lightTheme } from "@/themes/shared";
import { UserContextType, UserProvider } from "@/provider";
import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
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
          <UserProvider value={{} as UserContextType}>
            <Component {...pageProps} />
          </UserProvider>
        </NextUIProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
