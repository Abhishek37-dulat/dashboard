import { Box, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import OrderDetail from "./OrderDetail";
import ProductDetail from "./ProductDetails";
import UserDetails from "./UserDetails";
import UserAddressDetails from "./UserAddressDetails";
import DeliveryStatus from "./DeliveryStatus";
import { useSelector } from "react-redux";

const AllCommentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "20px",
}));

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
  borderBottom: "1px solid #D9E0E6",
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

const CommentMainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  margin: "5px",
}));

const SingleOrder = () => {
  const { SingleOrder } = useSelector((state) => state.Orders);
  const { SingleUser } = useSelector((state) => state.Users);
  const [orderDetails, setOrderDetails] = useState();
  const [orderUsers, setOrderUsers] = useState();

  useEffect(() => {
    SingleOrder?.map((data, index) => {
      if (SingleOrder?.length - 1 === index) {
        localStorage.removeItem("OrderDetailsAdmin");
        localStorage.setItem("OrderDetailsAdmin", JSON.stringify(data));
        setOrderDetails(data);
      }
    });
  }, [SingleOrder, setOrderDetails]);
  useEffect(() => {
    if (SingleUser) {
      if (SingleUser?.length === 0) {
        console.log(".........................", SingleUser);
      } else {
        localStorage.setItem("OrderUserAdmin", JSON.stringify(SingleUser));
        setOrderUsers(SingleUser);
      }
    }
  }, [SingleUser, setOrderDetails]);

  useEffect(() => {
    const data = localStorage.getItem("OrderDetailsAdmin");
    const temp = JSON.parse(data);
    setOrderDetails(temp);
  }, []);
  useEffect(() => {
    const data = localStorage.getItem("OrderUserAdmin");
    const temp = JSON.parse(data);
    console.log(temp);
    setOrderUsers(temp);
  }, []);
  console.log(SingleOrder);
  return (
    <>
      <AllCommentBox>
        <OrderDetail orderDetails={orderDetails} />
        <ProductDetail orderDetails={orderDetails} />
        <UserDetails SingleUser={orderUsers} />
        <UserAddressDetails />
        <DeliveryStatus />
      </AllCommentBox>
    </>
  );
};

export default SingleOrder;
