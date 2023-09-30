import React from "react";
import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";

import Navigation from "./Navigation";
import { Blues } from "../config/colors";
import Navbar from "./Navbar";
import Profile from "../../dashboard/profile/Profile";
import Stats from "../../dashboard/profile/Stats";
import UserData from "../../dashboard/profile/UserData";
import Footer from "../../footer/Footer";

const Layout = () => {
  const theme = useTheme();
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <>
      <Navigation />

      <Box
        display="flex"
        flexDirection="column"
        flexGrow={1}
        bgcolor={Blues["A200"]}
        height="100%"
        minHeight="100vh"
        boxSizing="border-box"
        alignItems="flex-start"
        width={{ xs: "100%", lg: `calc(100% - ${280}px)` }}
        ml={{ xs: 0, lg: `${280}px` }}
        px={{ xs: 6, md: 8 }}
        py={{ xs: 2, md: 8 }}
      >
        <Box
          display="flex"
          flexGrow={1}
          flexDirection="column"
          justifyContent="space-between"
          height="100%"
        >
          <Box>
            {isUpLg && <Navbar />}
            <Profile />
            <Stats />
            <UserData />
          </Box>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default Layout;
