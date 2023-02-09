import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Stack,
  Button,
  Typography,
} from "@mui/material";
import {
  Home as HomeIcon,
  Search as SearchIcon,
  FeaturedPlayList as PlaylistIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import { useState } from "react";

export function NavigationBarAuthed() {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => setValue(newValue)}
      showLabels
      sx={{
        background: "#0d0d10",
        position: "fixed",
        bottom: "0",
        width: "100vw",
        height: "9vh",
      }}
    >
      <BottomNavigationAction centerRipple label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction
        centerRipple
        label="Search"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        centerRipple
        label="Playlist"
        icon={<PlaylistIcon />}
      />
      <BottomNavigationAction
        centerRipple
        label="Settings"
        icon={<SettingsIcon />}
      />
    </BottomNavigation>
  );
}

export function NavigationBarUnauthed() {
  const router = useRouter();
  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        width: "100%",
        position: "fixed",
        justifyContent: "center",
        bottom: "20px",
      }}
    >
      <Button
        variant="outlined"
        sx={{ padding: "1rem", fontSize: "20px", width: "300px" }}
        onClick={() => {
          router.replace("panel");
        }}
      >
        Sign in
      </Button>
    </Stack>
  );
}
