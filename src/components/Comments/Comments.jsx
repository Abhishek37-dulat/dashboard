import { Box, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import CommentBox from "./CommentBox";
import { useDispatch, useSelector } from "react-redux";
import { getAllComments } from "../../redux/actions/CommentsAction";

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
  const dispatch = useDispatch();
  const { CommentData } = useSelector((state) => state.Comments);
  useEffect(() => {
    dispatch(getAllComments());
  }, [dispatch]);

  console.log("CommentData::::::::", CommentData);

  return (
    <AllCommentBox>
      <CommetPageTitle>
        <Typography>
          User Comments:{" "}
          <b style={{ color: "#5A73CD" }}>{CommentData?.length}</b>
        </Typography>
      </CommetPageTitle>
      <CommentMainBox>
        {CommentData?.map((data) => {
          return <CommentBox data={data} />;
        })}
      </CommentMainBox>
    </AllCommentBox>
  );
};

export default Comments;
