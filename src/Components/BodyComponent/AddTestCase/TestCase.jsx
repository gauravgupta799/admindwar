import React, {useState} from "react";
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
import PostAddIcon from "@material-ui/icons/PostAdd";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import swal from 'sweetalert';

const url = "https://nodeexpmongoapi.herokuapp.com/api/user/addtestcase";
const projectName = ["Testcase1","Testcase2","Testcase3","Testcase4"];

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: "#3f51a5",
		minHeight: "100vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	root: {
		minHeight: "50vh",
		// marginTop: "50px",
		backgroundColor: "white",
		width: "600px",
		padding: "0px 20px 15px 20px",
		borderRadius: "5px",
		boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
	},
	button: {
		backgroundColor: "#3f51b5",
		marginTop: "25px",
		color: "white",
    '&:hover':{
			backgroundColor: "#3f41b5",
		}
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
   padding:"0px 10px",
  },
  input:{
		padding:"10px",
		fontSize:"16px",
		color:"#434141",
		'&::placeholder':{
			fontWeight:"540",
			fontSize:"16px",
      letterSpacing:"0.5px",
			color:"rgba(0, 0, 0, 0.54)",
		}
  }  
}))

export default function TestCase() {
    const classes = useStyles();
    const [projectTestCase, setProjectTestCase] = useState({
		project_name: "",
		testcase: "",
		created_by: "Admin",
	});

	const handleChange = (e) => {
		setProjectTestCase({ ...projectTestCase, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
    // console.log("Testcase",projectTestCase);
		if (projectTestCase.project_name === "" || projectTestCase.testcase === "" || projectTestCase.project_id === "") {
			swal("Wrong", "All fiels are required", "error", {
				button: true,
				timer: 2000,
			});
		} else {
			try {
				const res = await axios.post(url, projectTestCase);
				swal("Success", res.data.message, "success", {
					buttons: false,
					timer: 2000,
				});
				window.location = "/";
			} catch (err) {
        swal("Error", "Server Error", "error", {
          button: false,
          timer: 2000,
        });
				console.log(err);
			}
		}
	};

  return (
    <Container className = {classes.container}>
      <Container component="main" maxWidth="xs"    className = {classes.root}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }} className = {classes.avatar}>
           <PostAddIcon />
          </Avatar>
          <Typography component="h1" variant="h4">
            Add Testcase
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
         
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl sx={{ m: 1, minWidth: 400 }} className = {classes.form}>
                  <InputLabel 
                  className={classes.inputLabel}
                   id="demo-simple-select-helper-label" 
                   >
                    Project's Name
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    name = "project_name" 
                    variant='outlined'
                    label="Select Project's Name"
                    onChange={handleChange}
                  >
                  { projectName.map((item)=>{
                            return  <MenuItem value={item}>{item}</MenuItem>
                        })
                  }
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextareaAutosize
                  aria-label="minimum height"
                  name='testcase'
                  minRows={3}
                  placeholder="Description..."
                  className={classes.input}
                  style={{ width: 410, height: 300 }}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              className = {classes.button}
            >
              Add
            </Button>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}
