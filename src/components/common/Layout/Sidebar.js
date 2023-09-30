import React from "react";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";

import { Blues } from "../config/colors";
// import { BLUR_HERO_IMAGE } from "../utils/utils";

const drawerWidth = 280;
const Sidebar = ({ tabs }) => {
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          whiteSpace: "nowrap",

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: Blues["A100"],

            boxSizing: "border-box",
            "&::-webkit-scrollbar": {
              display: "none", // Hide the scrollbar in Chrome, Safari, and Opera
            },
          },
        }}
        variant="permanent"
        open={true}
      >
        <Box sx={{ bgcolor: Blues["A100"] }}>{tabs}</Box>
      </Drawer>
    </>
  );
};

export default Sidebar;
