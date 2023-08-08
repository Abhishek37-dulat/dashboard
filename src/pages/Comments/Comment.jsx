import { Box } from "@mui/material";
import React from "react";
import Comments from "../../components/Comments/Comments";

const Comment = () => {
  return (
    <Box
      style={{
        display: "flex",
        width: "85%",
        marginLeft: "15%",
        marginTop: "19.5vh",
      }}
    >
      <Comments />
    </Box>
  );
};

export default Comment;
