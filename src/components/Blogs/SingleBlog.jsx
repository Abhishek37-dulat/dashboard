import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";
import React from "react";
import I1 from "../../assets/image/ArtStation_-_Explore-removebg-preview.png";
import StartIcon from "@mui/icons-material/Start";
import KeyboardTabIcon from "@mui/icons-material/KeyboardTab";
import { useNavigate } from "react-router-dom";

const BlogCard = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: "15px",
  width: "400px",
  backgroundColor: "#fff",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.4)",
  borderRadius: "10px",
}));
const SingleBlog = ({ data }) => {
  const navigate = useNavigate();
  const handleBlogEdit = () => {};
  console.log(data);
  return (
    <BlogCard>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        {data?.blog_image?.length > 0
          ? data?.blog_image?.map((item) => {
              return <img style={{ width: "50%" }} src={item.url} alt="Art1" />;
            })
          : null}
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          width: "100%",
        }}
      >
        <Typography
          style={{
            fontSize: "18px",
            textTransform: "capitalize",
            fontWeight: "600",
          }}
        >
          {data?.blog_title}
        </Typography>
        <Typography
          style={{
            fontSize: "14px",
            textTransform: "capitalize",
            fontWeight: "400",
          }}
        >
          {data?.blog_subtitle}
        </Typography>
        <Typography
          style={{
            fontSize: "16px",
            textTransform: "capitalize",
            fontFamily: "'Outfit', sans-serif",
            fontWeight: "500",
            margin: "10px 0px",
          }}
        >
          {data?.blog_categories.length > 0
            ? data?.blog_categories[0]?.name
            : ""}
        </Typography>

        <div
          style={{
            fontSize: "16px",
            textTransform: "capitalize",
            fontWeight: "400",
            fontFamily: "'Outfit', sans-serif",
          }}
          dangerouslySetInnerHTML={{ __html: data?.blog_description }}
        />
      </Box>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Button
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginRight: "10px",
          }}
          onClick={() => handleBlogEdit()}
        >
          <Typography>Go To Blog </Typography>{" "}
          <Typography>
            <StartIcon style={{ marginTop: "3px", marginLeft: "2px" }} />
          </Typography>
        </Button>
      </Box>
    </BlogCard>
  );
};

export default SingleBlog;
