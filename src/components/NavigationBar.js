import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Stack,
  Button,
  Typography,
  Avatar,
} from "@mui/material";
import {
  Home as HomeIcon,
  Search as SearchIcon,
  FeaturedPlayList as PlaylistIcon,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { Yellowtail } from "@next/font/google";

const yellowTail = Yellowtail({
  preload: true,
  subsets: ["latin"],
  weight: ["400"],
});

export function BottomBar() {
  const router = useRouter();
  const [value, setValue] = useState(0);
  useEffect(() => {
    switch (value) {
      case 0:
        router.replace("/");
        break;
      case 1:
        router.replace("/search");
        break;
      case 2:
        router.replace("/playlists");
        break;
      case 3:
        router.replace("/panel");
        break;
    }
  }, [value]);
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          background: "#0d0d10",
          position: "fixed",
          bottom: "0",
          width: "100%",
          maxWidth: "672px",
          height: "8vh",
        }}
      >
        <BottomNavigationAction
          centerRipple
          label="Home"
          icon={<HomeIcon sx={{ mb: "3px" }} />}
        />
        <BottomNavigationAction
          centerRipple
          label="Search"
          icon={<SearchIcon sx={{ mb: "3px" }} />}
        />
        <BottomNavigationAction
          centerRipple
          label="Playlists"
          icon={<PlaylistIcon sx={{ mb: "3px" }} />}
        />
        <BottomNavigationAction
          centerRipple
          label="Account"
          icon={
            <Avatar
              sx={
                value === 3
                  ? {
                      height: "28px",
                      width: "28px",
                      mb: "3px",
                      border: "2px solid #ff8a80",
                      transitionDuration: "0.5s",
                    }
                  : {
                      height: "28px",
                      width: "28px",
                      mb: "3px",
                      border: "2px solid #ffffff",
                      transitionDuration: "0.5s",
                    }
              }
              alt={session.user.name}
              src={session.user.image}
            />
          }
        />
      </BottomNavigation>
    );
  } else {
    return (
      <Stack
        direction="row"
        spacing={2}
        sx={{
          width: "100%",
          maxWidth: "672px",
          position: "fixed",
          justifyContent: "center",
          bottom: "20px",
        }}
      >
        <Button
          variant="outlined"
          sx={{ padding: "1rem", fontSize: "20px", width: "300px" }}
          onClick={() => {
            signIn({ callbackUrl: "/panel" });
          }}
        >
          Sign in
        </Button>
      </Stack>
    );
  }
}

export function TopBar() {
  return (
    <Box sx={{ padding: "1rem", top: "0px", textAlign: "center" }}>
      <Typography component="h1" className={yellowTail.className} fontSize={45}>
        <Link href="/">Maroon.</Link>
      </Typography>
    </Box>
  );
}
