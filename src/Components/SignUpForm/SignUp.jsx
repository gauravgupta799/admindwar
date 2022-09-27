import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import swal from "sweetalert";

const url = "https://nodeexpmongoapi.herokuapp.com/api/user/addtester";

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: "#3f51a5",
		minHeight: "100vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	root: {
		minHeight: "70vh",
		// marginTop: '50px',
		backgroundColor: "white",
		width: "600px",
		padding: "5px 20px",
		borderRadius: "5px",
		boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
	},
	button: {
		backgroundColor: "#3f51b5",
		margin: "40px 0px 0px 0px",
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
}));

export default function SignUp() {
	const classes = useStyles();
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		password_confirmation: "",
		role: "Tester",
		role_id: "0",
		tc: true,
	});

	const handleChange = (e) => {
		let name = e.target.name;
		setUser({ ...user, [name]: e.target.value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (
			user.name === "" ||
			user.email === "" ||
			user.password === "" ||
			user.password_confirmation === ""
		) {
			swal("Wrong", "All fiels are required", "error", {
				button: true,
				timer: 2000,
			});
		} else {
			if (user.password !== user.password_confirmation) {
				swal("Wrong", "Password didn't match", "error", {
					button: true,
					timer: 2000,
				});
			} else {
				try {
					const res = await axios.post(url, user);
					swal("Success", res.data.message, "success", {
						buttons: false,
						timer: 2000,
					});
					console.log("Response", res.data);
					window.location = "/";
				} catch (err) {
					console.log(err);
				}
			}
		}
	};

	return (
		<Container className={classes.container}>
			<Container component='main' maxWidth='xs' className={classes.root}>
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar
						sx={{ m: 1, bgcolor: "secondary.main" }}
						className={classes.avatar}
					></Avatar>
					<Typography component='h1' variant='h4'>
						Sign Up
					</Typography>
					<Box
						component='form'
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
						className={classes.form}
					>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									autoComplete='given-name'
									name='name'
									required
									fullWidth
									id='Name'
									label='Name'
									variant='outlined'
									autoFocus
									onChange={handleChange}
								/>
							</Grid>

							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									id='email'
									label='Email Address'
									name='email'
									variant='outlined'
									autoComplete='email'
									onChange={handleChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name='password'
									label='Password'
									type='password'
									id='password'
									variant='outlined'
									autoComplete='new-password'
									onChange={handleChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									required
									fullWidth
									name='password_confirmation'
									label='Confirm Password'
									type='password'
									id='password'
									variant='outlined'
									autoComplete='new-password'
									onChange={handleChange}
								/>
							</Grid>
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
							sx={{ mt: 3, mb: 2 }}
							className={classes.button}
						>
							Sign Up
						</Button>
					</Box>
				</Box>
			</Container>
		</Container>
	);
}
