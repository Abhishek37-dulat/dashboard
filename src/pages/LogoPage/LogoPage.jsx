import { Box } from "@mui/material";
import React from "react";
import { Logo } from "../../components/Logo/Logo";

const LogoPage = () => {
  return (
    <Box
      style={{
        display: "flex",
        width: "85%",
        marginLeft: "15%",
        marginTop: "19.5vh",
      }}
    >
      <Logo />
    </Box>
  );
};

export default LogoPage;
