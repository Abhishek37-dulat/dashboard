import React from "react";
import { Box, Typography, styled } from "@mui/material";
import laptop from "../../../assets/image/Laptop2-removeb.png";

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
    "& > img": {
      width: "100px",
      padding: "2px",
    },
  },
}));

const ProductDetailSingle = () => {
  return (
    <Ticket3>
      <Typography>
        <img src={laptop} alt="" />
      </Typography>
      <Typography>Laptop Laptop Laptop Laptop Laptop</Typography>
      <Typography>₹{37.0}</Typography>
      <Typography>{1}</Typography>
      <Typography>₹{37.0}</Typography>
      <Typography>{34}</Typography>
    </Ticket3>
  );
};

export default ProductDetailSingle;
