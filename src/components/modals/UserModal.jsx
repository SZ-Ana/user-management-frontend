import { Button, TextField, Modal, Box, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

import { useAddUserMutation, useUpdateUserMutation } from "../../api/apiSlice";
// styling
import style from "../../assets/style";

const UserModal = ({ modalHeading, open, handleClose }) => {
  const { register, control, handleSubmit, formState } = useForm({
    defaultValues: modalHeading.data,
  });
  const { errors } = formState;
  const [createNewUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const onSubmit = async (formData) => {
    try {
      const userData = {
        _id: formData._id,
        username: formData.username,
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        contactNumber: parseInt(formData.contactNumber, 10),
        password: formData.password,
      };
      let result;
      if (!formData._id) {
        result = await createNewUser(userData);
      } else {
        result = await updateUser(userData);
      }
      if (!result.error) {
        if (result.data.message == "create") {
          console.log("Data saved");
          handleClose();
        } else if (result.data.message === "update") {
          console.log("Data Updated");
          handleClose();
        }
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log("Error handling user:", error.message);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {modalHeading.heading}
            </Typography>
            <TextField
              label="Username"
              variant="outlined"
              {...register("username", { required: "Username is required." })}
              error={!!errors.username}
              helperText={errors.username?.message}
            />
            <TextField
              label="First Name"
              variant="outlined"
              {...register("firstname", {
                required: "First name is required.",
              })}
              error={!!errors.firstname}
              helperText={errors.firstname?.message}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              {...register("lastname", { required: "Last name is required." })}
              error={!!errors.lastname}
              helperText={errors.lastname?.message}
            />
            <TextField
              label="Email"
              variant="outlined"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email format",
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="Contact Number"
              variant="outlined"
              type="text"
              {...register("contactNumber", {
                required: "Contact number is required.",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Invalid Contact number",
                },
              })}
              error={!!errors.contactNumber}
              helperText={errors.contactNumber?.message}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              {...register("password", { required: "Password is required." })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button type="submit" color="primary" variant="contained">
              Submit
            </Button>
          </Box>
        </form>
        <DevTool control={control} />
      </>
    </Modal>
  );
};

export default UserModal;
