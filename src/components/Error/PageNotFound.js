import React from "react";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

const PageNotFound = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        columnGap: 2,
        bgcolor: "#F8F9FD",
        px: 2,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontSize: { xs: 24, lg: 28 },
          color: "#000000",
          fontWeight: 600,
        }}
      >
        404
      </Typography>
      <Box>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ height: 50 }}
        />
      </Box>
      <Typography
        variant="h1"
        sx={{
          fontSize: { xs: 24, lg: 24 },
          color: "#000000",
          fontWeight: 400,
        }}
      >
        This page could not be found.
      </Typography>
    </Box>
  );
};

export default PageNotFound;
