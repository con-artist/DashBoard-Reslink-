/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Divider from "@mui/material/Divider";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutIcon from "@mui/icons-material/Logout";

import TabListItem from "./TabListItem";
import { LOGO } from "../utils/utils";
import { neutral } from "../config/colors";

const TabList = ({ handleClick }) => {
  const SideBarTabs = useMemo(
    () => [
      {
        id: "dashboard",
        name: "Dashboard",
        route: "/dashboard",
        Icon: (
          <EqualizerIcon
            sx={{
              color: neutral["A500"],
              fontSize: { xs: 25, md: 30 },
            }}
          />
        ),
      },
      {
        id: "projects",
        name: "Projects",
        route: "/projects",
        Icon: (
          <LayersOutlinedIcon
            sx={{
              color: neutral["A500"],
              fontSize: { xs: 25, md: 30 },
            }}
          />
        ),
      },
      {
        id: "staffing",
        name: "Staffing",
        route: "/Staffing",
        Icon: (
          <PeopleAltOutlinedIcon
            sx={{
              color: neutral["A500"],
              fontSize: { xs: 25, md: 30 },
            }}
          />
        ),
      },
      {
        id: "messages",
        name: "Messages",
        route: "/messages",
        Icon: (
          <MessageOutlinedIcon
            sx={{
              color: neutral["A500"],
              fontSize: { xs: 25, md: 30 },
            }}
          />
        ),
      },
    ],
    []
  );
  const BottomTabs = useMemo(
    () => [
      {
        id: "support",
        name: "Support",
        route: "/support",
        Icon: (
          <EqualizerIcon
            sx={{
              color: neutral["A500"],
              fontSize: { xs: 25, md: 30 },
            }}
          />
        ),
      },
      {
        id: "settings",
        name: "Settings",
        route: "/settings",
        Icon: (
          <SettingsOutlinedIcon
            sx={{
              color: neutral["A500"],
              fontSize: { xs: 25, md: 30 },
            }}
          />
        ),
      },
    ],
    []
  );
  return (
    <Box
      pt={{ xs: 3, lg: 4 }}
      pb={6}
      minHeight="100vh"
      boxSizing="border-box"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <Box px={4}>
          <Link to="dashboard" style={{ textDecoration: "none" }}>
            <Box display="flex" alignItems="center" columnGap={3}>
              <Box display="flex">
                <img
                  src={LOGO}
                  alt="logo"
                  style={{ width: "50px", height: "50px" }}
                />
              </Box>

              <Typography
                variant="h2"
                component="span"
                sx={{
                  color: neutral["A500"],
                  letterSpacing: 8,
                  fontWeight: 400,
                  fontSize: { xs: 18, lg: 18 },
                }}
              >
                RESLINK
              </Typography>
            </Box>
          </Link>
        </Box>

        <List sx={{ my: 8 }}>
          {SideBarTabs.map(({ id, Icon, route, name }) => (
            <TabListItem
              key={id}
              Icon={Icon}
              route={route}
              name={name}
              id={id}
              handleClick={handleClick}
            />
          ))}
        </List>
      </Box>
      <Box display="flex" flexDirection="column" rowGap={3}>
        <List sx={{ mt: 8 }}>
          {BottomTabs.map(({ id, Icon, route, name }) => (
            <TabListItem
              key={id}
              Icon={Icon}
              route={route}
              name={name}
              id={id}
              handleClick={handleClick}
            />
          ))}
        </List>
        <Divider
          sx={{
            bgcolor: "#475467",
            mx: 3,
          }}
        />
        <Box
          display="flex"
          alignItems="center"
          columnGap={{ xs: 2, md: 2.5 }}
          sx={{
            mt: 2,
            cursor: "pointer",
          }}
        >
          <Box
            display="flex"
            ml={6}
            alignItems="center"
            columnGap={{ xs: 2, md: 2.5 }}
          >
            <Avatar
              alt="user Avatar"
              sx={{
                width: { xs: 35, md: 40 },
                height: { xs: 35, md: 40 },
                bgcolor: "#18244D",
              }}
            >
              O
            </Avatar>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              rowGap={0.5}
            >
              <Typography
                variant="h1"
                sx={{
                  gridArea: "title",
                  fontSize: { xs: 12, md: 14 },
                  fontWeight: 600,
                  color: neutral["A500"],
                }}
              >
                Olivia Rhye
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  gridArea: "email",
                  fontSize: { xs: 12, md: 14 },
                  fontWeight: 400,
                  color: neutral["A500"],
                }}
              >
                olivia@untitledui.com
              </Typography>
            </Box>
          </Box>
          <LogoutIcon
            sx={{
              color: neutral["A500"],
              fontSize: { xs: 20, md: 20 },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default TabList;
