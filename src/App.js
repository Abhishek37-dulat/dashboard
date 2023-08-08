import Navbar from "./components/Navbar/Navbar";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Order from "./pages/Order/Order";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";
import Save from "./pages/Save/Save";
import Comment from "./pages/Comments/Comment";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import NotFound from "./pages/NotFound/NotFound";
import AddP from "./pages/Product/AddP";
import Categories from "./pages/Categories/Categories";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "./context/authContext";
import SingleOrders from "./pages/Order/SingleOrders";
import UserPage from "./pages/Order/UserPage";
import ColorPage from "./pages/Color/ColorPage";
import SingleProduct from "./pages/Product/SingleProduct";
import EditProduct from "./pages/Product/EditProduct";

function App() {
  const location = useLocation();
  const showNavbarPaths = ["/login", "/register"];
  const { account, setAccount, setAccountStatus, accountStatus } =
    useContext(DataContext);
  const [tokenChecked, setTokenChecked] = useState(false);

  const getUserFromToken = (token) => {
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      return decodedToken;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };

  useEffect(() => {
    console.log("inside");
    const tokenfunction = () => {
      const token = localStorage.getItem("token");
      console.log(token);
      // const refreshtoken = await localStorage.getItem("refreshtoken"); // Not used in this code snippet
      if (token) {
        console.log("in in");
        if (token && !tokenChecked) {
          console.log("insidecheck1");
          const tokenData = getUserFromToken(token);
          if (tokenData) {
            console.log("Token Data:", tokenData);
            setAccount([tokenData]);
            console.log("insidecheck3");
            setTokenChecked(true);
            setAccountStatus(true);
          }
        }
      }
    };
    tokenfunction();
  }, [tokenChecked, setTokenChecked]);

  console.log(account);
  console.log(account.length);
  console.log(tokenChecked);
  return tokenChecked || accountStatus ? (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/order" element={<Order />} exact />
        <Route path="/order/:id" element={<SingleOrders />} />
        <Route path="/order/user/:id" element={<UserPage />} />
        <Route path="/product" element={<Product />} exact />
        <Route path="/product/:id" element={<EditProduct />} exact />
        <Route path="/product/view/:id" element={<SingleProduct />} exact />
        <Route path="/product/add" element={<AddP />} exact />
        <Route path="/cart" element={<Cart />} exact />
        <Route path="/save" element={<Save />} exact />
        <Route path="/comment" element={<Comment />} exact />
        <Route path="/categories" element={<Categories />} exact />
        <Route path="/colors" element={<ColorPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  ) : (
    <>
      <Routes>
        <Route path="/login" element={<Login />} exact />
        <Route path="/register" element={<Register />} exact />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  );
}

export default App;
