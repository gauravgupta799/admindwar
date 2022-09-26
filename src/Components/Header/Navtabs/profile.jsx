import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  ListItem,
  ListItemText,
  Menu,
  MenuItem,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
// import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// import image from "./unnamed.jpg";
// import { useStyles } from "../Admin/HeaderStyles";

export default function Profile() {
  // const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const userEmail = JSON.parse(localStorage.getItem('user')).split('')[0];

  const dropDownData = [
    { label: "settings", icon: <SettingsIcon /> },
    // { label: "Logout", link: "/logout" ,icon: <ExitToAppIcon /> },
  ];

  return (
    <Box>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
        startIcon={<Avatar style={{backgroundColor:"blue",fontWeight:"bold"}}>{userEmail}</Avatar>}
        ></Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}>
        {dropDownData.map((item, i) => (
          <MenuItem key={i} component={ListItem} onClick={handleClose}>
            {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
            <ListItemText>{item.label}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
