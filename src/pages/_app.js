import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { themeOptions } from "@/styles/Theme";
import { SessionProvider } from "next-auth/react";

const theme = createTheme(themeOptions);

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </SessionProvider>
  );
}
