import {
  AlertTitle,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Typography,
  styled,
  useMediaQuery,
  useTheme,
  Alert,
  Snackbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen } from "@fortawesome/free-solid-svg-icons";
import SingleCat from "./SingleCat";

const CategorieMainCat = styled(Box)(({ theme }) => ({
  border: "none",
  width: "90%",
  height: "10vh",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  borderRadius: "10px",
  backgroundColor: "#fff",
  boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
  cursor: "pointer",
  padding: "0px 20px",
  ":hover": {
    backgroundColor: "#252F43",
    color: "#fff",
  },
  "& > p": {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "'Tektur', cursive",
  },
}));

const PreExistData = ({ data }) => {
  const [open, setOpen] = useState(false);
  console.log("Predata: ", data);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      {" "}
      <CategorieMainCat onClick={handleClickOpen}>
        <Typography>{data.name}</Typography>
        <Typography>
          <FontAwesomeIcon icon={faFilePen} />
        </Typography>
      </CategorieMainCat>
      <SingleCat setOpen={setOpen} open={open} data={data} />
    </>
  );
};

export default PreExistData;
