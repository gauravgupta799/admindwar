import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { makeStyles } from "@material-ui/core/styles";
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import axios from "axios";
import swal from 'sweetalert';
import {useHistory} from "react-router-dom";
const url = "https://nodeexpmongoapi.herokuapp.com/api/user/addproject";

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: "#3f51a5",
		minHeight: "100vh",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
	root: {
		minHeight: "72vh",
		// marginTop: "50px",
		backgroundColor: "white",
		width: "600px",
		padding: "5px 20px",
		borderRadius: "5px",
		boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.35)",
	},
	button: {
		backgroundColor: "#3f51b5",
		marginTop: "25px",
		color: "white",
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

const Projects = () =>{
    const classes = useStyles();
	const history = useHistory();
    const [project ,setProject] = useState({
        project_name:"",
        description:"",
        created_by:"Admin"
    });

    const handleChange = (e) => {
        setProject({...project, [e.target.name] : e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
		// console.log("AddP", project)
        if(project.project_name === "" || project.description ===""){
            swal("Wrong", "All fiels are required", "error", { button:true, timer:2000 });
        }else{
            try{
                const res = await axios.post(url, project);
                swal("Success", res.data.message, "success", {
                    buttons: false,
                    timer: 2000,
                });
				history.push("/projectlist");
            }catch(err){
              console.log(err);
            }
        }
    }

	return (
		<Container className={classes.container}>
			<Container component='main' maxWidth='xs' className={classes.root} >
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Avatar sx={{ m: 1, bgcolor: "primary.main" }} className={classes.avatar}>
						<NoteAddIcon/>
					</Avatar>
					<Typography component='h1' variant='h4'>
						Add Project
					</Typography>
					<Box
						component='form'
                        className={classes.form}
						noValidate
						onSubmit={handleSubmit}
						sx={{ mt: 3 }}
					>
						<Grid container spacing={2}>
							<Grid item xs={12}>
								<TextField
									autoComplete='given-name'
									name='project_name'
									id='projectName'
									label='Project Name'
                                    variant='outlined'
									required
									fullWidth
									autoFocus
                                    onChange={handleChange}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextareaAutosize
									aria-label='minimum height'
									minRows={4}
									aria-invalid="false"
                                    name="description"
									placeholder='Description...'
                                    variant='outlined'
									style={{ width: 400, height: 240 }}
                                    onChange={handleChange}
								/>
							</Grid>
						</Grid>
						<Button
							type='submit'
							fullWidth
							variant='contained'
                            className={classes.button}
							sx={{ mt: 3, mb: 2 }}
						>
							Add
						</Button>
					</Box>
				</Box>
			</Container>
		</Container>
	);
}

export default Projects;

























// import React,{useState} from "react";
// import "./ProjectStyle.css";
// import axios from "axios";
// import swal from 'sweetalert';

// const url = "https://nodeexpmongoapi.herokuapp.com/api/user/addproject";

// const Projects = () => {
//     const [project ,setProject] = useState({
//         project_name:"",
//         description:"",
//         created_by:"Admin"
//     });

//     const handleChange= (e) => {
//         setProject({...project, [e.target.name] : e.target.value});
//     }
    
//     const AddProject = async (e) => {
//         e.preventDefault();
//         if(project.project_name === "" || project.description ===""){
//             swal("Wrong", "All fiels are required", { button:true, timer:2000 });
//         }else{
//             try{
//                 const res = await axios.post(url, project);
//                 swal("Success", res.data.message, "success", {
//                     buttons: false,
//                     timer: 2000,
//                 })
//                 console.log(res);
//             }catch(err){
//               console.log(err);
//             }
//         }
//     }
// 	return (
// 		<div className="project-container">
//             <div>
//                 <h2 id="title">Add Project</h2>
//             </div>
// 			<div className="project-inner-container">
//                 <div className="projectTitle div">
//                     <input 
//                     type='text' 
//                     name="project_name" 
//                     placeholder='Enter project name' 
//                     required
//                     onChange={handleChange}   
//                     />
//                 </div>
//                 <div className="project-desc div">
//                     <textarea
//                         type='text'
//                         name="description"
//                         placeholder='Describe about your project'
//                         required
//                         onChange={handleChange}
//                     ></textarea>
//                 </div>
//                 <div className="add-btn div">
//                     <button type='button' onClick = {AddProject}>Add</button>
//                 </div>
//             </div>
// 		</div>
// 	);
// };

// export default Projects;
