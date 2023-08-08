import React, { useContext, useEffect } from "react";
import MiddleSection from "../../components/Home/MiddleSection";
import RightSection from "../../components/Home/RightSection";
import { Box } from "@mui/material";
import { DataContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  return (
    <>
      <RightSection />
      <Box
        style={{
          display: "flex",
          width: "65%",
          marginLeft: "15%",
          marginTop: "19.5vh",
        }}
      >
        <MiddleSection />
      </Box>
    </>
  );
};

export default Home;
