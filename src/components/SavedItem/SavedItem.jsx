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
  return (
    <AllCommentBox>
      <CommetPageTitle>
        <Typography>
          Total Saved Item: <b style={{ color: "#5A73CD" }}>1458</b>
        </Typography>
      </CommetPageTitle>
      <CommentMainBox>
        <ItemMain />
      </CommentMainBox>
    </AllCommentBox>
  );
};

export default SavedItem;
