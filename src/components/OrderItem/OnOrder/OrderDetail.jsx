import React from "react";
import { Box, Typography, styled } from "@mui/material";

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

const OrderDetail = () => {
  return (
    <CommetPageTitle>
      <Ticket1>
        <Typography>
          ORDER DETAIL OF ORDER NO:{" "}
          <span style={{ color: "#5A73CD" }}>{1231133434}</span>
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
        <Typography>29-07-2023</Typography>
        <Typography>17:17:32 PM</Typography>
        <Typography>Order Status</Typography>
      </Ticket3>
      <Ticket4>
        <Typography>Order Price</Typography>
        <Typography>Discount</Typography>
        <Typography>Wallet Discount</Typography>
        <Typography>Delivery Charges</Typography>
        <Typography>COD Charges</Typography>
        <Typography>Promo Code</Typography>
        <Typography>Total</Typography>
        <Typography>CashBack</Typography>
      </Ticket4>
      <Ticket5>
        <Typography>₹{370.0}</Typography>
        <Typography>₹{0.0}</Typography>
        <Typography>₹{0.0}</Typography>
        <Typography>₹{0.0}</Typography>
        <Typography>₹{0.0}</Typography>
        <Typography>FRESHCODE</Typography>
        <Typography>
          ₹{370.0} for {1} items
        </Typography>
        <Typography>CashBack</Typography>
      </Ticket5>
    </CommetPageTitle>
  );
};

export default OrderDetail;
