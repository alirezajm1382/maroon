import "@/styles/globals.css";
import { ThemeProvider, createTheme } from "@mui/material";
import { themeOptions } from "@/styles/Theme";

const theme = createTheme(themeOptions);

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
