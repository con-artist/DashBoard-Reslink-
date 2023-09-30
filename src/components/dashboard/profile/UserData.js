import React from "react";
import Box from "@mui/material/Box";

import Projects from "./Projects";
import Activity from "./Activity";

const UserData = () => {
  return (
    <Box
      width="100%"
      height="100%"
      boxSizing="border-box"
      mt={{ xs: 18, lg: 16 }}
      display="flex"
      rowGap={6}
      columnGap={8}
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent={{ xs: "center", lg: "space-between" }}
      alignItems={{ xs: "center", lg: "flex-start" }}
    >
      <Projects />
      <Activity />
    </Box>
  );
};

export default UserData;
