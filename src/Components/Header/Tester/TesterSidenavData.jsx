import React from "react";
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PostAddIcon from "@material-ui/icons/PostAdd";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { NavLink } from "react-router-dom";
import { useStyles } from "../Admin/HeaderStyles";

export default function SidenavData({ handleDrawerClose }) {
    const classes = useStyles();
   
    const listItemData = [
        { label: "TestingDashboard", link: "/", icon: <DashboardIcon /> },
        { label: "Add Bugs", link: "/bugs", icon: <PostAddIcon /> },
        { label: "Logout", link: "/logout", icon: <ExitToAppIcon /> },
    ];
    
    return (
        <List>
            {listItemData.map((item, i) => (
                <Button
                    size='small'
                    className={classes.navButton}
                    onClick={() => handleDrawerClose()}
                    key={i}>
                    <ListItem
                        exact
                        component={NavLink}
                        to={item.link}
                        className={classes.navlinks}
                        activeClassName={classes.activeNavlinks}>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText>{item.label}</ListItemText>
                    </ListItem>
                </Button>
            ))}
        </List>
    );
}
