import React from "react";
import { Drawer, Hidden } from "@material-ui/core";
import { useStyles } from "./HeaderStyles";
import SidenavData from "./SidenavData";

export default function Sidenav({
	mobileOpen,
	handleDrawerOpen,
	handleDrawerClose,
}) {
	const classes = useStyles();

	return (
		<nav className={classes.drawer} aria-label='mailbox folders'>
			<Hidden mdUp implementation='css'>
				<Drawer
					variant='temporary'
					anchor={"left"}
					open={mobileOpen}
					onClose={handleDrawerOpen}
					classes={{
						paper: classes.drawerPaper,
					}}
					ModalProps={{
						keepMounted: true, // Better open performance on mobile.
					}}>
					<SidenavData handleDrawerClose={handleDrawerClose} />
				</Drawer>
			</Hidden>
			<Hidden smDown implementation='css'>
				<Drawer
					classes={{
						paper: classes.drawerPaper,
					}}
					variant='permanent'
					open>
					<SidenavData handleDrawerClose={handleDrawerClose} />
				</Drawer>
			</Hidden>
		</nav>
	);
}
