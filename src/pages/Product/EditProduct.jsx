import { Box } from "@mui/material";
import React from "react";
import ProductSinglePage from "../../components/Products/ProductSinglePage";

const EditProduct = () => {
  return (
    <Box
      style={{
        display: "flex",
        width: "85%",
        marginLeft: "15%",
        marginTop: "19.5vh",
      }}
    >
      <ProductSinglePage />
    </Box>
  );
};

export default EditProduct;
