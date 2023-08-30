import * as React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

const DataTable = ({ rows, isSuccess }) => {
  const [selectionModel, setSelectionModel] = useState([]);
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
  const handleSelection = (newSelectionModel) => {
    console.log("test");
    setSelectionModel(getSelectedRowsData);
  };

  const getSelectedRowsData = () => {
    console.log("test");
    // Filter rows based on selected IDs
    const selectedRowsData = rows.filter((row) =>
      selectionModel.includes(row.id)
    );

    return selectedRowsData;
  };

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
          selectionModel={selectionModel}
          onRowSelected={() => console.log("test")}
        />
      </div>
    );
  }
};

export default DataTable;
