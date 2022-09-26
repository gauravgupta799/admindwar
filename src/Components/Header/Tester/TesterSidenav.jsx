import React from "react";
import { Drawer, Hidden } from "@material-ui/core";
import { useStyles } from "../Admin/HeaderStyles";
import TesterSidenavData from "./TesterSidenavData";

export default function TesterSidenav({
    mobileOpen,
    handleDrawerOpen,
    handleDrawerClose,
}) {
    const classes = useStyles();

    return (
        <nav className={classes.drawer} aria-label='mailbox folders'>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
                    <TesterSidenavData handleDrawerClose={handleDrawerClose} />
                </Drawer>
            </Hidden>
            <Hidden smDown implementation='css'>
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant='permanent'
                    open>
                    <TesterSidenavData handleDrawerClose={handleDrawerClose} />
                </Drawer>
            </Hidden>
        </nav>
    );
}
