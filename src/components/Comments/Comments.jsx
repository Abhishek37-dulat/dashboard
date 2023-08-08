import { Box, Typography, styled } from "@mui/material";
import React from "react";
import CommentBox from "./CommentBox";

const AllCommentBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "20px",
}));

const CommetPageTitle = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
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

const Comments = () => {
  return (
    <AllCommentBox>
      <CommetPageTitle>
        <Typography>
          User Comments: <b style={{ color: "#5A73CD" }}>1458</b>
        </Typography>
      </CommetPageTitle>
      <CommentMainBox>
        <CommentBox />
        <CommentBox />
        <CommentBox />
        <CommentBox />
        <CommentBox />
        <CommentBox />
        <CommentBox />
      </CommentMainBox>
    </AllCommentBox>
  );
};

export default Comments;
