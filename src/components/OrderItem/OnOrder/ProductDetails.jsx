import React, { useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import ProductDetailSingle from "./ProductDetailSingle";
import { useSelector } from "react-redux";

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

const ProductDetail = ({ orderDetails }) => {
  return (
    <CommetPageTitle>
      <Ticket1>
        <Typography>PRODUCT DETAILS</Typography>
      </Ticket1>
      <Ticket2>
        <Typography>Product</Typography>
        <Typography>Product Name</Typography>
        <Typography>Price</Typography>
        <Typography>Qty</Typography>
        <Typography>Amount</Typography>
        <Typography>Balance Qty</Typography>
      </Ticket2>
      {orderDetails?.items?.map((data, index) => {
        return (
          <ProductDetailSingle key={data._id} Number={index} data={data} />
        );
      })}
    </CommetPageTitle>
  );
};

export default ProductDetail;
