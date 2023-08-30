import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useAddUserMutation } from "../features/api/apiSlice";
import { useForm } from "react-hook-form";
import style from "../assets/style";

const UserModal = ({ modalHeading, open, handleClose }) => {
  const { handleSubmit, register } = useForm();
  const [createNewUser, { isLoading }] = useAddUserMutation();

  const onSubmit = async (formData) => {
    try {
      const newUser = {
        username: formData.username,
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        contactNumber: formData.contactnumber,
        password: formData.password,
      };
      const result = await createNewUser(newUser);
      if (!result.error) {
        console.log("Data saved");
        handleClose();
      } else {
        console.log(result);
      }
    } catch (error) {
      console.log("Error handling user:", error.message);
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {modalHeading}
            </Typography>
            <TextField
              label="Username"
              variant="outlined"
              {...register("username", { required: "Username is required." })}
            />
            <TextField
              label="First Name"
              variant="outlined"
              {...register("firstname", {
                required: "First name is required.",
              })}
            />
            <TextField
              label="Last Name"
              variant="outlined"
              {...register("lastname", { required: "Last name is required." })}
            />
            <TextField
              label="Email"
              variant="outlined"
              {...register("email", { required: "Email is required." })}
            />
            <TextField
              label="Contact Number"
              variant="outlined"
              type="number"
              {...register("contactnumber", {
                required: "Contact number is required.",
              })}
            />
            <TextField
              label="Password"
              variant="outlined"
              type="password"
              {...register("password", { required: "Password is required." })}
            />
            <Button type="submit" color="primary" variant="contained">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </Modal>
  );
};

export default UserModal;
