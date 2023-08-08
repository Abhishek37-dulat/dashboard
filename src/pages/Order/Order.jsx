import { Box } from "@mui/material";
import React from "react";
import OrderItem from "../../components/OrderItem/OrderItem";

const Order = () => {
  return (
    <Box
      style={{
        display: "flex",
        width: "85%",
        marginLeft: "15%",
        marginTop: "19.5vh",
      }}
    >
      <OrderItem />
    </Box>
  );
};

export default Order;
