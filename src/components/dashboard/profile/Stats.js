import React from "react";
import Box from "@mui/material/Box";
import { useMediaQuery, useTheme } from "@mui/material";

import StatsCard from "./StatsCard";
import useUser from "../../common/context/useUser";

const Stats = () => {
  const { userDetail } = useUser();
  const theme = useTheme();
  const isUplg = useMediaQuery(theme.breakpoints.up("lg"));
  const isdownlg = useMediaQuery(theme.breakpoints.down("lg"));
  const isUpmd = useMediaQuery(theme.breakpoints.up("md"));
  const isDownmd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      width="100%"
      height="100%"
      boxSizing="border-box"
      mt={{ xs: 18, lg: 16 }}
    >
      {isUplg && (
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          columnGap={3}
        >
          {userDetail?.stats?.map((stat, index) => (
            <StatsCard
              key={index}
              name={stat?.name}
              count={stat?.count}
              image={stat?.image}
            />
          ))}
        </Box>
      )}
      {isdownlg && isUpmd && (
        <Box display="flex" flexDirection="column" rowGap={4}>
          <Box
            display="flex"
            // justifyContent="center"
            alignItems="center"
            columnGap={16}
          >
            {userDetail.stats?.slice(0, 2).map((stat, index) => (
              <StatsCard
                key={index}
                name={stat?.name}
                count={stat?.count}
                image={stat?.image}
              />
            ))}
          </Box>
          <Box
            display="flex"
            // justifyContent="center"
            alignItems="center"
            columnGap={16}
          >
            {userDetail?.stats.slice(2, 4).map((stat, index) => (
              <StatsCard
                key={index}
                name={stat?.name}
                count={stat?.count}
                image={stat?.image}
              />
            ))}
          </Box>
        </Box>
      )}
      {isDownmd && (
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          columnGap={3}
          rowGap={2}
        >
          {userDetail?.stats?.map((stat, index) => (
            <StatsCard
              key={index}
              name={stat?.name}
              count={stat?.count}
              image={stat?.image}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Stats;
