import React, { useContext, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Typography,
  styled,
  Snackbar,
  Alert,
} from "@mui/material";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { authenticatesLogin } from "../../service/api";
import { DataContext } from "../../context/authContext";

const LoginBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  backgroundColor: "#252F43",
  margin: "0%",
  padding: "0%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-end",
}));
const LoginContainer = styled(Box)(({ theme }) => ({
  width: "0%",
  height: "98vh",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  borderRadius: "20px 0px 0px 20px",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
  "& > form": {
    width: "100%",
    height: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    "& > p": {
      fontFamily: "'Dosis', sans-serif",
      fontSize: "15px",
      fontWeight: "bold",
      color: "red",
    },
  },
}));
const LoginContainerTopBox = styled(Box)(({ Theme }) => ({
  //   border: "1px solid black",
  width: "100%",
  height: "20px",
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  "& > span": {
    width: "15px",
    height: "15px",
    marginLeft: "15px",
    marginTop: "10px",
    borderRadius: "50%",
  },
}));

const LoginTitle = styled(Box)(({ Theme }) => ({
  //   border: "1px solid black",
  marginTop: "5px",
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

const UserUsername = styled(Box)(({ Theme }) => ({
  //   border: "1px solid black",
  marginTop: "10%",
  width: "50%",
  height: "15%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  "& > input": {
    width: "100%",
    height: "80%",
    paddingLeft: "20px",
    borderRadius: "5px",
    boxShadow: "0px 0px 2px rgba(0,0,0,0.5)",
    outline: "none",
    border: "none",
  },
  "& > p": {
    fontFamily: "'Dosis', sans-serif",
    fontSize: "10px",
    fontWeight: "bold",
    color: "red",
  },
}));
const UserPassword = styled(Box)(({ Theme }) => ({
  //   border: "1px solid black",
  marginTop: "5px",
  width: "50%",
  height: "15%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  "& > input": {
    width: "100%",
    height: "80%",
    paddingLeft: "20px",
    borderRadius: "5px",
    boxShadow: "0px 0px 2px rgba(0,0,0,0.5)",
    outline: "none",
    border: "none",
  },
  "& > p": {
    fontFamily: "'Dosis', sans-serif",
    fontSize: "10px",
    fontWeight: "bold",
    color: "red",
  },
}));

const UserButton = styled(Box)(({ Theme }) => ({
  //   border: "1px solid black",
  marginTop: "5px",
  width: "50%",
  height: "20%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  "& > button": {
    width: "80%",
    height: "60%",
    borderRadius: "5px",
    boxShadow: "0px 0px 2px rgba(0,0,0,0.5)",
    outline: "none",
    border: "none",
    backgroundColor: "#252F43",
    color: "#fff",
    ":hover": {
      backgroundColor: "#2DB484",
      color: "#fff",
    },
  },
}));

const Logins = () => {
  const { setAccountStatus } = useContext(DataContext);
  const navigate = useNavigate();

  const [username, setusername] = useState(false);
  const [password, setpassword] = useState(false);
  const [conUserPas, setConUserPas] = useState(false);
  const elementRef = useRef();
  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");

  const handleOnChange = (e) => {
    e.preventDefault();
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const loginDetails = async (e) => {
    !userDetails.username ? setusername(true) : setusername(false);
    !userDetails.password ? setpassword(true) : setpassword(false);
    if (userDetails.username && userDetails.password) {
      const data = await authenticatesLogin(userDetails);
      if (data.status === 200) {
        setOpen(true);
        setConUserPas(false);
        setMessageColor("success");
        setMessage(data.data.msg);
        setAccountStatus(true);
        navigate("/");
      } else {
        setConUserPas(true);
        setOpen(true);
        setAccountStatus(false);
        setMessageColor("error");
        setMessage(data.response.data.msg);
      }
    } else {
      setConUserPas(false);
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const animateWidth = () => {
      gsap.to(elementRef.current, {
        width: "60%",
        duration: 1,
        ease: "power3.inOut",
      });
    };
    animateWidth();
  }, [elementRef]);

  return (
    <LoginBox>
      {open ? (
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={open}
          key={"top" + "right"}
          autoHideDuration={3000}
          onClose={(e) => handleClose(e)}
        >
          <Alert
            onClose={(e) => handleClose(e)}
            severity={messageColor}
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      ) : null}
      <LoginContainer ref={elementRef}>
        <LoginContainerTopBox>
          <span style={{ backgroundColor: "#C66463" }}></span>
          <span style={{ backgroundColor: "#C6A762" }}></span>
          <span style={{ backgroundColor: "#77CC89" }}></span>
        </LoginContainerTopBox>
        <LoginTitle>
          <span></span>
          <p>Login</p>
          <span></span>
        </LoginTitle>
        <form onSubmit={(e) => loginDetails(e)}>
          {conUserPas ? <p>Username or password is incorrect *</p> : null}
          <UserUsername>
            <input
              type="text"
              name="username"
              value={userDetails.username}
              onChange={(e) => handleOnChange(e)}
              placeholder="Enter Email or Phone number"
            />
            {username ? <p>Enter Valid username *</p> : null}
          </UserUsername>
          <UserPassword>
            <input
              type="text"
              name="password"
              value={userDetails.password}
              onChange={(e) => handleOnChange(e)}
              placeholder="Enter Password"
            />
            {password ? <p>password is required *</p> : null}
          </UserPassword>
          <UserButton>
            <Button onClick={(e) => loginDetails(e)}>Login</Button>
          </UserButton>
          <Typography
            style={{ color: "#2DB484", cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Don't have an account?
          </Typography>
        </form>
      </LoginContainer>
    </LoginBox>
  );
};

export default Logins;
