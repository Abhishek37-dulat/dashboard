import { Box, IconButton, Typography, styled } from "@mui/material";
import React from "react";
import WindPowerIcon from "@mui/icons-material/WindPower";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import FireTruckIcon from "@mui/icons-material/FireTruck";

const MiddleSectionBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
}));
const MiddleSectionTopall = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  padding: "5px",
  marginTop: "10px",
}));

const MiddleSectionTop1 = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "33%",
  height: "150px",
  margin: "1%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  borderRadius: "5px",
  backgroundColor: "#fff",
  boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
}));

const MiddleSectionTop2 = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "33%",
  height: "150px",
  margin: "1%",
}));
const MiddleSectionTop3 = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "33%",
  height: "150px",
  margin: "1%",
}));

const BoxTop = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "100%",
  height: "60%",
  display: "flex",
}));

const BoxIcon = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "40%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const Boxdetails = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "60%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  "& > p": {
    fontFamily: "'Montserrat', sans-serif",
  },
}));

const BoxBottom = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "100%",
  height: "40%",
  display: "flex",
}));
const BoxButton = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "60%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "& > button": {
    width: "90%",
    height: "70%",
    borderRadius: "4px",
    border: "none",
    outline: "none",
    color: "#fff",
    cursor: "pointer",
    ":active": {
      transform: "scale(0.98)",
    },
  },
}));
const BoxBottomIcon = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "40%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const MiddleSection = () => {
  return (
    <MiddleSectionBox>
      <MiddleSectionTopall>
        <MiddleSectionTop1>
          <BoxTop>
            <BoxIcon>
              <IconButton>
                <WindPowerIcon
                  sx={{ width: 42, height: 42, color: "#1976D2" }}
                />
              </IconButton>
            </BoxIcon>
            <Boxdetails>
              <Typography sx={{ color: "#252F43" }}>Total Orders</Typography>
              <Typography
                sx={{ fontSize: "36px", color: "#1976D2", fontWeight: "500" }}
              >
                #5000
              </Typography>
            </Boxdetails>
          </BoxTop>
          <BoxBottom>
            <BoxButton>
              <button style={{ backgroundColor: "#1976D2" }}>
                View All Orders
              </button>
            </BoxButton>
            <BoxBottomIcon>
              <Typography>
                <KeyboardArrowDownIcon
                  sx={{
                    width: 36,
                    height: 36,
                    color: "#fff",
                    backgroundColor: "#252F43",
                    padding: "5px",
                    boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
                    borderRadius: "50%",
                    cursor: "pointer",
                    ":active": {
                      transform: "scale(0.98)",
                    },
                  }}
                />
              </Typography>
            </BoxBottomIcon>
          </BoxBottom>
        </MiddleSectionTop1>
        <MiddleSectionTop1>
          <BoxTop>
            <BoxIcon>
              <IconButton>
                <DonutSmallIcon
                  sx={{ width: 42, height: 42, color: "#2DB484" }}
                />
              </IconButton>
            </BoxIcon>
            <Boxdetails>
              <Typography sx={{ color: "#252F43" }}>Total Users</Typography>
              <Typography
                sx={{ fontSize: "36px", color: "#2DB484", fontWeight: "500" }}
              >
                #4875
              </Typography>
            </Boxdetails>
          </BoxTop>
          <BoxBottom>
            <BoxButton>
              <button style={{ backgroundColor: "#2DB484" }}>
                View All Users
              </button>
            </BoxButton>
            <BoxBottomIcon>
              <Typography>
                <KeyboardArrowDownIcon
                  sx={{
                    width: 36,
                    height: 36,
                    color: "#fff",
                    backgroundColor: "#252F43",
                    padding: "5px",
                    boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
                    borderRadius: "50%",
                    cursor: "pointer",
                    ":active": {
                      transform: "scale(0.98)",
                    },
                  }}
                />
              </Typography>
            </BoxBottomIcon>
          </BoxBottom>
        </MiddleSectionTop1>
        <MiddleSectionTop1>
          <BoxTop>
            <BoxIcon>
              <IconButton>
                <FireTruckIcon
                  sx={{ width: 42, height: 42, color: "#E93E3E" }}
                />
              </IconButton>
            </BoxIcon>
            <Boxdetails>
              <Typography sx={{ color: "#252F43" }}>Canceled Orders</Typography>
              <Typography
                sx={{ fontSize: "36px", color: "#E93E3E", fontWeight: "500" }}
              >
                #256
              </Typography>
            </Boxdetails>
          </BoxTop>
          <BoxBottom>
            <BoxButton>
              <button style={{ backgroundColor: "#E93E3E" }}>
                View All Canceled
              </button>
            </BoxButton>
            <BoxBottomIcon>
              <Typography>
                <KeyboardArrowDownIcon
                  sx={{
                    width: 36,
                    height: 36,
                    color: "#fff",
                    backgroundColor: "#252F43",
                    padding: "5px",
                    boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
                    borderRadius: "50%",
                    cursor: "pointer",
                    ":active": {
                      transform: "scale(0.98)",
                    },
                  }}
                />
              </Typography>
            </BoxBottomIcon>
          </BoxBottom>
        </MiddleSectionTop1>
      </MiddleSectionTopall>
    </MiddleSectionBox>
  );
};

export default MiddleSection;
