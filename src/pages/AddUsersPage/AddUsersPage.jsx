import { Box } from "@mui/material";
import React from "react";
import AddUsers from "../../components/AddUsers/AddUsers";

const AddUsersPage = () => {
  return (
    <Box
      style={{
        display: "flex",
        width: "85%",
        marginLeft: "15%",
        marginTop: "19.5vh",
      }}
    >
      <AddUsers />
    </Box>
  );
};

export default AddUsersPage;
