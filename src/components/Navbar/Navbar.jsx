import React, { useContext, useEffect, useRef, useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Button,
  IconButton,
  Typography,
  styled,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import NotificationsIcon from "@mui/icons-material/Notifications";
import hairP from "../../assets/image/hair.png";
import WidgetsIcon from "@mui/icons-material/Widgets";
import Flags from "country-flag-icons/react/3x2";
import LogoutIcon from "@mui/icons-material/Logout";
import { DataContext } from "../../context/authContext";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StaticBar = styled(Box)(({ Theme }) => ({
  //   border: "1px solid black",
  width: "100%",
  height: "3.5vh",
  backgroundColor: "#252F43",
  position: "fixed",
  top: "0%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  zIndex: 10,
  "& > span": {
    width: "10px",
    height: "10px",
    marginLeft: "10px",
    borderRadius: "50%",
  },
}));

const OuterNavbar = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "85%",
  height: "16vh",
  marginTop: "3.5vh",
  position: "fixed",
  top: "0%",
  right: "0%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#fff",
  boxShadow: "0px 2px 5px rgba(0,0,0,0.2), 0px 3px 2px rgba(0,0,0,0.2)",
  transition: "width 0.2s",
  zIndex: 10,
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const SideBar = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "15%",
  height: "96.5vh",
  marginTop: "3.5vh",
  position: "fixed",
  top: "0%",
  left: "0%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  backgroundColor: "#fff",
  boxShadow: "0px 2px 5px rgba(0,0,0,0.2), 0px 3px 2px rgba(0,0,0,0.2)",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const LogoBox = styled(Box)(({ Theme }) => ({
  //   border: "1px solid black",
  width: "100%",
  height: "20%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  "& > span": {
    width: "10px",
    height: "10px",
    // border: "1px solid black",
    backgroundColor: "#2DB484",
    borderRadius: "2px",
  },
  "& > p": {
    fontFamily: "'Tektur', cursive",
    fontSize: "36px",
    fontWeight: "700",
    color: "#252F43",
  },
}));

const BoardBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "10%",
  marginTop: "2%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  ": hover": {
    borderRight: "3px solid #5A73CD",
  },
  "& > button": {
    color: "#5A73CD",
    fontWeight: "bold",
    width: "70%",
    height: "70%",
    fontSize: "12px",
    transition: "width 0.2s, height 0.2s",
    ":hover": {
      backgroundColor: "#5A73CD",
      fontWeight: "500",
      color: "#fff",
      width: "80%",
      height: "80%",
      fontSize: "14px",
    },
  },
}));

const NavBarContainerTop = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "80%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
}));
const NavBarLeft = styled(Box)(({ theme }) => ({
  width: "48%",
  display: "flex",
  paddingLeft: "2%",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
}));
const LeftInitialBox = styled(Box)(({ theme }) => ({
  display: "flex",
  paddingRight: "5px",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  "& > button": {
    color: "#252F43",
  },
}));
const LeftTimeBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  marginLeft: "10px",
  marginTop: "6px",
}));
const NavBarRight = styled(Box)(({ theme }) => ({
  width: "50%",
  display: "flex",
  paddingRight: "2%",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  "& > button": {
    marginRight: "5px",
    color: "#252F43",
  },
  "& > button > span > svg": {
    color: "#252F43",
  },
  "& > button > div": {
    backgroundColor: "#252F43",
  },
  "& > button > div > svg": {
    color: "#fff",
  },
}));
const NavBarContainerBottom = styled(Box)(({ theme }) => ({
  width: "95%",
  height: "20%",
  display: "flex",
  paddingLeft: "5%",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
}));

const ProfileDropDown = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "100px",
  height: "50px",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "-100px",
  marginTop: "90px",
  backgroundColor: "#fff",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
  "&>div": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    cursor: "pointer",
    padding: "4px 2px",
    ":hover": {
      backgroundColor: "#BAC0C7",
    },
    ":active": {
      transform: "scale(0.98)",
    },
  },
}));

const Navbar = () => {
  const navigate = useNavigate();
  const leftmainside = useRef();
  const dashboardRef = useRef();
  const productRef = useRef();
  const orderRef = useRef();
  const cartRef = useRef();
  const saveRef = useRef();
  const commentRef = useRef();
  const categoriesRef = useRef();
  const colorRef = useRef();
  const bdashboardRef = useRef();
  const bproductRef = useRef();
  const borderRef = useRef();
  const bcartRef = useRef();
  const bsaveRef = useRef();
  const bcommentRef = useRef();
  const bcategoriesRef = useRef();
  const bcolorRef = useRef();
  const [sidebarmanager, setSidebarmanager] = useState(0);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [countryCode, setCountryCode] = useState("");
  const [toggleLogout, setToggleLogout] = useState(false);
  const { account, setAccountStatus } = useContext(DataContext);

  // const Flag = Flags['']

  const handleSideBarClick = (e, v) => {
    e.preventDefault();
    localStorage.setItem("myValue", v);
    setSidebarmanager(v);
    const dashboardStyling = dashboardRef.current.style;
    const productStyling = productRef.current.style;
    const orderStyling = orderRef.current.style;
    const cartStyling = cartRef.current.style;
    const saveStyling = saveRef.current.style;
    const commentStyling = commentRef.current.style;
    const categoriesStyling = categoriesRef.current.style;
    const colorStyling = colorRef.current.style;
    const bdashboardStyling = bdashboardRef.current.style;
    const bproductStyling = bproductRef.current.style;
    const borderStyling = borderRef.current.style;
    const bcartStyling = bcartRef.current.style;
    const bsaveStyling = bsaveRef.current.style;
    const bcommentStyling = bcommentRef.current.style;
    const bcategoriesStyling = bcategoriesRef.current.style;
    const bcolorStyling = bcolorRef.current.style;
    if (e.target === dashboardRef.current) {
      navigate("/");
      changeByStyling(dashboardStyling, bdashboardStyling);
      backToNormalStyling(productStyling, bproductStyling);
      backToNormalStyling(orderStyling, borderStyling);
      backToNormalStyling(cartStyling, bcartStyling);
      backToNormalStyling(saveStyling, bsaveStyling);
      backToNormalStyling(commentStyling, bcommentStyling);
      backToNormalStyling(categoriesStyling, bcategoriesStyling);
      backToNormalStyling(colorStyling, bcolorStyling);
    }
    if (e.target === productRef.current) {
      navigate("/product");
      changeByStyling(productStyling, bproductStyling);
      backToNormalStyling(dashboardStyling, bdashboardStyling);
      backToNormalStyling(orderStyling, borderStyling);
      backToNormalStyling(cartStyling, bcartStyling);
      backToNormalStyling(saveStyling, bsaveStyling);
      backToNormalStyling(commentStyling, bcommentStyling);
      backToNormalStyling(categoriesStyling, bcategoriesStyling);
      backToNormalStyling(colorStyling, bcolorStyling);
    }
    if (e.target === orderRef.current) {
      navigate("/order");
      changeByStyling(orderStyling, borderStyling);
      backToNormalStyling(productStyling, bproductStyling);
      backToNormalStyling(dashboardStyling, bdashboardStyling);
      backToNormalStyling(cartStyling, bcartStyling);
      backToNormalStyling(saveStyling, bsaveStyling);
      backToNormalStyling(commentStyling, bcommentStyling);
      backToNormalStyling(categoriesStyling, bcategoriesStyling);
      backToNormalStyling(colorStyling, bcolorStyling);
    }
    if (e.target === cartRef.current) {
      navigate("/cart");
      changeByStyling(cartStyling, bcartStyling);
      backToNormalStyling(productStyling, bproductStyling);
      backToNormalStyling(orderStyling, borderStyling);
      backToNormalStyling(dashboardStyling, bdashboardStyling);
      backToNormalStyling(saveStyling, bsaveStyling);
      backToNormalStyling(commentStyling, bcommentStyling);
      backToNormalStyling(categoriesStyling, bcategoriesStyling);
      backToNormalStyling(colorStyling, bcolorStyling);
    }
    if (e.target === saveRef.current) {
      navigate("/save");
      changeByStyling(saveStyling, bsaveStyling);
      backToNormalStyling(productStyling, bproductStyling);
      backToNormalStyling(orderStyling, borderStyling);
      backToNormalStyling(cartStyling, bcartStyling);
      backToNormalStyling(dashboardStyling, bdashboardStyling);
      backToNormalStyling(commentStyling, bcommentStyling);
      backToNormalStyling(categoriesStyling, bcategoriesStyling);
      backToNormalStyling(colorStyling, bcolorStyling);
    }
    if (e.target === commentRef.current) {
      navigate("/comment");
      changeByStyling(commentStyling, bcommentStyling);
      backToNormalStyling(productStyling, bproductStyling);
      backToNormalStyling(orderStyling, borderStyling);
      backToNormalStyling(cartStyling, bcartStyling);
      backToNormalStyling(saveStyling, bsaveStyling);
      backToNormalStyling(dashboardStyling, bdashboardStyling);
      backToNormalStyling(categoriesStyling, bcategoriesStyling);
      backToNormalStyling(colorStyling, bcolorStyling);
    }
    if (e.target === categoriesRef.current) {
      navigate("/categories");
      changeByStyling(categoriesStyling, bcategoriesStyling);
      backToNormalStyling(productStyling, bproductStyling);
      backToNormalStyling(orderStyling, borderStyling);
      backToNormalStyling(cartStyling, bcartStyling);
      backToNormalStyling(saveStyling, bsaveStyling);
      backToNormalStyling(dashboardStyling, bdashboardStyling);
      backToNormalStyling(commentStyling, bcommentStyling);
      backToNormalStyling(colorStyling, bcolorStyling);
    }
    if (e.target === colorRef.current) {
      navigate("/colors");
      changeByStyling(colorStyling, bcolorStyling);
      backToNormalStyling(productStyling, bproductStyling);
      backToNormalStyling(orderStyling, borderStyling);
      backToNormalStyling(cartStyling, bcartStyling);
      backToNormalStyling(saveStyling, bsaveStyling);
      backToNormalStyling(dashboardStyling, bdashboardStyling);
      backToNormalStyling(commentStyling, bcommentStyling);
      backToNormalStyling(categoriesStyling, bcategoriesStyling);
    }
  };
  const handleLogoutFunction = () => {
    setToggleLogout(!toggleLogout);
  };
  const handleClearLocalHost = () => {
    localStorage.removeItem("admintoken");
    localStorage.removeItem("adminrefreshtoken");
    setAccountStatus(false);
    navigate("/login");
  };
  const changeByStyling = (item, bitem) => {
    item.backgroundColor = "#5A73CD";
    item.color = "#fff";
    item.fontWeight = "500";
    item.width = "80%";
    item.height = "70%";
    item.fontSize = "14px";
    bitem.borderRight = "3px solid #5A73CD";
  };
  const backToNormalStyling = (item, bitem) => {
    item.backgroundColor = "";
    item.color = "";
    item.fontWeight = "";
    item.width = "";
    item.height = "";
    item.fontSize = "";
    bitem.borderRight = "";
  };
  const handleScreenLeft = () => {
    leftmainside.current.style.display = "block";
    leftmainside.current.style.zIndex = "999";
  };

  useEffect(() => {
    const getlocalvalue = async () => {
      let value = await localStorage.getItem("myValue");
      console.log("V: ", value);
      if (value == 0) {
        changeByStyling(
          dashboardRef?.current?.style,
          bdashboardRef?.current?.style
        );
      }
      if (value == 1) {
        changeByStyling(
          productRef?.current?.style,
          bproductRef?.current?.style
        );
      }
      if (value == 2) {
        changeByStyling(orderRef?.current?.style, borderRef?.current?.style);
      }
      if (value == 3) {
        changeByStyling(cartRef?.current?.style, bcartRef?.current?.style);
      }
      if (value == 4) {
        changeByStyling(saveRef?.current?.style, bsaveRef?.current?.style);
      }
      if (value == 5) {
        changeByStyling(
          commentRef?.current?.style,
          bcommentRef?.current?.style
        );
      }
      setSidebarmanager(value);
    };
    getlocalvalue();
  }, [sidebarmanager]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    fetch("http://ip-api.com/json")
      .then((response) => response.json())
      .then((data) => setCountryCode(data?.countryCode))
      .catch((error) => console.error("Error fetching country:", error));
  }, []);

  const { year, month, day, hours, minutes, seconds } = {
    year: currentDateTime?.getFullYear(),
    month: currentDateTime?.getMonth() + 1,
    day: currentDateTime?.getDate(),
    hours: currentDateTime?.getHours(),
    minutes: currentDateTime?.getMinutes(),
    seconds: currentDateTime?.getSeconds(),
  };

  const timeZone = currentDateTime
    ?.toLocaleString("en-US", { timeZoneName: "short" })
    ?.split(" ")[2];
  return (
    <>
      <StaticBar>
        <span style={{ backgroundColor: "#C66463" }}></span>
        <span style={{ backgroundColor: "#C6A762" }}></span>
        <span style={{ backgroundColor: "#77CC89" }}></span>
      </StaticBar>
      <OuterNavbar>
        <NavBarContainerTop>
          <NavBarLeft>
            <LeftInitialBox>
              <IconButton aria-label="menu">
                <WidgetsIcon
                  onClick={() => handleScreenLeft()}
                  sx={{ width: 36, height: 36 }}
                />
              </IconButton>
            </LeftInitialBox>
            <LeftTimeBox>
              <Typography
                style={{
                  color: "#252F43",
                  fontWeight: "bold",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                {year +
                  " - " +
                  (month < 10 ? "0" + month : month) +
                  " - " +
                  (day < 10 ? "0" + day : day)}
              </Typography>
              <Typography
                style={{
                  color: "#252F43",
                  fontWeight: "300",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                {(hours < 10 ? "0" + hours : hours) +
                  " : " +
                  (minutes < 10 ? "0" + minutes : minutes) +
                  "  " +
                  timeZone}
              </Typography>
              <Typography
                style={{
                  color: "#252F43",
                  fontWeight: "400",
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                <Flags.IN style={{ width: "20px" }} />
                &ensp; India
              </Typography>
            </LeftTimeBox>
          </NavBarLeft>
          <NavBarRight>
            <IconButton>
              <DarkModeIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <Badge color="primary" variant="dot" invisible={!true}>
                <NotificationsIcon color="action" />
              </Badge>
            </IconButton>
            <IconButton
              style={{
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
                backgroundColor: "#5A73CD",
                color: "#fff",
                textTransform: "capitalize",
                margin: "5px",
              }}
              onClick={() => handleLogoutFunction()}
            >
              {/* <Avatar
                alt="Remy Sharp"
                src={hairP}
                sx={{ width: 24, height: 24 }}
              /> */}
              <Typography
                style={{
                  marginLeft: "5px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span>{account[0]?.userExits?.first_name}</span>{" "}
                <span style={{ marginTop: "5px" }}>
                  {" "}
                  <KeyboardArrowDownIcon />
                </span>
              </Typography>
            </IconButton>
            {toggleLogout ? (
              <ProfileDropDown>
                <Box onClick={() => handleClearLocalHost()}>
                  <LogoutIcon />
                  &#160;
                  <Typography>Logout</Typography>
                </Box>
              </ProfileDropDown>
            ) : null}
          </NavBarRight>
        </NavBarContainerTop>
        <NavBarContainerBottom></NavBarContainerBottom>
      </OuterNavbar>
      <SideBar ref={leftmainside}>
        <LogoBox>
          <span></span>
          <p>Hair</p>
          <span></span>
        </LogoBox>
        <BoardBox ref={bdashboardRef}>
          <Button
            value="0"
            ref={dashboardRef}
            onClick={(e) => handleSideBarClick(e, 0)}
          >
            Dashboard
          </Button>
        </BoardBox>
        <BoardBox ref={bproductRef}>
          <Button
            value="1"
            ref={productRef}
            onClick={(e) => handleSideBarClick(e, 1)}
          >
            Products
          </Button>
        </BoardBox>
        <BoardBox ref={borderRef}>
          <Button
            value="2"
            ref={orderRef}
            onClick={(e) => handleSideBarClick(e, 2)}
          >
            Orders
          </Button>
        </BoardBox>
        <BoardBox ref={bcartRef}>
          <Button
            value="3"
            ref={cartRef}
            onClick={(e) => handleSideBarClick(e, 3)}
          >
            Cart Items
          </Button>
        </BoardBox>
        <BoardBox ref={bsaveRef}>
          <Button
            value="4"
            ref={saveRef}
            onClick={(e) => handleSideBarClick(e, 4)}
          >
            Saved Items
          </Button>
        </BoardBox>
        <BoardBox ref={bcommentRef}>
          <Button
            value="5"
            ref={commentRef}
            onClick={(e) => handleSideBarClick(e, 5)}
          >
            Comments
          </Button>
        </BoardBox>
        <BoardBox ref={bcategoriesRef}>
          <Button
            value="6"
            ref={categoriesRef}
            onClick={(e) => handleSideBarClick(e, 6)}
          >
            Cotegories
          </Button>
        </BoardBox>
        <BoardBox ref={bcolorRef}>
          <Button
            value="6"
            ref={colorRef}
            onClick={(e) => handleSideBarClick(e, 7)}
          >
            Colors
          </Button>
        </BoardBox>
      </SideBar>
    </>
  );
};

export default Navbar;
