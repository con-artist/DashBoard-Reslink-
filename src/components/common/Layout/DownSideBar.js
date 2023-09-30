import React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import { Blues } from "../config/colors";

const DownSideBar = ({ drawer, toggleDrawer, tabs }) => {
  const drawerWidth = 250;

  return (
    <SwipeableDrawer
      anchor="left"
      open={drawer}
      onClose={toggleDrawer(false)}
      onOpen={toggleDrawer(true)}
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      }}
    >
      <Box sx={{ bgcolor: Blues["A100"] }}>{tabs}</Box>
    </SwipeableDrawer>
  );
};

export default DownSideBar;
