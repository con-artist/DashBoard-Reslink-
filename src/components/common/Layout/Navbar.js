import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { useMediaQuery, useTheme } from "@mui/material";

import SearchBar from "./SearchBar";
import { Green } from "../config/colors";

const Navbar = () => {
  const theme = useTheme();
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
    >
      <SearchBar />
      {isUpLg && (
        <Box display="flex" columnGap={3} alignItems="center">
          <NotificationsOutlinedIcon />

          <Button
            variant="contained"
            startIcon={<AddOutlinedIcon />}
            sx={{
              fontSize: 14,
              fontWeight: 600,
              px: 3,
              py: 2,
              width: 210,
              textTransform: "none",
              borderRadius: 5,
              bgcolor: Green["A100"],
              "&:hover": {
                bgcolor: Green["A100"],
              },
            }}
          >
            Create New Project
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;
