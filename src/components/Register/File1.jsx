import React, { useState } from "react";
import { Box, Button, Typography, styled } from "@mui/material";

const RegisterContainer = styled(Box)(({ theme }) => ({
  width: "0%",
  height: "98vh",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  borderRadius: "0px 20px 20px 0px",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
  "& > form": {
    width: "100%",
    height: "70%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
}));
const RegisterContainerTopBox = styled(Box)(({ Theme }) => ({
  //   border: "1px solid black",
  width: "100%",
  height: "20px",
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  "& > span": {
    width: "15px",
    height: "15px",
    marginRight: "15px",
    marginTop: "10px",
    borderRadius: "50%",
  },
}));

const RegisterTitle = styled(Box)(({ Theme }) => ({
  // border: "1px solid black",
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
  // border: "1px solid black",
  width: "50%",
  height: "15%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  "& > input": {
    width: "100%",
    height: "50px",
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
    height: "50px",
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
  height: "15%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "& > button": {
    width: "80%",
    height: "60%",
    padding: "25px",
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

const File1 = ({
  handleOnChange,
  userDetails,
  setUserDetails,
  navigate,
  elementRef,
  setShowFile,
  showFile,
}) => {
  const [first_name, setFirst_name] = useState(false);
  const [last_name, setLast_name] = useState(false);
  const [reemail, setReemail] = useState(false);
  const [rephone, setRephone] = useState(false);
  const [password, setpassword] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [conPas, setConPas] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    !userDetails.first_name ? setFirst_name(true) : setFirst_name(false);
    !userDetails.last_name ? setLast_name(true) : setLast_name(false);
    !userDetails.email ? setReemail(true) : setReemail(false);
    !userDetails.phone ? setRephone(true) : setRephone(false);
    !userDetails.password ? setpassword(true) : setpassword(false);
    !userDetails.confirm_password ? setConfirm(true) : setConfirm(false);
    if (
      userDetails.first_name &&
      userDetails.last_name &&
      userDetails.email &&
      userDetails.phone &&
      userDetails.password &&
      userDetails.confirm_password
    ) {
      if (userDetails.confirm_password !== userDetails.password) {
        setConPas(true);
      } else {
        setConPas(false);
        setShowFile(1);
      }
    }
  };
  return (
    <>
      <RegisterContainer ref={elementRef}>
        <RegisterContainerTopBox>
          <span style={{ backgroundColor: "#C66463" }}></span>
          <span style={{ backgroundColor: "#C6A762" }}></span>
          <span style={{ backgroundColor: "#77CC89" }}></span>
        </RegisterContainerTopBox>
        <RegisterTitle>
          <span></span>
          <p>Register</p>
          <span></span>
        </RegisterTitle>
        <form onSubmit={(e) => handleNext(e)}>
          <UserUsername>
            <input
              type="text"
              name="first_name"
              value={userDetails.first_name}
              onChange={(e) => handleOnChange(e)}
              placeholder="First Name"
            />
            {first_name ? <p>Field is required *</p> : null}
          </UserUsername>
          <UserUsername>
            <input
              type="text"
              name="last_name"
              value={userDetails.last_name}
              onChange={(e) => handleOnChange(e)}
              placeholder="Last Name"
            />
            {last_name ? <p>Field is required *</p> : null}
          </UserUsername>
          <UserUsername>
            <input
              type="email"
              name="email"
              value={userDetails.email}
              onChange={(e) => handleOnChange(e)}
              placeholder="Email Id"
            />
            {reemail ? <p>Field is required *</p> : null}
          </UserUsername>
          <UserUsername>
            <input
              type="number"
              name="phone"
              value={userDetails.phone}
              onChange={(e) => handleOnChange(e)}
              placeholder="Phone Number"
            />
            {rephone ? <p>Field is required *</p> : null}
          </UserUsername>
          <UserPassword>
            <input
              type="password"
              name="password"
              value={userDetails.password}
              onChange={(e) => handleOnChange(e)}
              placeholder="Create Password"
            />
            {conPas ? (
              <p>password and confirm password should match *</p>
            ) : null}
            {password ? <p>Field is required *</p> : null}{" "}
          </UserPassword>
          <UserPassword>
            <input
              type="text"
              name="confirm_password"
              value={userDetails.confirm_password}
              onChange={(e) => handleOnChange(e)}
              placeholder="Confirm Password"
            />
            {conPas ? (
              <p>password and confirm password should match *</p>
            ) : null}
            {confirm ? <p>Field is required *</p> : null}{" "}
          </UserPassword>
          <UserButton>
            <Button onClick={(e) => handleNext(e)}>next</Button>
          </UserButton>
          <Typography
            style={{ color: "#2DB484", cursor: "pointer" }}
            onClick={() => navigate("/login")}
          >
            Already have an account?
          </Typography>
        </form>
      </RegisterContainer>
    </>
  );
};

export default File1;
