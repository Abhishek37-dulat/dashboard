import { Box, Typography, styled } from "@mui/material";
import React from "react";
import WindPowerIcon from "@mui/icons-material/WindPower";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserOrders } from "../../redux/actions/OrdersAction";

const NewOrderBox = styled(Box)(({ theme }) => ({
  borderLeft: "3px solid #1976D2",
  width: "96%",
  margin: "2%",
  marginTop: "2%",
  height: "50px",
  borderRadius: "0px 5px 5px 0px",
  backgroundColor: "#fff",
  boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  ":active": {
    transform: "scale(0.95)",
  },
}));

const IndexNumber = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "80%",
  height: "100%",
  fontFamily: "'Pangolin', cursive",
  overflow: "hidden",
  padding: "0px 2px",
  marginLeft: "2px",
}));

const IndexIcon = styled(Typography)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  width: "20%",
  height: "100%",
  fontFamily: "'Pangolin', cursive",
  color: "#E93E3E",
}));

const SingleOrder = ({ data }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSingleOrderClick = (data) => {
    console.log(data);
    dispatch(getUserOrders(data._id));
    navigate(`/order/${data.user_id}`);
  };
  return (
    <NewOrderBox onClick={() => handleSingleOrderClick(data)}>
      <IndexNumber>{String(data?.order_id)}</IndexNumber>

      <IndexIcon>
        <WindPowerIcon />
      </IndexIcon>
    </NewOrderBox>
  );
};

export default SingleOrder;
