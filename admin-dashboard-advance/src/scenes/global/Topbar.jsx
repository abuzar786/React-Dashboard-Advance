import React from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SettingsModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import PersonModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import SearchIcon from "@mui/icons-material/Search";

const topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  return <Box display="flex" justifyContent="space-between"></Box>;
};

export default topbar;
