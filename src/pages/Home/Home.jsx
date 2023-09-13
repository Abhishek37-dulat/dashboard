import React, { useContext, useEffect, useState } from "react";
import MiddleSection from "../../components/Home/MiddleSection";
import RightSection from "../../components/Home/RightSection";
import { Box, styled } from "@mui/material";
import { DataContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "65%",
  marginLeft: "15%",
  marginTop: "19.5vh",
  [theme.breakpoints.down("md")]: {
    width: "75%",
    marginLeft: "0%",
  },
}));

const Home = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  useEffect(() => {
    console.log(localStorage.getItem("admintoken"));
    setToken(localStorage.getItem("admintoken"));
  }, [token]);
  return (
    <>
      <RightSection />
      <MainBox>
        <MiddleSection />
      </MainBox>
    </>
  );
};

export default Home;
