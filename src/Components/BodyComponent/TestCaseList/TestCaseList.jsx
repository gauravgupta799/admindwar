import React from 'react';
import "./TestCaseStyle.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function TestCaseList() {

  const handleDelete = (id) => {
    // console.log(id)
  };

  const handleUpdate = (id) => {
    // console.log(id)
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'firstName', headerName: 'TestCase Name', width: 180,},
    {
      field: "action",
      headerName: "Action",
      width: 180,
      renderCell: (params) => {
        return (
          <>
            <Link to="/testcaselistEdit">
              <button className="testcaseListEdit" onClick = {()=> handleUpdate(params.row._id)}>Edit</button>
            </Link>
            <DeleteOutline
              className="testcaseListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];
  
  const rows = [
    { id: 1, firstName: 'Testcase1' },
    { id: 2, firstName: 'Testcase2' },
    { id: 3, firstName: 'Testcase3' },
    { id: 4, firstName: 'Testcase4' },
    { id: 5, firstName: 'Testcase5' },
    { id: 6, firstName: 'Testcase6' },
    { id: 7, firstName: 'Testcase7' },
    { id: 8, firstName: 'Testcase8' },
    { id: 9, firstName: 'Testcase9' },
  ];

  return (
    <div style={{ height:"100vh", width: '100%' }}>
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
