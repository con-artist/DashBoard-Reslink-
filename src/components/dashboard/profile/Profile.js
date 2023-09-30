import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import useUser from "../../common/context/useUser";
import { neutral } from "../../common/config/colors";

const Profile = () => {
  const { userDetail } = useUser();
  return (
    <Box
      width="100%"
      height="100%"
      boxSizing="border-box"
      mt={{ xs: 18, lg: 16 }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="flex-start"
        rowGap={3}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          rowGap={2}
        >
          <Typography
            variant="h3"
            sx={{
              color: neutral["A500"],
              fontWeight: 500,
              fontSize: { xs: 24, lg: 30 },
            }}
          >
            {` Welcome back, ${userDetail?.name}`}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              color: neutral["A500"],
              fontWeight: 400,
              fontSize: { xs: 12, lg: 16 },
            }}
          >
            Track, manage researchers and submissions.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
