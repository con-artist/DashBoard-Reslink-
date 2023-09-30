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
      mt={{ xs: 18, xl: 16 }}
      display="flex"
      rowGap={6}
      columnGap={8}
      flexDirection={{ xs: "column", xl: "row" }}
      justifyContent={{ xs: "center", xl: "space-between" }}
      alignItems={{ xs: "center", xl: "flex-start" }}
    >
      <Projects />
      <Activity />
    </Box>
  );
};

export default UserData;
