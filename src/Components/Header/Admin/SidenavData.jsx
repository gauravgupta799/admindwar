import React from "react";
import { List, ListItem, ListItemIcon,
	ListItemText,Button
} from "@material-ui/core";
import DashboardIcon from "@material-ui/icons/Dashboard";
// import BookIcon from "@material-ui/icons/Book";
import PostAddIcon from "@material-ui/icons/PostAdd";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { NavLink } from "react-router-dom";
import { useStyles } from "./HeaderStyles";
// import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import NoteAddIcon from '@material-ui/icons/NoteAdd';


export default function SidenavData({ handleDrawerClose }) {
	const classes = useStyles();
	const listItemData = [
		{ label: "Admin Dashobard", link: "/", icon: <DashboardIcon /> },
		{ label: "Add Project", link: "/addproject", icon: <NoteAddIcon/> },
		{ label: "Project List", link: "/projectlist", icon: <FormatListBulletedIcon/> },
		{ label: "Add TestCase", link: "/testcase", icon: <PostAddIcon /> },
		{ label: "TestCase List", link: "/testcaselist", icon:  <FormatListBulletedIcon/>  },
		{ label: "Create Tester", link: "/register", icon: <ExitToAppIcon /> },
		{ label: "Tester List", link: "/testerlist", icon: <FormatListBulletedIcon/> },
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
