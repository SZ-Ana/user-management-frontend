import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useAddUserMutation } from "../features/api/apiSlice";
import { useState } from "react";
import style from "../assets/style";

const UserModal = ({ modalHeading, open, handleClose }) => {
  const [formData, setFormData] = useState({
    username: "",
    lastname: "",
    firstname: "",
    email: "",
    contactnumber: "",
    password: "",
  });

  const [createNewUser, { isLoading }] = useAddUserMutation();
  const [validation, setValidation] = useState({
    firstname: { error: false, helperText: "First name is required." },
    lastname: { error: false, helperText: "Last name is required." },
    email: { error: false, helperText: "Email is required." },
    contactnumber: { error: false, helperText: "Contact number is required." },
    username: { error: false, helperText: "Username is required." },
    password: { error: false, helperText: "Password is required." },
  });
  const requiredFields = [
    "firstname",
    "lastname",
    "email",
    "contactnumber",
    "username",
    "password",
  ];
  const resetFormData = () =>
    setFormData({
      username: "",
      lastname: "",
      firstname: "",
      email: "",
      contactnumber: "",
      password: "",
    });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleValidation = (field) => {
    if (!formData[field]) {
      setValidation((prevValidation) => ({
        ...prevValidation,
        [field]: { ...prevValidation[field], error: true },
      }));
      return true;
    }
    return false;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasValidationErrors = requiredFields.some(handleValidation);

    if (hasValidationErrors) {
      return;
    }

    // Sending process starts here
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
        resetFormData();
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
        <form onSubmit={handleSubmit}>
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {modalHeading}
            </Typography>
            {requiredFields.map((field) => (
              <TextField
                key={field}
                name={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                variant="outlined"
                type={
                  field === "password"
                    ? "password"
                    : field === "contactnumber"
                    ? "number"
                    : "text"
                }
                value={formData[field]}
                onChange={handleChange}
                error={validation[field].error && formData[field] === ""}
                helperText={
                  validation[field].error && formData[field] === ""
                    ? validation[field].helperText
                    : ""
                }
              />
            ))}
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
