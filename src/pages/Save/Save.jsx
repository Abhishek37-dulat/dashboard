import { Box } from "@mui/material";
import React from "react";
import SavedItem from "../../components/SavedItem/SavedItem";

const Save = () => {
  return (
    <Box
      style={{
        display: "flex",
        width: "85%",
        marginLeft: "15%",
        marginTop: "19.5vh",
      }}
    >
      <SavedItem />
    </Box>
  );
};

export default Save;
