import React from "react";
import ColorsItem from "../../components/Colors/ColorsItem";
import { Box } from "@mui/material";

const ColorPage = () => {
  return (
    <Box
      style={{
        display: "flex",
        width: "85%",
        marginLeft: "15%",
        marginTop: "19.5vh",
      }}
    >
      <ColorsItem />
    </Box>
  );
};

export default ColorPage;
