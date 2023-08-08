import { Box, Typography, styled } from "@mui/material";
import React from "react";
import ItemMain from "./ItemMain";

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
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  height: "5vh",
  padding: "20px",
  "& > p": {
    fontFamily: "'Pangolin', cursive",
    fontSize: "24px",
    padding: "10px",
    backgroundColor: "#FfFfFf",
    marginRight: "10px",
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

const OrderItem = () => {
  return (
    <AllCommentBox>
      <CommetPageTitle>
        <Typography>
          Total Orders: <b style={{ color: "#5A73CD" }}>1458</b>
        </Typography>
        <Typography>
          Todays Orders: <b style={{ color: "#5A73CD" }}>145</b>
        </Typography>
      </CommetPageTitle>
      <CommentMainBox>
        <ItemMain />
      </CommentMainBox>
    </AllCommentBox>
  );
};

export default OrderItem;
