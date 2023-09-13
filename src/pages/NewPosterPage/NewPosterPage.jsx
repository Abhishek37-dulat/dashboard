import { Box } from "@mui/material";
import React from "react";
import NewPoster from "../../components/NewPoster/NewPoster";

const NewPosterPage = () => {
  return (
    <Box
      style={{
        display: "flex",
        width: "85%",
        marginLeft: "15%",
        marginTop: "19.5vh",
      }}
    >
      <NewPoster />
    </Box>
  );
};

export default NewPosterPage;
