import "./App.css";
import UserList from "./features/users/UserList";
import { CssBaseline, Container, Typography } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <Typography
          variant="h1"
          sx={{ my: 4, textAlign: "center", color: "primary.main" }}
        >
          Manage Users
        </Typography>
        <UserList />
      </Container>
    </>
  );
}

export default App;
