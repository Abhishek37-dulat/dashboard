import { Box } from "@mui/material";
import React from "react";
import SingleOrder from "../../components/OrderItem/OnOrder/SingleOrder";

const SingleOrders = () => {
  return (
    <Box
      style={{
        display: "flex",
        width: "85%",
        marginLeft: "15%",
        marginTop: "19.5vh",
      }}
    >
      <SingleOrder />
    </Box>
  );
};

export default SingleOrders;
