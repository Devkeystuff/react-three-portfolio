/* eslint-disable filenames-simple/naming-convention */
import "@/styles/globals.css";
import theme from "@/styles/theme";
import { ThemeProvider } from "@mui/system";
import type { AppProps } from "next/app";
import { ReactElement } from "react";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
