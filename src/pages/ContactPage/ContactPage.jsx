import { Box } from "@mui/material";
import React from "react";
import Contact from "../../components/ContactUS/Contact";

const ContactPage = () => {
  return (
    <Box
      style={{
        display: "flex",
        width: "85%",
        marginLeft: "15%",
        marginTop: "19.5vh",
      }}
    >
      <Contact />
    </Box>
  );
};

export default ContactPage;
