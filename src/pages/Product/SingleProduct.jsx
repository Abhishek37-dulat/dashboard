import { Box } from "@mui/material";
import React from "react";
import ProductSinglePage from "../../components/Products/ProductSinglePage";
import SingleProductView from "../../components/Products/SingleProductView";

const SingleProduct = () => {
  return (
    <Box
      style={{
        display: "flex",
        width: "85%",
        marginLeft: "15%",
        marginTop: "19.5vh",
      }}
    >
      <SingleProductView />
    </Box>
  );
};

export default SingleProduct;
