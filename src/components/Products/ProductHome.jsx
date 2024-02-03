import { Box, IconButton, Typography, styled } from "@mui/material";
import React from "react";
import DataSaverOnIcon from "@mui/icons-material/DataSaverOn";
import ConfirmationNumberIcon from "@mui/icons-material/ConfirmationNumber";

import { useNavigate } from "react-router-dom";
import ItemMain from "./ItemMain";
// import { useDispatch } from "react-redux";
// import { getAllColors } from "../../redux/actions/ColorsAction";
// import { getAllProduct } from "../../redux/actions/ProductAction";

const ProductHomeContainer = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "97%",
  //   height: "50vh",
  display: "flex",
  flexWrap: "wrap",
  marginLeft: "1.5%",
}));
const ProductHomeContainerall = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "5px",
  marginTop: "10px",
}));
const ProductTopDetails = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "100%",
  height: "15vh",
  display: "flex",
  flexDirection: "row",
}));

const ProductValue = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  "& > p ": {
    marginTop: "10px",
    fontSize: "28px",
    color: "#252F43",
    fontWeight: "600",
    fontFamily: "'Montserrat', sans-serif",
  },
}));
const ProductButton = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "50%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  "& > button": {
    width: "100px",
    height: "100px",
    borderRadius: "5px",
    outline: "none",
    border: "none",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
    backgroundColor: "#5A73CD",
    marginRight: "10px",
    cursor: "pointer",
    ":active": {
      transform: "scale(0.98)",
    },
  },
}));

const ProductHome = () => {
  const navigate = useNavigate();

  return (
    <ProductHomeContainer>
      <ProductHomeContainerall>
        <ProductTopDetails>
          <ProductValue>
            <Typography>
              <IconButton>
                <ConfirmationNumberIcon
                  sx={{ width: 50, height: 50, color: "#2DB484" }}
                />
              </IconButton>{" "}
              85647
              <span style={{ fontSize: "12px" }}>Total Products</span>
            </Typography>
          </ProductValue>
          <ProductButton>
            <button onClick={() => navigate("/product/add")}>
              <DataSaverOnIcon sx={{ width: 50, height: 50, color: "#fff" }} />
            </button>
          </ProductButton>
        </ProductTopDetails>
        <ItemMain />
      </ProductHomeContainerall>
    </ProductHomeContainer>
  );
};

export default ProductHome;
