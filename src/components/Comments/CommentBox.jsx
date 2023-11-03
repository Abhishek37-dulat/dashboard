import { Box, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import Laptop from "../../assets/image/Laptop2-removeb.png";
import User from "../../assets/image/pp.png";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../redux/actions/ProductAction";
import noimage from "../../assets/image/istockphoto-922962354-612x612.jpg";
import Rating from "@mui/material/Rating";
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
    height: "40px",
    borderRadius: "100%",
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
    width: "100px",
  },
  [theme.breakpoints.down("md")]: {},
}));
const CommentClientBoxRight = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
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
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  "& > p": {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "12px",
    fontWeight: "500",
    color: "#252F43",
  },
  [theme.breakpoints.down("md")]: {},
}));
const CommentBox = ({ data }) => {
  // const dispatch = useDispatch();
  const { ProductData } = useSelector((state) => state.Products);
  const { UserData, UserProfileData } = useSelector((state) => state.Users);

  const date = new Date(data?.createdAt);
  const dayNumber = date.getDay();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = daysOfWeek[dayNumber];

  const product = ProductData.find((item) => item._id === data.productID);
  const user = UserData.find((item) => item._id === data.userID);
  const profile = UserProfileData.find((item) => item.user_id === data.userID);
  console.log(user, profile, data);
  return (
    <>
      {data ? (
        <Comment>
          <CommentDateBox>
            <Typography>{String(data?.createdAt).substring(0, 10)}</Typography>
            <Typography>{dayName ? dayName : ""}</Typography>
          </CommentDateBox>
          <CommentProductBox>
            <CommentProductBoxLeft>
              <CommentProductBoxImage>
                <img src={product?.product_image[0]?.url} alt="imagenew" />
              </CommentProductBoxImage>
            </CommentProductBoxLeft>
            <CommentProductBoxRight>
              <CommentProductBoxTitle>
                <Typography>{product?.product_title}</Typography>
              </CommentProductBoxTitle>
              <CommentProductBoxDescription>
                <Typography>
                  {String(product?.product_description).length > 100
                    ? String(product?.product_description).substring(0, 100) +
                      "..."
                    : String(product?.product_description)}
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
                  <img src={profile?.image[0]?.url} alt="usernew" />
                </CommentClientBoxUserImage>
                <CommentClientBoxUserName>
                  <Typography>
                    {user?.first_name} {user?.last_name}
                  </Typography>
                </CommentClientBoxUserName>
              </Box>
              <CommentClientBoxUserProduct>
                <img src={data?.image[0]?.url} alt="usernew" />
              </CommentClientBoxUserProduct>
            </CommentClientBoxLeft>
            <CommentClientBoxRight>
              <Rating name="read-only" value={String(data?.rating)} readOnly />
              {/* <CommentClientBoxStar>{starsArray}</CommentClientBoxStar> */}
              <CommentClientBoxDescription>
                <Typography style={{ fontWeight: "600" }}>
                  {data?.title}
                </Typography>
                <Typography>{data?.comment}</Typography>
              </CommentClientBoxDescription>
            </CommentClientBoxRight>
          </CommentClientBox>
        </Comment>
      ) : null}
    </>
  );
};

export default CommentBox;
