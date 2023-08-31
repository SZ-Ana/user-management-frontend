import { Edit, PersonAdd, DeleteOutline } from "@mui/icons-material";
import { IconButton, Stack, Box } from "@mui/material";
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
          alignItems="baseline"
          spacing={0.5}
        >
          <IconButton
            aria-label="AddUser"
            onClick={() => handleOpen("Add new user")}
          >
            <PersonAdd />
          </IconButton>
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
