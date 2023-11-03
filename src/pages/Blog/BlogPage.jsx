import { Box } from "@mui/material";
import React from "react";
import Blogs from "../../components/Blogs/Blogs";

const BlogPage = () => {
  return (
    <Box
      style={{
        display: "flex",
        width: "85%",
        marginLeft: "15%",
        marginTop: "19.5vh",
      }}
    >
      <Blogs />
    </Box>
  );
};

export default BlogPage;
