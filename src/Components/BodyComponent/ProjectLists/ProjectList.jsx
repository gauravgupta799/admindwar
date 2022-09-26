import React from 'react';
import "./ProjectListStyle.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function ProjectList() {

  const handleDelete = (id) => {
    console.log(id)
  };

  const handleUpdate = (id) => {
    console.log(id)
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'firstName', headerName: 'Project Name', width: 180,},
    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Link to="/projectListEdit">
              <button className="projectListEdit" onClick = {()=> handleUpdate(params.row._id)}>Edit</button>
            </Link>
            <DeleteOutline
              className="projectListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  
  const rows = [
    { id: 1, firstName: 'Project1' },
    { id: 2, firstName: 'Project2' },
    { id: 3, firstName: 'Project3' },
    { id: 4, firstName: 'Project4' },
    { id: 5, firstName: 'Project5' },
    { id: 6, firstName: 'Project6' },
    { id: 7, firstName: 'Project7' },
    { id: 8, firstName: 'Project8' },
    { id: 9, firstName: 'Project9' },
  ];

  return (
    <div style={{ height: "100vh", width: '100%'}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
