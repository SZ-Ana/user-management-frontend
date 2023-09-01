import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import RootLayout from "./layouts/RootLayout";
import UserList from "./pages/UserList";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={"/"} element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path={"/userlist"} element={<UserList />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
