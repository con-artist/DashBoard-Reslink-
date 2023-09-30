/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { neutral } from "../common/config/colors";

const Footer = () => {
  return (
    <Box my={8} display="flex" flexDirection="column" rowGap={3}>
      <Divider
        sx={{
          bgcolor: "#475467",
        }}
      />
      <Typography
        variant="h1"
        sx={{
          gridArea: "title",
          fontSize: { xs: 12, md: 14 },
          fontWeight: 400,
          color: neutral["A500"],
          opacity: 0.6,
        }}
      >
        Copyright © 2023. Reslink. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
