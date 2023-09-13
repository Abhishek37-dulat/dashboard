import { Box } from "@mui/material";
import React from "react";
import AllBanner from "../../components/AllBanner/AllBanner";

const AllBannerPage = () => {
  return (
    <Box
      style={{
        display: "flex",
        width: "85%",
        marginLeft: "15%",
        marginTop: "19.5vh",
      }}
    >
      <AllBanner />
    </Box>
  );
};

export default AllBannerPage;
