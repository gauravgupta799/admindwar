import React from 'react';
import "./TesterListStyle.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function testerList() {

  const handleDelete = (id) => {
    console.log(id)
  };

  const handleUpdate = (id) => {
    console.log(id)
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'firstName', headerName: "Tester's Name", width: 180,},
    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Link to="/testerlistEdit">
              <button className="testerListEdit" onClick = {()=> handleUpdate(params.row._id)}>Edit</button>
            </Link>
            <DeleteOutline
              className="testerListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  
  const rows = [
    { id: 1, firstName: 'Tester1' },
    { id: 2, firstName: 'Tester2' },
    { id: 3, firstName: 'Tester3' },
    { id: 4, firstName: 'Tester4' },
    { id: 5, firstName: 'Tester5' },
    { id: 6, firstName: 'Tester6' },
    { id: 7, firstName: 'Tester7' },
    { id: 8, firstName: 'Tester8' },
    { id: 9, firstName: 'Tester9' },
    { id: 10, firstName: 'Tester10' },
  ];

  return (
    <div style={{ height: "100vh", width: '100%' }}>
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
