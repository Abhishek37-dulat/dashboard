import { Box } from "@mui/material";
import React from "react";
import AddSeo from "./AddSeo/AddSeo";

const SeoCom = () => {
  return (
    <Box
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItem: "center",
      }}
    >
      <AddSeo />
    </Box>
  );
};

export default SeoCom;
