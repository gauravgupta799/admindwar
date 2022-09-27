import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import PostAddIcon from "@material-ui/icons/PostAdd";
import axios from "axios";
import swal from "sweetalert";
// const theme = createTheme();

const url = "https://nodeexpmongoapi.herokuapp.com/api/user/addbugdetails";
const projectName = ["Testcase1", "Testcase2", "Testcase3", "Testcase4"];
const testcaseId = [
	"63281d44b0215ab",
	"63281d44b0215cd",
	"63281d44b0215ef",
	"63281d44b0215gh",
];

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: "#3f51a5",
		minHeight: "100vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	root: {
		minHeight: "30vh",
		// marginTop: "50px",
		backgroundColor: "white",
		width: "800px",
		padding: "10px 20px",
		borderRadius: "5px",
		boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
	},
	button: {
		backgroundColor: "#3f51b5",
		margin: "10px 0px",
		color: "white",
		"&:hover": {
			backgroundColor: "#3f41b5",
		},
	},
	image: {
		backgroundImage: "url(https://source.unsplash.com/random)",
		backgroundSize: "cover",
	},
	paper: {
		margin: theme.spacing(8, 4),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main,
	},
	form: {
		width: "100%",
		marginTop: theme.spacing(2),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
	inputLabel: {
		padding: "0 10px",
	},
	input: {
		marginTop: "15px",
		padding: "10px",
		fontSize: "16px",
		color: "#434141",
		"&::placeholder": {
			fontWeight: "540",
			fontSize: "16px",
			letterSpacing: "0.5px",
			color: "rgba(0, 0, 0, 0.48)",
		},
	},
}));

export default function Bugs() {
	const classes = useStyles();
	const [bugDetail, setBugDetail] = useState({
		project_id: "",
		testcase_id: "",
		bugdetails: "",
		added_by: "Admin",
	});

	const handleChange = (e) => {
		setBugDetail({ ...bugDetail, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Details", bugDetail);
		if (
			bugDetail.project_id === "" ||
			bugDetail.testcase_id === "" ||
			bugDetail.bugdetails === ""
		) {
			swal("Wrong", "All fiels are required", "error", {
				button: true,
				timer: 2000,
			});
		} else {
			try {
				const res = await axios.post(url, bugDetail);
				swal("Success", res.data.message, "success", {
					buttons: false,
					timer: 2000,
				});
				window.location = "/";
				console.log(res);
			} catch (err) {
				console.log(err);
			}
		}
	};

	return (
		<Container className={classes.container}>
			<Container component='main' maxWidth='xs' className={classes.root}>
				<CssBaseline />
				<Box
					sx={{
						// marginTop: 5,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ bgcolor: "secondary.main" }} className={classes.avatar}>
						<PostAddIcon />
					</Avatar>
					<Typography component='h1' variant='h4'>
						Add Bug
					</Typography>
					<Box
						component='form'
						noValidate
						onSubmit={handleSubmit}
						// sx={{ mt: 1 }}
					>
						<Grid container spacing={1}>
							<Grid item xs={12}>
								<FormControl sx={{ minWidth: 400 }} className={classes.form}>
									<InputLabel
										className={classes.inputLabel}
										id='demo-simple-select-helper-label'
									>
										Select Project's Name
									</InputLabel>
									<Select
										labelId='demo-simple-select-helper-label'
										id='demo-simple-select-helper'
										name='project_id'
										variant='outlined'
										label="Select Project's Name"
										onChange={handleChange}
									>
										{projectName.map((item) => {
											return <MenuItem value={item}>{item}</MenuItem>;
										})}
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<FormControl sx={{ minWidth: 400 }} className={classes.form}>
									<InputLabel
										className={classes.inputLabel}
										id='demo-simple-select-helper-label'
									>
										Select Testcase's Id
									</InputLabel>
									<Select
										labelId='demo-simple-select-helper-label'
										id='demo-simple-select-helper'
										name='testcase_id'
										variant='outlined'
										label="Select Testcase's Id"
										onChange={handleChange}
									>
										{testcaseId.map((item) => {
											return <MenuItem value={item}>{item}</MenuItem>;
										})}
									</Select>
								</FormControl>
							</Grid>
							<Grid item xs={12}>
								<TextareaAutosize
									aria-label='minimum height'
									name='bugDetails'
									minRows={3}
									className={classes.input}
									placeholder="Bug's Description..."
									style={{ width: 410, height: 240 }}
									onChange={handleChange}
								/>
							</Grid>
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							//   sx={{ mt: 3, mb: 3 }}
							className={classes.button}
						>
							Add
						</Button>
					</Box>
				</Box>
			</Container>
		</Container>
	);
}
