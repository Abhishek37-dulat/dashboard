import { Box } from "@mui/material";
import React from "react";
import Blogs from "../../components/Blogs/Blogs";
import AddBlog from "../../components/Blogs/AddBlog/AddBlog";

const AddBlogPage = () => {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "85%",
        marginLeft: "15%",
        marginTop: "19.5vh",
      }}
    >
      <AddBlog />
    </Box>
  );
};

export default AddBlogPage;
