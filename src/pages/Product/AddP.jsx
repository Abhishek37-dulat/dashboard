import React from "react";
import { Box } from "@mui/material";
import AddProduct from "../../components/Products/AddProduct";

const AddP = () => {
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
        <AddProduct />{" "}
      </Box>
    </>
  );
};

export default AddP;
