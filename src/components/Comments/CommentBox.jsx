import { Box, Typography, styled } from "@mui/material";
import React from "react";
import Laptop from "../../assets/image/Laptop2-removeb.png";
import User from "../../assets/image/pp.png";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
{
  /* <FontAwesomeIcon icon="fas fa-star" style={{color: "#fad000",}} /> */
}
const Comment = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "43%",
  padding: "10px",
  backgroundColor: "#fff",
  borderRadius: "10px",
  boxShadow: "0px 0px 7px rgba(0,0,0,0.3)",
  margin: "1%",
  [theme.breakpoints.down("md")]: {
    width: `${"100%"}`,
  },
}));
const CommentDateBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-end",
  width: "100%",
  "& > p": {
    marginTop: "-5px",
    fontFamily: "'Pangolin', cursive",
    fontSize: "10px",
    color: "#6A6A6A",
  },
  [theme.breakpoints.down("md")]: {},
}));

const CommentProductBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "riw",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  [theme.breakpoints.down("md")]: {},
}));
const CommentProductBoxLeft = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "25%",
  [theme.breakpoints.down("md")]: {},
}));
const CommentProductBoxImage = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "& > img": {
    width: "70px",
  },
  [theme.breakpoints.down("md")]: {},
}));
const CommentProductBoxRight = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "75%",
  [theme.breakpoints.down("md")]: {},
}));
const CommentProductBoxTitle = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  width: "100%",
  "& > p": {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "10px",
    color: "#6A6A6A",
  },
  [theme.breakpoints.down("md")]: {},
}));
const CommentProductBoxDescription = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  "& > p": {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "10px",
    color: "#6A6A6A",
  },
  [theme.breakpoints.down("md")]: {},
}));
const CommentClientBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  marginTop: "5px",
  [theme.breakpoints.down("md")]: {},
}));

const CommentClientBoxLeft = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "felx-start",
  width: "35%",
  [theme.breakpoints.down("md")]: {},
}));

const CommentClientBoxUserImage = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  //   width: "100%",
  "& > img": {
    width: "40px",
  },
  [theme.breakpoints.down("md")]: {},
}));
const CommentClientBoxUserName = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "2px",
  //   width: "100%",
  "& > p": {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "12px",
    color: "#252F43",
  },
  [theme.breakpoints.down("md")]: {},
}));
const CommentClientBoxUserProduct = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  "& > img": {
    width: "110px",
  },
  [theme.breakpoints.down("md")]: {},
}));
const CommentClientBoxRight = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "65%",
  [theme.breakpoints.down("md")]: {},
}));
const CommentClientBoxStar = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "100%",
  color: "#D3CA07",
  margin: "5px 0px",
  [theme.breakpoints.down("md")]: {},
}));
const CommentClientBoxDescription = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  "& > p": {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "12px",
    fontWeight: "500",
    color: "#252F43",
  },
  [theme.breakpoints.down("md")]: {},
}));
const CommentBox = () => {
  const starsArray = Array.from({ length: 5 }).map((_, index) => (
    <FontAwesomeIcon icon={faStar} />
  ));
  return (
    <Comment>
      <CommentDateBox>
        <Typography>28/08/2001</Typography>
        <Typography>Tuesday</Typography>
      </CommentDateBox>
      <CommentProductBox>
        <CommentProductBoxLeft>
          <CommentProductBoxImage>
            <img src={Laptop} alt="" />
          </CommentProductBoxImage>
        </CommentProductBoxLeft>
        <CommentProductBoxRight>
          <CommentProductBoxTitle>
            <Typography>Product Title</Typography>
          </CommentProductBoxTitle>
          <CommentProductBoxDescription>
            <Typography>
              React Context API is designed to share data between components,
              while Redux is designed for centralized state management.
            </Typography>
          </CommentProductBoxDescription>
        </CommentProductBoxRight>
      </CommentProductBox>
      <CommentClientBox>
        <CommentClientBoxLeft>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
              margin: "5px 0px",
            }}
          >
            <CommentClientBoxUserImage>
              <img src={User} alt="" />
            </CommentClientBoxUserImage>
            <CommentClientBoxUserName>
              <Typography>User Name</Typography>
            </CommentClientBoxUserName>
          </Box>
          <CommentClientBoxUserProduct>
            <img src={Laptop} alt="" />
          </CommentClientBoxUserProduct>
        </CommentClientBoxLeft>
        <CommentClientBoxRight>
          <CommentClientBoxStar>{starsArray}</CommentClientBoxStar>
          <CommentClientBoxDescription>
            <Typography>
              When working with state management in React applications, you may
              come across two popular options: useContext and Redux. Both
              approaches provide ways to manage and share state across
              components, but they have different purposes and use cases. In
              this article, we’ll explore the key differences between useContext
              and Redux to help you understand when to use each one.
            </Typography>
          </CommentClientBoxDescription>
        </CommentClientBoxRight>
      </CommentClientBox>
    </Comment>
  );
};

export default CommentBox;
