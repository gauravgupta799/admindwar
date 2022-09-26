import React, { useState } from "react";
import { Box } from "@material-ui/core";
import Navbar from "../Navbar";
import Sidenav from "./Sidenav";
import { Switch, Route} from "react-router-dom";
import Dashboard from "../../BodyComponent/Dashboard/Dashboard";
import { useStyles } from "./HeaderStyles";
import SignUp from "../../SignUpForm/SignUp";
import AddProjects from "../../BodyComponent/AddProject/Projects";
import TestCase from "../../BodyComponent/AddTestCase/TestCase";
import ProjectList from "../../BodyComponent/ProjectLists/ProjectList";
import TestCaseList from "../../BodyComponent/TestCaseList/TestCaseList";
import TesterList from "../../BodyComponent/TesterList/TesterList"


export default function HeaderComponent() {
  const classes = useStyles();
  //  const history = useHistory();
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
      <Sidenav
        mobileOpen={mobileOpen}
        handleDrawerOpen={handleDrawerOpen}
        handleDrawerClose={handleDrawerClose}
      />
      <Box className={classes.wrapper}>
        <Switch>
          <Route exact path='/' render={() => <Dashboard />} />
          <Route exact path='/addproject' render={() => <AddProjects />} />
          <Route exact path='/projectlist' render={() => <ProjectList/>} />
          <Route exact path='/testcase' render={() => <TestCase/>} />
          <Route exact path='/testcaselist' render={() => <TestCaseList/>} />
          <Route exact path='/register' render={() => <SignUp/>} />
          <Route exact path='/testerlist' render={() => <TesterList/>} />
          <Route exact path='/logout' render={logout} />
        </Switch>
      </Box>
    </div>
  );
}
