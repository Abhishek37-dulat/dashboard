import { Box } from "@mui/material";
import React from "react";
import Categorie from "../../components/Categories/Categorie";

const Categories = () => {
  return (
    <>
      <Box
        style={{
          display: "flex",
          width: "85%",
          marginLeft: "15%",
          marginTop: "19.5vh",
        }}
      >
        <Categorie />
      </Box>
    </>
  );
};

export default Categories;
