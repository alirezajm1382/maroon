import "@/styles/globals.css";
import { ThemeProvider, createTheme, Box } from "@mui/material";
import { themeOptions } from "@/styles/Theme";
import { SessionProvider } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";

const theme = createTheme(themeOptions);

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const router = useRouter();
  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <Layout>
          <AnimatePresence exitBeforeEnter>
            <motion.div
              key={router.route}
              initial="initialState"
              animate="animateState"
              exit="exitState"
              variants={{
                initialState: {
                  opacity: 0,
                },
                animateState: {
                  opacity: 1,
                },
                exitState: {},
              }}
            >
              <Box sx={{ padding: "1rem" }}>
                <Component {...pageProps} />
              </Box>
            </motion.div>
          </AnimatePresence>
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
}
