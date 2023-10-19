import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import PrivateRoute from "../Auth_Hoc/PrivateRoute";
import ShowTable from "./ShowTable";

const AllRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/showtable"
        element={
          <PrivateRoute>
            <ShowTable />
          </PrivateRoute>
        }
      />
      <Route path={"*"} element={<h1>404 Wrong URL</h1>} />
    </Routes>
  );
};

export default AllRoute;
