import { Box } from "@mui/material";
import React from "react";
import UpdateSeo from "../../components/Seo/UpdateSeo/UpdateSeo";
import UpSeo from "../../components/Seo/UpSeo";

const USeo = () => {
  return (
    <Box
      style={{
        display: "flex",
        width: "85%",
        marginLeft: "15%",
        marginTop: "19.5vh",
      }}
    >
      <UpSeo />
    </Box>
  );
};

export default USeo;
