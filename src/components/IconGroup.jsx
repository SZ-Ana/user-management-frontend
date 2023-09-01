import { Edit, PersonAdd, DeleteOutline } from "@mui/icons-material";
import { IconButton, Stack, Box, Typography, Button } from "@mui/material";
import { useState } from "react";
import UserModal from "./modals/UserModal";

const IconGroup = ({ getData }) => {
  const [open, setOpen] = useState(false);
  const [modalHeading, setModalHeading] = useState({
    heading: "",
    data: {},
  });

  const handleOpen = (modalHeading) => {
    setModalHeading({
      heading: modalHeading,
    });
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    getData();
  };
  return (
    <>
      <Box>
        <Stack
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          spacing={0.5}
        >
          <Button
            aria-label="AddUser"
            onClick={() => handleOpen("Add new user")}
            sx={{
              color: "gray",
              "&:hover": {
                color: "#1976d2", // Change this color to the desired hover color
              },
            }}
          >
            <PersonAdd sx={{ mr: "10px" }} />
            ADD USER
          </Button>
        </Stack>
      </Box>
      {open && (
        <UserModal
          modalHeading={modalHeading}
          open={open}
          handleClose={handleClose}
        />
      )}
    </>
  );
};

export default IconGroup;
