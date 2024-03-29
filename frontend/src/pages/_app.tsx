import React, { useEffect, useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";
import { Provider as GlobalStoreProvider, useDispatch } from "react-redux";
import type { AppProps } from "next/app";

import { darkTheme, lightTheme } from "@/themes/shared";
import "@/styles/globals.css";
import { getAuthAPI, getMeAPI } from "@/lib/api";
import GlobalStore from "@/lib/store";
import { userChange } from "@/lib/store/auth";
import { Loading } from "@/components";

const AppWrapper = ({ ...props }: AppProps & any) => {
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
          <GlobalStoreProvider store={GlobalStore}>
            <App {...props} />
          </GlobalStoreProvider>
        </NextUIProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};

const App = ({ Component, pageProps }: AppProps & any) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

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

    const loadUser = async () => {
      const user = getAuthAPI().isUserSignedIn()
        ? await getMeAPI().getMe()
        : undefined;

      dispatch(userChange({ user }));
    };

    loadUser().then(() => setIsLoading(false));
  }, []);

  return (
    <Loading isLoading={isLoading}>
      <Component {...pageProps} />
    </Loading>
  );
};

export default AppWrapper;
