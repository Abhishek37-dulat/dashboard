import { Box, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import ElectricBikeIcon from "@mui/icons-material/ElectricBike";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import FolderDeleteIcon from "@mui/icons-material/FolderDelete";
import { CategoriesData } from "../../constant/db";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSwatchbook } from "@fortawesome/free-solid-svg-icons";
import AddColor from "./AddColor";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewColor,
  getAllColors,
  getSingleColor,
} from "../../redux/actions/ColorsAction";

const CategorieMain = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "97%",
  display: "flex",
  flexWrap: "wrap",
  marginLeft: "1.5%",
  marginTop: "20px",
}));

const CategorieAll = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  justifyContent: "center",
  alignItem: "center",
  padding: "20px",
  borderRadius: "10px",
  backgroundColor: "transparent",
  // boxShadow: "0px 0px 10px rgba(0,0,0,0.5)",
  "& > form": {
    // border: "1px solid #E1E3EC",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    borderRadius: "10px",
    backgroundColor: "transparent",
  },
}));

const CategorieTopTitle = styled(Box)(({ theme }) => ({
  border: "2px solid #E1E3EC",
  width: "100%",
  height: "15vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  backgroundColor: "transparent",
  "& > span": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Tektur', cursive",
    fontSize: "24px",
    fontWeight: "600",
    color: "#252F43",
  },
}));

const CategorieBoxHandleSmall = styled(Box)(({ theme }) => ({
  // border: "1px solid #E1E3EC",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px 0px 0px 10px",
  backgroundColor: "transparent",
  marginTop: "5px",
}));
const HandleInputsSmall = styled(Box)(({ theme }) => ({
  // border: "1px solid #E1E3EC",
  width: "100%",
  height: "10vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  backgroundColor: "#fff",
  padding: "2px",
  boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",

  "& > input": {
    // border: "1px solid #E1E3EC",
    width: "90%",
    height: "10vh",
    paddingLeft: "15px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px 0px 0px 10px",
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    fontFamily: "'Tektur', cursive",
    fontSize: "20px",
    fontWeight: "400",
    color: "#252F43",
  },
}));

const CategorieTopMain = styled(Box)(({ theme }) => ({
  border: "none",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  borderRadius: "10px",
  flexWrap: "wrap",
  marginTop: "10px",
  padding: "2px",
}));

const ColorsItem = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllColors());
  }, [dispatch]);
  return (
    <CategorieMain>
      <CategorieAll>
        <CategorieTopTitle>
          <span>
            <FontAwesomeIcon
              style={{ width: 50, height: 50 }}
              icon={faSwatchbook}
            />
          </span>
          <span>ADD COLORS</span>
        </CategorieTopTitle>

        <CategorieTopMain>
          <AddColor />
        </CategorieTopMain>
      </CategorieAll>
    </CategorieMain>
  );
};

export default ColorsItem;
