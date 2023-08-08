import { Box } from "@mui/material";
import React from "react";
import UserPersonalPage from "../../components/OrderItem/User/UserPersonalPage";

const UserPage = () => {
  return (
    <Box
      style={{
        display: "flex",
        width: "85%",
        marginLeft: "15%",
        marginTop: "19.5vh",
      }}
    >
      <UserPersonalPage />
    </Box>
  );
};

export default UserPage;
