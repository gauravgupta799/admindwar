import React from "react";
import {
	AppBar,
	Box,
	Hidden,
	IconButton,
	Toolbar,
	Typography,
} from "@material-ui/core";
import Profile from "./Navtabs/profile";
import { useStyles } from "./Admin/HeaderStyles";
// import Messages from "./Navtabs/Messages";
import MenuIcon from "@material-ui/icons/Menu";
// import Notification from "./Navtabs/notification";

export default function Navbar({ handleDrawerOpen }) {
	const classes = useStyles();
	const isAdmin = localStorage.getItem('role');
	const userEmail = JSON.parse(localStorage.getItem('user'));

	return (
		<AppBar position='fixed'>
			<Toolbar className={classes.toolbar}>
				<Typography variant='h4' >
					{ isAdmin === '1' ? "Admin" : "Tester" }
				</Typography>
				<Hidden smDown>
					<Box style={{ display: "flex" }}>
						<Typography variant='h6' className={classes.logo}>
							{userEmail}
						</Typography>
						<Profile />
					</Box>
				</Hidden>
				<Hidden mdUp>
					<IconButton color='inherit' onClick={handleDrawerOpen}>
						<MenuIcon />
					</IconButton>
				</Hidden>
			</Toolbar>
		</AppBar>
	);
}
