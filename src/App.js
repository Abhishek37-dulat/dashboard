import Navbar from "./components/Navbar/Navbar";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  Redirect,
} from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "./redux/actions/OrdersAction";
import { getAllProduct } from "./redux/actions/ProductAction";
import AllUserPage from "./pages/AllUserPage/AllUserPage";
import LogoPage from "./pages/LogoPage/LogoPage";
import AllBannerPage from "./pages/AllBannerPage/AllBannerPage";
import NewPosterPage from "./pages/NewPosterPage/NewPosterPage";
import { getAllBanner } from "./redux/actions/BannerAction";
import { getAllPost } from "./redux/actions/PostAction";
import { getAllUser, getAllUserProfile } from "./redux/actions/UserAction";
import Upload from "./Upload";
import BlogPage from "./pages/Blog/BlogPage";
import AddBlogPage from "./pages/Blog/AddBlogPage";
import Seo from "./pages/Seo/Seo";
import UpdateSeo from "./components/Seo/UpdateSeo/UpdateSeo";
import USeo from "./pages/Seo/USeo";
import ContactPage from "./pages/ContactPage/ContactPage";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
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
    dispatch(getAllProduct());
  }, []);

  useEffect(() => {
    const tokenfunction = async () => {
      const token = localStorage.getItem("admintoken");
      if (token) {
        if (token && !tokenChecked) {
          const tokenData = await getUserFromToken(token);
          if (tokenData) {
            setAccount([tokenData]);
            setTokenChecked(true);
            setAccountStatus(true);
          }
        }
      }
    };
    tokenfunction();
  }, [
    tokenChecked,
    setTokenChecked,
    setAccount,
    setAccountStatus,
    accountStatus,
  ]);

  useEffect(() => {
    dispatch(getAllOrders());
    dispatch(getAllBanner());
    dispatch(getAllPost());
    dispatch(getAllUser());
    dispatch(getAllUserProfile());
  }, [dispatch]);
  console.log(tokenChecked, accountStatus);
  return (
    <>
      {accountStatus ? tokenChecked ? <Navbar /> : null : null}
      <Routes>
        {accountStatus ? (
          <>
            <Route path="/" element={<Home />} />

            <Route path="/order" element={<Order />} exact />
            <Route path="/order/:id" element={<SingleOrders />} />
            <Route path="/order/user/:id" element={<UserPage />} />
            <Route path="/product" element={<Product />} exact />
            <Route path="/product/:id" element={<EditProduct />} exact />
            <Route path="/product/view/:id" element={<SingleProduct />} exact />
            <Route path="/product/add" element={<AddP />} exact />
            <Route path="/cart" element={<Cart />} exact />
            <Route path="/save" element={<Save />} exact />
            <Route path="/seo/update/:id" element={<USeo />} exact />
            <Route path="/seo/:id" element={<Seo />} exact />
            <Route path="/comment" element={<Comment />} exact />
            <Route path="/categories" element={<Categories />} exact />
            <Route path="/colors" element={<ColorPage />} />
            <Route path="/blogs" element={<BlogPage />} exact />
            <Route path="/blogs/add" element={<AddBlogPage />} exact />
            <Route path="/allusers" element={<AllUserPage />} />
            <Route path="/logo" element={<LogoPage />} />
            <Route path="/banner" element={<AllBannerPage />} />
            <Route path="/poster" element={<NewPosterPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/upload" element={<Upload />} />
            <Route
              path="*"
              element={
                tokenChecked || accountStatus ? <Home /> : <Navigate to="/" />
              }
            />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} exact />
            <Route path="/register" element={<Register />} exact />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
