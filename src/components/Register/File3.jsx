import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  styled,
  Snackbar,
  Alert,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { authenticatesSignup } from "../../service/api";

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
  overflowY: "auto",
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
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0px 0px 2px rgba(0,0,0,0.5)",
    outline: "none",
    border: "none",
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

const File3 = ({
  handleOnChange,
  userDetails,
  setUserDetails,
  navigate,
  elementRef3,
  setShowFile,
  showFile,
}) => {
  const [zip_code, setzip_code] = useState(false);
  const [company_logo, setcompany_logo] = useState(false);
  const [company_type, setcompany_type] = useState(false);
  const [company_since, setcompany_since] = useState(false);
  const [total_outlets, settotal_outlets] = useState(false);
  const [headquater_location, setheadquater_location] = useState(false);
  const [number_of_employee, setnumber_of_employee] = useState(false);

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    !userDetails.zip_code ? setzip_code(true) : setzip_code(false);
    !userDetails.company_logo ? setcompany_logo(true) : setcompany_logo(false);
    !userDetails.company_type ? setcompany_type(true) : setcompany_type(false);
    !userDetails.company_since
      ? setcompany_since(true)
      : setcompany_since(false);
    !userDetails.total_outlets
      ? settotal_outlets(true)
      : settotal_outlets(false);
    !userDetails.headquater_location
      ? setheadquater_location(true)
      : setheadquater_location(false);
    !userDetails.number_of_employee
      ? setnumber_of_employee(true)
      : setnumber_of_employee(false);
    if (
      userDetails.zip_code &&
      userDetails.company_logo &&
      userDetails.company_type &&
      userDetails.company_since &&
      userDetails.total_outlets &&
      userDetails.headquater_location &&
      userDetails.number_of_employee
    ) {
      const data = await authenticatesSignup(userDetails);
      if (data.status === 200) {
        setOpen(true);
        setMessageColor("success");
        setMessage(data.data.msg);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      } else {
        setOpen(true);
        setMessageColor("error");
        setMessage(
          data?.data?.error?.details[0]?.message
            ? data?.data?.error?.details[0]?.message
            : data.data.response
        );
        setTimeout(() => {
          setShowFile(0);
        }, 3000);
      }
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
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
      <RegisterContainer ref={elementRef3}>
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
        <form onSubmit={(e) => handleSubmit(e)}>
          <UserButtonBack>
            <Button onClick={(e) => setShowFile(1)}>
              <ArrowBackIcon />
              &#160;Back
            </Button>
          </UserButtonBack>
          <UserUsername>
            <input
              type="text"
              name="zip_code"
              value={userDetails.zip_code}
              onChange={(e) => handleOnChange(e)}
              placeholder="zip code"
            />
            {zip_code ? <p>Field is required *</p> : null}
          </UserUsername>
          <UserUsername>
            <input
              type="text"
              name="company_logo"
              value={userDetails.company_logo}
              onChange={(e) => handleOnChange(e)}
              placeholder="Company Logo"
            />
            {company_logo ? <p>Field is required *</p> : null}
          </UserUsername>
          <UserUsername>
            <input
              type="text"
              name="company_type"
              value={userDetails.company_type}
              onChange={(e) => handleOnChange(e)}
              placeholder="Company Type"
            />
            {company_type ? <p>Field is required *</p> : null}
          </UserUsername>
          <UserUsername>
            <input
              type="text"
              name="company_since"
              value={userDetails.company_since}
              onChange={(e) => handleOnChange(e)}
              placeholder="Company Since"
            />
            {company_since ? <p>Field is required *</p> : null}
          </UserUsername>
          <UserUsername>
            <input
              type="text"
              name="total_outlets"
              value={userDetails.total_outlets}
              onChange={(e) => handleOnChange(e)}
              placeholder="Total Outlets"
            />
            {total_outlets ? <p>Field is required *</p> : null}
          </UserUsername>
          <UserUsername>
            <input
              type="text"
              name="headquater_location"
              value={userDetails.headquater_location}
              onChange={(e) => handleOnChange(e)}
              placeholder="Headquater Location"
            />
            {headquater_location ? <p>Field is required *</p> : null}
          </UserUsername>
          <UserUsername>
            <input
              type="text"
              name="number_of_employee"
              value={userDetails.number_of_employee}
              onChange={(e) => handleOnChange(e)}
              placeholder="Number Of Employee"
            />
            {number_of_employee ? <p>Field is required *</p> : null}
          </UserUsername>

          <UserButton>
            <Button onClick={(e) => handleSubmit(e)}>Submit</Button>
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

export default File3;
