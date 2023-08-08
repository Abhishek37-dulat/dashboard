import React from "react";
import { Box, Typography, styled } from "@mui/material";

const CommetPageTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "98%",
  padding: "20px",
  margin: "2%",
  backgroundColor: "#fff",
}));

const Ticket1 = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#252F43",
}));
const Ticket2 = styled(Box)(({ theme }) => ({
  borderBottom: "1px solid #D9E0E6",
  width: "100%",
  display: "flex",
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: "15px",
  "& > p": {
    flex: 1,
    padding: "2px",
    color: "#252F43",
  },
}));
const Ticket3 = styled(Box)(({ theme }) => ({
  borderBottom: "1px solid #D9E0E6",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& > p": {
    flex: 1,
    color: "#4E5C66",
    padding: "2px",
    paddingBottom: "20px",
    "& > img": {
      width: "100px",
      padding: "2px",
    },
    "& > button": {
      padding: "7px 20px",
      border: "none",
      outline: "none",
      color: "#fff",
      backgroundColor: "#5A73CD",
      cursor: "pointer",
      ":hover": {
        boxShadow: "0px 0px 5px rgba(0,0,0,0.3)",
      },
      ":active": {
        transform: "scale(0.98)",
      },
    },
  },
}));

const UserAddressDetails = () => {
  return (
    <CommetPageTitle>
      <Ticket1>
        <Typography>DELIVERY DETAILS</Typography>
      </Ticket1>
      <Ticket2>
        <Typography>
          Plot No 7 First Floor, IT Park Twin Tower, Sector 22, Budanpur,
          Panchkula, Chaunki, Haryana 134109
        </Typography>
      </Ticket2>
      <Ticket2>
        <Typography>
          Plot No 21 First Floor, IT Park Twin Tower, Sector 22, Budanpur,
          Panchkula, Chaunki, Haryana 134109
        </Typography>
      </Ticket2>
    </CommetPageTitle>
  );
};

export default UserAddressDetails;
