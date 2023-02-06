import Head from "next/head";
import { Yellowtail } from "@next/font/google";
import { Box, Stack, Button, Typography } from "@mui/material";

const yellowTail = Yellowtail({ subsets: ["latin"], weight: ["400"] });

export default function Home() {
  return (
    <div style={{ padding: "1rem" }}>
      <Head>
        <title>Maroon.</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box sx={{ padding: "1rem", top: "0px", textAlign: "center" }}>
        <Typography
          component="h1"
          className={yellowTail.className}
          fontSize={45}
        >
          Maroon.
        </Typography>
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%,-50%)",
          width: "80%",
          maxWidth: "600px",
        }}
      >
        <Typography fontSize={20} marginBottom="5rem" component="p">
          Maroon. is a free music streaming service powered by an adventagous
          full-stack framework by Vercel, based on the amazing React frontend
          framework; Next.js!
        </Typography>
      </Box>
      <Stack
        direction="column"
        spacing={2}
        sx={{
          width: "300px",
          position: "absolute",
          transform: "translate(-50%, 0)",
          left: "50%",
          bottom: "20px",
        }}
      >
        <Button variant="outlined" sx={{ padding: "1rem" }}>
          Log in via Google
        </Button>
        <Button variant="outlined" sx={{ padding: "1rem" }}>
          Log in via GitHub
        </Button>
      </Stack>
    </div>
  );
}
