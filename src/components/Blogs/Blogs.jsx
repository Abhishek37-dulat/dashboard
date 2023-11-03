import { Box, Button, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { useNavigate } from "react-router-dom";
import SingleBlog from "./SingleBlog";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlog } from "../../redux/actions/BlogAction";

const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "10px",
}));

const AddBlogs = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",

  "&>button": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "8px 30px",
    backgroundColor: "#5A73CD",
    color: "#fff",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
    borderRadius: "5px",
    transition: "transform 0.2s",
    cursor: "pointer",
    border: "none",
    outline: "none",
    ":active": {
      transform: "scale(.98)",
    },
    ":focus": {
      boxShadow: "0px 0px 5px rgba(90,115,205,0.5)",
    },
  },
}));

const AllBlogs = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  marginTop: "20px",

  "&>div": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    "&>p": {
      fontSize: "36px",
      fontFamily: "'Outfit', sans-serif",
      color: "#252F43",
    },
  },
}));

const Blog = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  marginTop: "20px",
  flexWrap: "wrap",
}));

const Blogs = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { BlogData } = useSelector((state) => state.Blogs);
  useEffect(() => {
    dispatch(getAllBlog());
  }, []);
  console.log(BlogData);
  return (
    <MainBox>
      <AddBlogs>
        <button onClick={() => navigate("/blogs/add")}>
          <Typography>
            <NoteAddIcon />
          </Typography>
          <Typography>Create New Blog</Typography>
        </button>
      </AddBlogs>
      <AllBlogs>
        <Box>
          <Typography>Blogs</Typography>
        </Box>
        <Blog>
          {BlogData.length > 0
            ? BlogData?.map((data) => {
                return <SingleBlog data={data} key={data?._id} />;
              })
            : null}
        </Blog>
      </AllBlogs>
    </MainBox>
  );
};

export default Blogs;
