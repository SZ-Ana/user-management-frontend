import * as React from "react";
import { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { IconButton } from "@mui/material";
import { Edit, DeleteOutline } from "@mui/icons-material";
// modals
import UserModal from "./modals/UserModal";
// swal
import Swal from "sweetalert2";
// api
import { useDeleteUserMutation } from "../api/apiSlice";

const DataTable = ({ rows, isSuccess, getData }) => {
  const [deleteUser] = useDeleteUserMutation();
  //state
  const [open, setOpen] = useState(false);
  const [modalHeading, setModalHeading] = useState({
    heading: "",
    data: {},
  });

  // functions
  const handleOpen = (heading, data) => {
    data.contactnumber === data.contactNumber;
    setModalHeading({
      heading: heading,
      data: data,
    });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    getData();
  };

  // process
  const handleDelete = async (id) => {
    try {
      const result = await deleteUser({ id });
      if (!result.error) {
        return true;
      } else {
        console.error("Error while deleting:", result.error);
        return result;
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  // user interactions
  const handleEditClick = (data) => {
    console.log("edit", data);
    handleOpen("Edit User", data);
  };
  const handleDeleteClick = (data) => {
    console.log("delete", data._id);
    const id = data._id;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      backdrop: false,
      showCancelButton: true,
      confirmButtonColor: "#1976D2",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const res = handleDelete(id);
        console.log(res);
        if (res) {
          Swal.fire("Deleted!", "User has been deleted.", "success");
          getData();
        } else {
          Swal.fire("Failed!", res.error, "error");
        }
      }
    });
  };
  // table columns
  const columns = [
    { field: "_id", headerName: "ID", width: 250 },
    // { field: "username", headerName: "Username", width: 250 },
    { field: "firstname", headerName: "First name", width: 150 },
    { field: "lastname", headerName: "Last name", width: 150 },
    { field: "email", headerName: "Email", width: 250 },
    {
      field: "contactNumber",
      headerName: "Contact Number",
      width: 150,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 100,
      renderCell: (params) => (
        <div>
          <IconButton
            onClick={() => handleEditClick(params.row)}
            aria-label="edit"
            sx={{
              color: "gray",
              "&:hover": {
                color: "green", // Change this color to the desired hover color
              },
            }}
          >
            <Edit />
          </IconButton>
          <IconButton
            onClick={() => handleDeleteClick(params.row)}
            aria-label="delete"
            sx={{
              color: "gray",
              "&:hover": {
                color: "red", // Change this color to the desired hover color
              },
            }}
          >
            <DeleteOutline />
          </IconButton>
        </div>
      ),
    },
  ];
  if (isSuccess) {
    return (
      <>
        <div style={{ height: "auto", width: "auto" }}>
          <DataGrid
            rows={rows.data}
            columns={columns}
            getRowId={(row) => row._id}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </div>
        {open && (
          <UserModal
            modalHeading={modalHeading}
            open={open}
            handleClose={handleClose}
          />
        )}

        {/* {openConfirmation.open && (
          <DeleteConfirmationDialog
            data={openConfirmation.data}
            onClose={handleClose}
          />
        )} */}
      </>
    );
  }
};

export default DataTable;
