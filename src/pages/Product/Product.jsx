import React from "react";
import ProductHome from "../../components/Products/ProductHome";
import { Box } from "@mui/material";

const Product = () => {
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
        <ProductHome />
      </Box>
    </>
  );
};

export default Product;
