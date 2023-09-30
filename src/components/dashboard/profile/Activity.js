import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import useUser from "../../common/context/useUser";
import { Blues, neutral } from "../../common/config/colors";
import ActivityCard from "./ActivityCard";

const Activity = () => {
  const { userDetail } = useUser();
  return (
    <Box
      display="flex"
      flexDirection="column"
      borderRadius="8px"
      rowGap={4}
      maxWidth="514px"
      width="100%"
      sx={{
        bgcolor: Blues["A300"],
        px: 6,
        py: 4,
        border: "1px solid #3C3E42",
      }}
    >
      <Box>
        <Typography
          variant="h3"
          sx={{
            color: neutral["A500"],
            fontWeight: 600,
            fontSize: { xs: 18, lg: 22 },
          }}
        >
          Recent Activities
        </Typography>
      </Box>
      <Divider
        sx={{
          bgcolor: "#475467",
        }}
      />

      <Box display="flex" flexDirection="column" alignItems="center" rowGap={2}>
        {userDetail?.activity?.map((act, index) => (
          <ActivityCard
            key={index}
            name={act?.name}
            time={act?.time}
            colour={act?.colour}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Activity;
