import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { neutral } from "../../common/config/colors";

const ProjectCard = ({ name, status, colour }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="4px"
      width="100%"
      sx={{
        bgcolor: "#21282C",
        px: 4,
        py: 2,
        border: "1px solid #3C3E42",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          color: neutral["A500"],
          fontWeight: 400,
          fontSize: { xs: 12, lg: 14 },
        }}
      >
        {name}
      </Typography>

      <Box
        display="flex"
        columnGap={2}
        alignItems="center"
        justifyContent="flex-start"
        width={115}
      >
        <Box
          bgcolor={colour}
          borderRadius="50%"
          sx={{ width: { xs: 8, lg: 12 }, height: { xs: 8, lg: 12 } }}
        ></Box>
        <Typography
          variant="h2"
          sx={{
            color: neutral["A500"],
            fontWeight: 400,
            fontSize: { xs: 12, lg: 14 },
          }}
        >
          {status}
        </Typography>{" "}
      </Box>
    </Box>
  );
};

export default ProjectCard;
