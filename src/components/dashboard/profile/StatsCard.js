import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { Blues, neutral } from "../../common/config/colors";

const StatsCard = ({ name, count, image }) => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      borderRadius="6px"
      width={{ xs: 244, lg: 244 }}
      height={{ xs: 122, lg: 122 }}
      sx={{
        bgcolor: Blues["A300"],
        px: 6,
        py: 3,
        border: "1px solid #3C3E42",
      }}
    >
      <Box display="flex" flexDirection="column" rowGap={2}>
        <Typography
          variant="h2"
          sx={{
            color: neutral["A500"],
            fontWeight: 600,
            fontSize: { xs: 28, lg: 36 },
          }}
        >
          {count}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            color: neutral["A500"],
            fontWeight: 500,
            fontSize: { xs: 14, lg: 16 },
          }}
        >
          {name}
        </Typography>
      </Box>
      <img src={image} alt="logo" style={{ width: "45px", height: "45px" }} />
    </Box>
  );
};

export default StatsCard;
