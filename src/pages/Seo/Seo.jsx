import { Box } from "@mui/material";
import React from "react";
import SeoCom from "../../components/Seo/SeoCom";

const Seo = () => {
  return (
    <Box
      style={{
        display: "flex",
        width: "85%",
        marginLeft: "15%",
        marginTop: "19.5vh",
      }}
    >
      <SeoCom />
    </Box>
  );
};

export default Seo;
