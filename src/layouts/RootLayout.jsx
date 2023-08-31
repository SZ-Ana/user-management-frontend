import NavBar from "./NavBar";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import { CssBaseline, Container, Typography } from "@mui/material";
import SideBar from "./sidebar";

const RootLayout = () => {
  return (
    <>
      <CssBaseline />
      {/* <NavBar /> */}
      <SideBar />
    </>
  );
};

export default RootLayout;
