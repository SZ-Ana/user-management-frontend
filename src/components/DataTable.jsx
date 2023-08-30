import * as React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const DataTable = ({ rows, isSuccess }) => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [data, setData] = useState({});
  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    // { field: "username", headerName: "Username", width: 250 },
    { field: "firstname", headerName: "First name", width: 200 },
    { field: "lastname", headerName: "Last name", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "contactNumber",
      headerName: "Contact Number",
      width: 150,
    },
  ];

  const handleRowClick = (newSelection) => {
    setSelectedRows(newSelection);
  };
  console.log(selectedRows);
  if (isSuccess) {
    return (
      <div style={{ height: "auto", width: "auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row._id}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          // selectionModel={selectedRows}
          onRowClick={handleRowClick}
        />
      </div>
    );
  }
};

export default DataTable;
