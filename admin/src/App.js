import Sidebar from "./components/sidebar/Sidebar";
// import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login.jsx";
import Topbar from "./components/topbar/Topbar.jsx";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).auth
  ).currentUser?.isAdmin;

  // useEffect(() => {
  //   if (admin) {
  //     navigate("/");
  //   }else{
  //     navigate("/login")
  //   }
  // }, []);

  return (
    <>
      {location.pathname !== "/login" && admin && <Topbar />}
      <div className={`${location.pathname !== "/login" ? "container" : ""}`}>
        {location.pathname !== "/login" && admin && <Sidebar />}
        <Routes>
          <Route path="/login" element={<Login />} />
          {admin && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/newproduct" element={<NewProduct />} />
            </>
          )}
        </Routes>
      </div>
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
