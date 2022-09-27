import React, { useState } from "react";
import "./ProjectListStyle.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";
// import { Link } from "react-router-dom";

const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "2px solid #3f51b5",
	boxShadow: 24,
	pt: 2,
	px: 4,
	pb: 3,
};

export default function ProjectList() {
	const [open, setOpen] = useState(false);

	const handleOpen = (id) => {
		console.log("Edit_Id", id);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const handleDelete = (id) => {
		console.log("Delete_Id", id);
	};

	const columns = [
		{ field: "id", headerName: "ID", width: 400 },
		{ field: "firstName", headerName: "Project Name", width: 400 },
		{
			field: "action",
			headerName: "Action",
			width: 300,
			renderCell: (params) => {
				return (
					<>
						<button
							className='projectListEdit'
							onClick={() => handleOpen(params.row.id)}
						>
							Edit
						</button>
						<Modal
							hideBackdrop
							open={open}
							onClose={handleClose}
							aria-labelledby='child-modal-title'
							aria-describedby='child-modal-description'
						>
							<Box
								sx={{ ...style, width: 350, height: 380, borderRadius: "5px" }}
							>
								<Box
									style={{
										marginLeft: "100%",
										marginTop: "-10px",
										cursor: "pointer",
									}}
								>
									{" "}
									<CancelPresentationIcon onClick={handleClose} />
								</Box>
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
											// onChange={handleChange}
										/>
									</Grid>
									<Grid item xs={12}>
										<TextareaAutosize
											aria-label='minimum height'
											minRows={4}
											id='textArea'
											aria-invalid='false'
											name='description'
											placeholder='Description...'
											variant='outlined'
											style={{ width: 340, height: 200 }}
										/>
									</Grid>
								</Grid>
								<Button
									type='submit'
									fullWidth
									variant='contained'
									id='updateBtn'
									// sx={{ mt: 3, mb: 2 }}
								>
									Update
								</Button>
							</Box>
						</Modal>
						<DeleteOutline
							className='projectListDelete'
							onClick={() => handleDelete(params.row.id)}
						/>
					</>
				);
			},
		},
	];

	const rows = [
		{ id: 1, firstName: "Project1" },
		{ id: 2, firstName: "Project2" },
		{ id: 3, firstName: "Project3" },
		{ id: 4, firstName: "Project4" },
		{ id: 5, firstName: "Project5" },
		{ id: 6, firstName: "Project6" },
		{ id: 7, firstName: "Project7" },
		{ id: 8, firstName: "Project8" },
		{ id: 9, firstName: "Project9" },
	];

	return (
		<div style={{ height: "80vh", width: "100%" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={8}
				rowsPerPageOptions={[5]}
				checkboxSelection
				getRowId={(row) => row.id}
			/>
		</div>
	);
}
