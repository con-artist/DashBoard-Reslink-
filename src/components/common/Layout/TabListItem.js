import React from "react";
import { useLocation, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/material";
import { neutral } from "../config/colors";

const openedMixin = (theme) => ({
  backgroundColor: neutral["800"],
  width: 220,
  borderRadius: 6,
  "& .MuiTypography-h6": {
    color: neutral["A500"],
    fontSize: 18,
    fontWeight: 500,
    lineHeight: "24px",
  },
});

const closedMixin = (theme) => ({
  bgcolor: "white",
  width: 210,
  "& .MuiTypography-h6": {
    color: neutral["A500"],
    fontSize: 18,
    fontWeight: 500,
    lineHeight: "24px",
  },
});

const MuiListItem = styled(ListItem, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  ...(open && {
    ...openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
  }),
}));

const TabListItem = ({ Icon, route, name, id, handleClick }) => {
  const location = useLocation();
  return (
    <Box display="flex">
      <Link to={route} style={{ textDecoration: "none" }}>
        <Box py={1.5}>
          <MuiListItem
            open={
              location.pathname === route || location.pathname === route + "/"
            }
            sx={{
              cursor: "pointer",
              ml: 3,
              py: 1,
              columnGap: 1.5,
            }}
            onClick={handleClick}
          >
            <ListItemIcon style={{ minWidth: "20px" }}>{Icon}</ListItemIcon>
            <ListItemText
              primaryTypographyProps={{
                variant: "h6",
                fontSize: { xs: 16, md: 18 },
              }}
            >
              {name}
            </ListItemText>
          </MuiListItem>
        </Box>
      </Link>
    </Box>
  );
};

export default TabListItem;
