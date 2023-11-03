import React, { useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { useSelector } from "react-redux";
import SingleOrder from "../../Home/SingleOrder";

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
const Ticket3 = styled(Box)(({ theme }) => ({
  borderBottom: "1px dashed #D9E0E6",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& > p": {
    flex: 1,
    color: "#4E5C66",
    padding: "2px",
    paddingBottom: "20px",
  },
}));
const Ticket4 = styled(Box)(({ theme }) => ({
  borderBottom: "1px solid #D9E0E6",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10px",
  "& > p": {
    flex: 1,
    padding: "2px",
    color: "#252F43",
  },
}));
const Ticket5 = styled(Box)(({ theme }) => ({
  borderBottom: "1px solid #D9E0E6",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& > p": {
    flex: 1,
    color: "#4E5C66",
    padding: "2px",
  },
}));

const OrderDetail = ({ orderDetails }) => {
  console.log(orderDetails);
  return (
    <CommetPageTitle>
      <Ticket1>
        <Typography>
          ORDER DETAIL OF ORDER NO:{" "}
          <span style={{ color: "#5A73CD" }}>{orderDetails?.order_id}</span>
        </Typography>
      </Ticket1>
      <Ticket2>
        <Typography>Razorpay Payment ID</Typography>
        <Typography>Razorpay Order ID</Typography>
        <Typography>Order Date</Typography>
        <Typography>Order Time</Typography>
        <Typography>Order Status</Typography>
      </Ticket2>
      <Ticket3>
        <Typography>dvs_323sd</Typography>
        <Typography>342ssdf_32</Typography>
        <Typography>{orderDetails?.createdAt?.substring(0, 10)}</Typography>
        <Typography>{orderDetails?.createdAt?.substring(11, 19)}</Typography>
        <Typography>{orderDetails?.order_status}</Typography>
      </Ticket3>
      <Ticket4>
        <Typography>Order Price</Typography>
        <Typography>Discount</Typography>
        <Typography>Wallet Discount</Typography>
        <Typography>Delivery Charges</Typography>

        <Typography>Promo Code</Typography>
        <Typography>Total</Typography>
        <Typography>CashBack</Typography>
      </Ticket4>
      <Ticket5>
        <Typography>₹{orderDetails?.total_amount.toFixed(2)}</Typography>
        <Typography>₹{orderDetails?.total_discount.toFixed(2)}</Typography>

        <Typography>₹{0.0}</Typography>
        <Typography>₹{orderDetails?.delivery_charge.toFixed(2)}</Typography>
        <Typography>FRESHCODE</Typography>
        <Typography>
          ₹
          {(orderDetails?.total_amount + orderDetails?.delivery_charge).toFixed(
            2
          )}{" "}
          for {orderDetails?.items?.length} items
        </Typography>
        <Typography>{0} Points</Typography>
      </Ticket5>
    </CommetPageTitle>
  );
};

export default OrderDetail;
