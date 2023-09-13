import { Box, Button, Typography, styled } from "@mui/material";
import React, { useRef, useState } from "react";
import logoImg from "../../assets/image/mylogo.4b54036c814d0669a746.png";

const LogoMainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  padding: "2%",
  "& > div": {
    marginTop: "20px",
    "& > button": {
      backgroundColor: "#fff",
      boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
    },
  },
}));

export const Logo = () => {
  const logoRef = useRef();
  const [logoImage, setLogoImage] = useState(null); // Store the uploaded image
  const [toggleChangeLogo, setToggleChangeLogo] = useState(false);
  const [toggleSave, setToggleSave] = useState(true);

  const handleLogo = (e) => {
    if (logoRef.current) {
      logoRef.current.click();
    }
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setLogoImage(imageUrl);
      setToggleChangeLogo(true);
    }
  };

  const handleSaveToggle = (e) => {
    setToggleChangeLogo(!toggleChangeLogo);
  };

  return (
    <LogoMainBox>
      <Box>
        <Typography>ADD YOUR LOGO</Typography>
      </Box>
      <Box>
        <input
          type="file"
          ref={logoRef}
          style={{ display: "none" }}
          onChange={handleImageUpload}
        />
        <Button onClick={(e) => handleLogo(e)}>
          {!toggleChangeLogo ? "ADD NEW LOGO" : "CHANGE LOGO"}
        </Button>
      </Box>
      <Box>
        <Box>
          {toggleChangeLogo ? (
            <>
              <Box
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              >
                <img
                  src={logoImage}
                  alt="logoImg"
                  style={{
                    maxWidth: "200px",
                    backgroundColor: "#EEEFF1",
                    border: "5px solid #fff",
                    boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
                    padding: "10px",
                    borderRadius: "7px",
                  }}
                />

                <Button
                  style={{
                    backgroundColor: "#2DB484",
                    color: "#fff",
                    marginTop: "10px",
                  }}
                  onClick={() => handleSaveToggle()}
                >
                  Save Changes
                </Button>
              </Box>
            </>
          ) : null}
        </Box>
      </Box>
      <Box></Box>
    </LogoMainBox>
  );
};
