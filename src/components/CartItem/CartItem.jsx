import { Box, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import ItemMain from "./ItemMain";
import { useDispatch, useSelector } from "react-redux";
import { getAllCarts } from "../../redux/actions/CartAction";

const AllCommentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "20px",
}));

const CommetPageTitle = styled(Box)(({ theme }) => ({
  borderBottom: "1px solid #D9E0E6",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
  height: "5vh",
  padding: "20px",
  "& > p": {
    fontFamily: "'Pangolin', cursive",
    fontSize: "24px",
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

const CartItem = () => {
  const dispatch = useDispatch();
  const { CartData } = useSelector((state) => state.Carts);
  useEffect(() => {
    dispatch(getAllCarts());
  }, [dispatch]);
  console.log(CartData);
  return (
    <AllCommentBox>
      <CommetPageTitle>
        <Typography>
          Cart Item: <b style={{ color: "#5A73CD" }}>{CartData?.length}</b>
        </Typography>
      </CommetPageTitle>
      <CommentMainBox>
        <ItemMain data={CartData} />
      </CommentMainBox>
    </AllCommentBox>
  );
};

export default CartItem;
