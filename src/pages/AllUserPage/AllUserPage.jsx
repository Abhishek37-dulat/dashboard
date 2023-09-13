import { Box } from "@mui/material";
import React from "react";
import AllUsers from "../../components/AllUsers/AllUsers";

const AllUserPage = () => {
  return (
    <Box
      style={{
        display: "flex",
        width: "85%",
        marginLeft: "15%",
        marginTop: "19.5vh",
      }}
    >
      <AllUsers />
    </Box>
  );
};

export default AllUserPage;
