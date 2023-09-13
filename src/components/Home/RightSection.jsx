import { Box, Typography, styled } from "@mui/material";
import React, { useEffect } from "react";
import SingleOrder from "./SingleOrder";
import { useDispatch, useSelector } from "react-redux";
import { getTodayOrder, getUserOrders } from "../../redux/actions/OrdersAction";

const RightSectionBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "25%",
  height: "80.5vh",
  position: "fixed",
  right: "0%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#fff",
}));

const RightTop = styled(Box)(({ theme }) => ({
  borderBottom: "2px solid #E1E3EC",
  borderTop: "2px solid #E1E3EC",
  width: "100%",
  height: "100px",
  position: "absolute",
  display: "flex",
  backgroundColor: "#fff",
}));

const RightAll = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "96%",
  marginTop: "100px",
  display: "flex",
  flexWrap: "wrap",
  overflow: "hidden",
  overflowY: "scroll",
  paddingTop: "10px",
  paddingLeft: "2%",
  paddingRight: "2%",
  "::-webkit-scrollbar": {
    width: "4px",
    border: "none",
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: "#252F43",
    borderRadius: "10px",
  },
}));

const TopLeft = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "30%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  "& > div": {
    display: "flex",
    "& > span": {
      //   border: "1px solid black",
      width: "10px",
      height: "10px",
      margin: "1px",
      borderRadius: "3px",
      boxShadow:
        "0px 2px 10px rgba(255,255,255,0.5), 0px 2px 10px rgba(0,0,0,0.5)",
    },
  },
}));

const TopRight = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "70%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  "& > p": {
    fontFamily: "'Tektur', cursive",
    fontSize: "20px",
    color: "#252F43",
  },
  "&  > span": {
    width: "10px",
    height: "10px",
    marginTop: "-7px",
    borderRadius: "3px",
  },
}));

const RightSection = () => {
  const dispatch = useDispatch();
  const { TodayOrder } = useSelector((state) => state.Orders);

  useEffect(() => {
    dispatch(getTodayOrder());
  }, [dispatch]);
  console.log(TodayOrder);
  return (
    <RightSectionBox>
      <RightTop>
        <TopLeft>
          <div>
            <span style={{ backgroundColor: "#DF1559" }}></span>
            <span style={{ backgroundColor: "#EEAC00" }}></span>
          </div>
          <div>
            <span style={{ backgroundColor: "#059B64" }}></span>
            <span style={{ backgroundColor: "#0B61E8" }}></span>
          </div>
        </TopLeft>
        <TopRight>
          <Typography>
            <b>#</b>
            Current Orders
          </Typography>
          &nbsp;
          <span style={{ backgroundColor: "#252F43" }}></span>
        </TopRight>
      </RightTop>
      <RightAll>
        {TodayOrder?.length > 0
          ? TodayOrder?.map((data) => {
              return <SingleOrder key={data._id} data={data} />;
            })
          : null}
      </RightAll>
    </RightSectionBox>
  );
};

export default RightSection;
