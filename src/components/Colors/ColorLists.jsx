import { Box, IconButton, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import ntc from "ntc-hi-js";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteExistingColor,
  getAllColors,
} from "../../redux/actions/ColorsAction";
import CloseIcon from "@mui/icons-material/Close";

const ColorBoxOne = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "50px",
  height: "50px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  cursor: "pointer",
  color: "#FEF0F0",
}));
const DeleteBoxButton = styled(IconButton)(({ theme }) => ({
  ":hover": {
    color: "red",
  },
}));

const ColorLists = ({ name, colorId }) => {
  const n_match = ntc.name(name, "en");
  const dispatch = useDispatch();

  const handleEditColor = (e, ename, ecolorId) => {
    dispatch(deleteExistingColor(ecolorId));
  };
  return (
    <Box style={{ position: "relative" }}>
      <ColorBoxOne
        sx={{
          backgroundColor: `${name}`,
          boxShadow: `5px 5px 1px ${name}`,
        }}
      >
        <Typography
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-start",
          }}
        >
          <DeleteBoxButton onClick={(e) => handleEditColor(e, name, colorId)}>
            <CloseIcon />
          </DeleteBoxButton>
        </Typography>
      </ColorBoxOne>

      <Typography style={{ marginTop: "5px" }}>{n_match.color.name}</Typography>
    </Box>
  );
};

export default ColorLists;
