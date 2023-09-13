import { Box, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import ItemMain from "./ItemMain";
import { useDispatch, useSelector } from "react-redux";
import { getAllCarts } from "../../redux/actions/CartAction";
import { getAllSaves } from "../../redux/actions/SavedAction";

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

const SavedItem = () => {
  const dispatch = useDispatch();
  const { SaveData } = useSelector((state) => state.Saves);
  useEffect(() => {
    dispatch(getAllSaves());
  }, [dispatch]);
  console.log(SaveData);
  return (
    <AllCommentBox>
      <CommetPageTitle>
        <Typography>
          Total Saved Item:{" "}
          <b style={{ color: "#5A73CD" }}>{SaveData?.length}</b>
        </Typography>
      </CommetPageTitle>
      <CommentMainBox>
        <ItemMain data={SaveData} />
      </CommentMainBox>
    </AllCommentBox>
  );
};

export default SavedItem;
