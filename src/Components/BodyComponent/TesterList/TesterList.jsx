import React, { useState } from "react";
import "./TesterListStyle.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import Modal from "@material-ui/core/Modal";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
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

export default function TesterList() {
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
		{ field: "firstName", headerName: "Tester's Name", width: 400 },
		{
			field: "action",
			headerName: "Action",
			width: 300,
			renderCell: (params) => {
				return (
					<>
						{/* <Link to="/testerlistEdit"> */}
						<button
							className='testerListEdit'
							onClick={() => handleOpen(params.row.id)}
						>
							Edit
						</button>
						{/* </Link> */}
						<Modal
							hideBackdrop
							open={open}
							onClose={handleClose}
							aria-labelledby='child-modal-title'
							aria-describedby='child-modal-description'
						>
							<Box
								sx={{ ...style, width: 350, height: 300, borderRadius: "5px" }}
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
											name='tester_name'
											id='TesterName'
											label='Tester Name'
											variant='outlined'
											required
											fullWidth
											autoFocus
											// onChange={handleChange}
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
											//   onChange={handleChange}
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
											//   onChange={handleChange}
										/>
									</Grid>
								</Grid>
								<Button
									type='submit'
									fullWidth
									variant='contained'
									id='updateBtn'
									sx={{ mt: 3, mb: 2 }}
								>
									Update
								</Button>
							</Box>
						</Modal>
						<DeleteOutline
							className='testerListDelete'
							onClick={() => handleDelete(params.row._id)}
						/>
					</>
				);
			},
		},
	];

	const rows = [
		{ id: 1, firstName: "Tester1" },
		{ id: 2, firstName: "Tester2" },
		{ id: 3, firstName: "Tester3" },
		{ id: 4, firstName: "Tester4" },
		{ id: 5, firstName: "Tester5" },
		{ id: 6, firstName: "Tester6" },
		{ id: 7, firstName: "Tester7" },
		{ id: 8, firstName: "Tester8" },
		{ id: 9, firstName: "Tester9" },
		{ id: 10, firstName: "Tester10" },
	];

	return (
		<div style={{ height: "80vh", width: "100%" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={8}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	);
}
