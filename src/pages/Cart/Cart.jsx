import { Box } from "@mui/material";
import React from "react";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
  return (
    <Box
      style={{
        display: "flex",
        width: "85%",
        marginLeft: "15%",
        marginTop: "19.5vh",
      }}
    >
      <CartItem />
    </Box>
  );
};

export default Cart;
