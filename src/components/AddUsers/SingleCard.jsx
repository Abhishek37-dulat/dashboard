import { Box, IconButton, Typography, styled } from "@mui/material";
import React from "react";
import profileimage from "../../assets/image/pp.png";
import CloudUploadRoundedIcon from "@mui/icons-material/CloudUploadRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";

const MainBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "445px",
  height: "200px",
  padding: "3px",
  boxShadow: "0px 0px 3px rgba(0,0,0,0.3)",
  borderRadius: "7px",
  margin: "5px",
}));

const LeftSection = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "40%",
  height: "100%",
  "&>div:nth-of-type(1)": {
    // border: "1px solid black",
    width: "100%",
    height: "60%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    "&>img": {
      border: "1px solid black",
      width: "90px",
      height: "90px",
      borderRadius: "100%",
    },
    "&>button": {
      position: "absolute",
      right: "25px",
      top: "10px",
    },
  },
  "&>div:nth-of-type(2)": {
    // border: "1px solid black",
    width: "100%",
    height: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    "&>span": {
      width: "12px",
      height: "5px",
      borderRadius: "2px",
      boxShadow: "0px 0px 2px rgba(0,0,0,0.2)",
      backgroundColor: "#5A73CD",
      margin: "1px",
    },
  },
  "&>div:nth-of-type(3)": {
    // border: "1px solid black",
    width: "calc(100% - 16px)",
    height: "30%",
    padding: "2px 8px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    "&>p": {
      fontSize: "14px",
      color: "#606060",
      fontFamily: "'Montserrat', sans-serif",
      margin: "1px",
      textAlign: "center",
    },
  },
}));
const RightSection = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  width: "60%",
  height: "100%",
  "&>div:nth-of-type(1)": {
    borderBottom: "1px solid #606060",
    width: "calc(100% - 8px)",
    height: "30%",
    padding: "2px 4px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    "&>p": {
      fontSize: "14px",
      color: "#606060",
      fontFamily: "'Montserrat', sans-serif",
      margin: "1px",
    },
    "&>button": {
      padding: "7px 10px",
      backgroundColor: "#5A73CD",
      border: "none",
      outline: "none",
      borderRadius: "3px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      color: "#fff",
    },
  },
  "&>div:nth-of-type(2)": {
    // border: "1px solid black",
    width: "calc(100% - 8px)",
    height: "70%",
    padding: "2px 4px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    "&>div": {
      "&>p": {
        fontSize: "14px",
        color: "#606060",
        fontFamily: "'Montserrat', sans-serif",
        margin: "1px",
      },
    },
  },
}));

const SingleCard = () => {
  return (
    <MainBox>
      <LeftSection>
        <Box>
          <img src={profileimage} alt="profileimage" />
          <IconButton>
            <CloudUploadRoundedIcon />
          </IconButton>
        </Box>
        <Box>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </Box>
        <Box>
          <Typography>
            User Position <br /> <b>Admin</b>
          </Typography>
          <Typography>
            Access <br /> <b>All</b>
          </Typography>
        </Box>
      </LeftSection>
      <RightSection>
        <Box>
          <Typography>
            <b>Abhishek Dulat </b> <br /> Hisar, Haryana
          </Typography>
          <button>
            <EditRoundedIcon style={{ fontSize: "16px", marginRight: "2px" }} />{" "}
            EDIT
          </button>
        </Box>
        <Box>
          <Box>
            <Typography>Email</Typography>
            <Typography>City</Typography>
            <Typography>State</Typography>
            <Typography>Country</Typography>
            <Typography>Phone</Typography>
          </Box>
          <Box>
            <Typography>
              <b>abhishek@gmail.com</b>
            </Typography>
            <Typography>
              <b>Hisar</b>
            </Typography>
            <Typography>
              <b>Haryana</b>
            </Typography>
            <Typography>
              <b>India</b>
            </Typography>
            <Typography>
              <b>+91 9518118356</b>
            </Typography>
          </Box>
        </Box>
      </RightSection>
    </MainBox>
  );
};

export default SingleCard;
