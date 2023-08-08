import React, { useState } from "react";
import { Box, Button, Typography, styled } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const RegisterContainer = styled(Box)(({ theme }) => ({
  width: "0%",
  height: "98vh",
  backgroundColor: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  borderRadius: "0px 20px 20px 0px",
  overflow: "hidden",
  overflowY: "auto",
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
    marginTop: "5px",
    width: "100%",
    height: "50px",
    paddingLeft: "20px",
    borderRadius: "5px",
    boxShadow: "0px 0px 2px rgba(0,0,0,0.5)",
    outline: "none",
    border: "none",
  },
  "& > textarea": {
    marginTop: "5px",
    width: "100%",
    height: "50px",
    paddingLeft: "20px",
    borderRadius: "5px",
    boxShadow: "0px 0px 2px rgba(0,0,0,0.5)",
    outline: "none",
    border: "none",
    resize: "none",
    paddingTop: "20px",
    "::placeholder": {
      position: "absolute",
      bottom: "10px",
      left: "20px",
    },
    ":active": {
      bottom: "30px",
    },
  },
  "& > p": {
    marginTop: "2px",
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

const UserButtonBack = styled(Box)(({ Theme }) => ({
  //   border: "1px solid black",
  marginTop: "5px",
  width: "50%",
  height: "15%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  "& > button": {
    width: "40%",
    height: "60%",
    padding: "20px",
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

const File2 = ({
  handleOnChange,
  userDetails,
  setUserDetails,
  navigate,
  elementRef2,
  setShowFile,
  showFile,
}) => {
  const [company_name, setcompany_name] = useState(false);
  const [company_registration_number, setcompany_registration_number] =
    useState(false);
  const [company_location, setcompany_location] = useState(false);
  const [city, setcity] = useState(false);
  const [state, setstate] = useState(false);
  const [country, setcountry] = useState(false);
  const handleNext = (e) => {
    e.preventDefault();
    !userDetails.company_name ? setcompany_name(true) : setcompany_name(false);
    !userDetails.company_registration_number
      ? setcompany_registration_number(true)
      : setcompany_registration_number(false);
    !userDetails.company_location
      ? setcompany_location(true)
      : setcompany_location(false);
    !userDetails.city ? setcity(true) : setcity(false);
    !userDetails.state ? setstate(true) : setstate(false);
    !userDetails.country ? setcountry(true) : setcountry(false);
    if (
      userDetails.company_name &&
      userDetails.company_registration_number &&
      userDetails.company_location &&
      userDetails.city &&
      userDetails.state &&
      userDetails.country
    ) {
      setShowFile(2);
    }
  };
  return (
    <>
      <RegisterContainer ref={elementRef2}>
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
          <UserButtonBack>
            <Button onClick={(e) => setShowFile(0)}>
              <ArrowBackIcon />
              &#160;Back
            </Button>
          </UserButtonBack>
          <UserUsername>
            <input
              type="text"
              name="company_name"
              value={userDetails.company_name}
              onChange={(e) => handleOnChange(e)}
              placeholder="Company Name"
            />
            {company_name ? <p>Field is required *</p> : null}
          </UserUsername>
          <UserUsername>
            <input
              type="text"
              name="company_registration_number"
              value={userDetails.company_registration_number}
              onChange={(e) => handleOnChange(e)}
              placeholder="Company Registration Number"
            />
            {company_registration_number ? <p>Field is required *</p> : null}
          </UserUsername>
          <UserUsername>
            <textarea
              type="text"
              name="company_location"
              value={userDetails.company_location}
              onChange={(e) => handleOnChange(e)}
              placeholder="Company Address"
            ></textarea>
            {company_location ? <p>Field is required *</p> : null}
          </UserUsername>
          <UserUsername>
            <input
              type="text"
              name="city"
              value={userDetails.city}
              onChange={(e) => handleOnChange(e)}
              placeholder="City"
            />
            {city ? <p>Field is required *</p> : null}
          </UserUsername>
          <UserUsername>
            <input
              type="text"
              name="state"
              value={userDetails.state}
              onChange={(e) => handleOnChange(e)}
              placeholder="State"
            />
            {state ? <p>Field is required *</p> : null}
          </UserUsername>
          <UserUsername>
            <input
              type="text"
              name="country"
              value={userDetails.country}
              onChange={(e) => handleOnChange(e)}
              placeholder="Country"
            />
            {country ? <p>Field is required *</p> : null}
          </UserUsername>

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

export default File2;
