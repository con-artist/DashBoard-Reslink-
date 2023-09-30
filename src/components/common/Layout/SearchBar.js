import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { neutral } from "../config/colors";
import { useMediaQuery, useTheme } from "@mui/material";

const SearchBar = ({ placeholder = "Search", textFieldProps }) => {
  const searchRef = useRef(null);
  const theme = useTheme();
  const isUpLg = useMediaQuery(theme.breakpoints.up("lg"));
  return (
    <TextField
      placeholder={placeholder}
      type="search"
      size="small"
      fullWidth
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ fontSize: 20, color: neutral["A500"] }} />
          </InputAdornment>
        ),
      }}
      inputRef={searchRef}
      sx={{
        "& .Mui-focused": {
          top: 0,
          color: "#000000",
        },
        "& .MuiInputBase-root": {
          borderRadius: 30,
          bgcolor: neutral["800"],
          width: isUpLg ? 341 : 280,
        },
        "& .MuiOutlinedInput-input": {
          color: "#ffffff",
        },
      }}
      {...(textFieldProps || {})}
    />
  );
};

export default SearchBar;
