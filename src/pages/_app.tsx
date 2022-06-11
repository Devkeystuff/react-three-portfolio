/* eslint-disable filenames-simple/naming-convention */
import { Navbar } from "@/components";
import "@/styles/globals.css";
import theme from "@/styles/theme";
import { ThemeProvider } from "@mui/system";
import { motion } from "framer-motion";
import type { AppProps } from "next/app";
import { ReactElement } from "react";
import "../../public/fonts/style.css";

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <motion.div initial={"initial"} animate={"animate"}>
        <Navbar />
        <Component {...pageProps} />
      </motion.div>
    </ThemeProvider>
  );
}

export default MyApp;
