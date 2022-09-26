import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Navbar from "../Navbar";
import TesterSidenav from "./TesterSidenav";
import { Switch, Route, useHistory} from "react-router-dom";
import Dashboard from "../../BodyComponent/Dashboard/Dashboard";
// import Notification from "../../BodyComponent/Notification";
import { useStyles } from "../Admin/HeaderStyles";
import Bugs from "../../BodyComponent/AddBugs/Bugs";
// import Bugs from "../../BodyComponent/AddBugs/bugs";

export default function TesterHeaderComponent() {
    const classes = useStyles();
    // const history = useHistory();
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerOpen = () => {
        setMobileOpen(!mobileOpen);
    };
    const handleDrawerClose = () => {
        setMobileOpen(false);
    };
    const logout = () => {
        localStorage.clear();
        window.location.href = "/";
      }


    return (
        <div>
            <Navbar handleDrawerOpen={handleDrawerOpen} />
            <TesterSidenav
                mobileOpen={mobileOpen}
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
            />
            
            <Box className={classes.wrapper}>
                <Switch>
                    {/* <Route exact path='/projectlist' render={() => <Projectlist />} /> */}
                    <Route exact path='/bugs' render={() => <Bugs/>} />
                    {/* <Route exact path='/notification' render={() => <Notification />} /> */}
                    <Route exact path='/logout' render={logout} />
                    <Route exact path='/' render={() => <Dashboard />} />
                </Switch>
            </Box>
        </div>
    );
}
