import React, { useEffect, useRef, useState } from "react";
import { Box, styled } from "@mui/material";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import File1 from "./File1";
import File2 from "./File2";
import File3 from "./File3";

const RegisterBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  backgroundColor: "#252F43",
  margin: "0%",
  padding: "0%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
}));
const Registers = () => {
  const navigate = useNavigate();
  const elementRef = useRef();
  const elementRef2 = useRef();
  const elementRef3 = useRef();
  const [userDetails, setUserDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
    company_name: "",
    zip_code: "",
    company_location: "",
    company_logo: "",
    company_registration_number: "",
    company_type: "",
    company_since: "",
    total_outlets: "",
    headquater_location: "",
    country: "",
    state: "",
    city: "",
    number_of_employee: "",
  });
  const [showFile, setShowFile] = useState(0);

  const handleOnChange = (e) => {
    e.preventDefault();
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const animateWidth = () => {
      gsap.to(elementRef.current, {
        width: "60%",
        duration: 1,
        ease: "power3.inOut",
      });
    };
    animateWidth();
  }, [showFile]);
  useEffect(() => {
    const animateWidth = () => {
      gsap.to(elementRef2.current, {
        width: "60%",
        duration: 1,
        ease: "power3.inOut",
      });
    };
    animateWidth();
  }, [showFile]);
  useEffect(() => {
    const animateWidth = () => {
      gsap.to(elementRef3.current, {
        width: "60%",
        duration: 1,
        ease: "power3.inOut",
      });
    };
    animateWidth();
  }, [showFile]);
  console.log(showFile);
  return (
    <RegisterBox>
      {showFile === 0 ? (
        <File1
          handleOnChange={handleOnChange}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          navigate={navigate}
          elementRef={elementRef}
          setShowFile={setShowFile}
          showFile={showFile}
        />
      ) : showFile === 1 ? (
        <File2
          handleOnChange={handleOnChange}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          navigate={navigate}
          elementRef2={elementRef2}
          setShowFile={setShowFile}
          showFile={showFile}
        />
      ) : showFile === 2 ? (
        <File3
          handleOnChange={handleOnChange}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
          navigate={navigate}
          elementRef3={elementRef3}
          setShowFile={setShowFile}
          showFile={showFile}
        />
      ) : null}
    </RegisterBox>
  );
};

export default Registers;
