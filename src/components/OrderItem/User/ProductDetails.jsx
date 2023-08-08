import React from "react";
import { Box, Typography, styled } from "@mui/material";
import laptop from "../../../assets/image/Laptop2-removeb.png";
import ProductDetailSingle from "./ProductDetailSingle";

const CommetPageTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "98%",
  padding: "20px",
  margin: "2%",
  backgroundColor: "#fff",
}));

const Ticket1 = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#252F43",
}));
const Ticket2 = styled(Box)(({ theme }) => ({
  borderBottom: "1px solid #D9E0E6",
  width: "100%",
  display: "flex",
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  marginTop: "15px",
  "& > p": {
    flex: 1,
    padding: "2px",
    color: "#252F43",
  },
}));

const ProductDetail = () => {
  return (
    <CommetPageTitle>
      <Ticket1>
        <Typography>ALL ORDERS</Typography>
      </Ticket1>
      <Ticket2>
        <Typography>Product</Typography>
        <Typography>Product Name</Typography>
        <Typography>Price</Typography>
        <Typography>Qty</Typography>
        <Typography>Amount</Typography>
        <Typography>Payment Status</Typography>
        <Typography>Delivery Status</Typography>
      </Ticket2>
      <ProductDetailSingle />
      <ProductDetailSingle />
      <ProductDetailSingle />
    </CommetPageTitle>
  );
};

export default ProductDetail;
