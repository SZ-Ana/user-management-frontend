import "./App.css";
import UserList from "./pages/UserList";
import { CssBaseline, Container, Typography } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <Container>
        <UserList />
      </Container>
    </>
  );
}

export default App;
