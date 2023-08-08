import { Box, styled } from "@mui/material";
import React from "react";
import errorImage from "../../assets/image/Error404.png";
import { useNavigate } from "react-router-dom";

const ErrorMain = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "20px",
}));
const ErrorImage = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& > img": {
    width: "45%",
  },
}));
const ErrorButton = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& > button": {
    marginTop: "8px",
    width: "200px",
    height: "55px",
    border: "none",
    outline: "none",
    boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
    borderRadius: "5px",
    backgroundColor: "#5A73CD",
    color: "#fff",
    cursor: "pointer",
    marginLeft: "2px",
    ":active": {
      transform: "scale(0.98)",
    },
  },
}));
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <ErrorMain>
      <ErrorImage>
        <img src={errorImage} alt="image not found" />
      </ErrorImage>
      <ErrorButton>
        <button onClick={() => navigate("/")}>Back To Home Page</button>
      </ErrorButton>
    </ErrorMain>
  );
};

export default NotFound;
