import { Box, Button, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputComponent from "./InputComponent";
import { useDispatch, useSelector } from "react-redux";
import {
  addContacts,
  deleteContacts,
  getAllContacts,
  updateContacts,
} from "../../redux/actions/ContactAction";
const MainBox = styled(Box)(({ theme }) => ({
  // border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  padding: "20px",
}));

const FormBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "80%",
  padding: "20px",
  backgroundColor: "#fff",
  boxShadow: "0px 0px 2px rgba(0,0,0,.2)",
  borderRadius: "5px",
  "&>p": {
    color: "#252F43",
    fontSize: "24px",
    fontFamily: "'Tektur', cursive",
    fontWeight: "500",
  },
}));
const AllCards = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  flexWrap: "wrap",
}));

const ItemBox = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  overflow: "hidden",
  width: "250px",
  minHeight: "200px",
  padding: "20px",
  margin: "10px",
  backgroundColor: "#fff",
  boxShadow: "0px 0px 2px rgba(0,0,0,.2)",
  borderRadius: "5px",
  "&>div": {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    "&>button": {
      border: "none",
      outline: "none",
      padding: "5px 15px",
      cursor: "pointer",
      margin: "2px",
      transition: "0.3s",
      color: "#fff",
    },
    "&>button:nth-of-type(1)": {
      backgroundColor: "#138EDE",
      "&:hover": {
        transform: "scale(1.03)",
      },
    },
    "&>button:nth-of-type(2)": {
      backgroundColor: "#FC004C",
      "&:hover": {
        transform: "scale(1.03)",
      },
    },
  },
}));
const Contact = () => {
  const dispatch = useDispatch();
  const [formCondition, setFormCondition] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const { ContactData } = useSelector((state) => state.Contacts);
  const [updateCondition, setUpdateCondition] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (updateCondition) {
      setFormCondition(true);
      if (email !== "" || phone !== "" || address !== "" || location !== "") {
        let formdata = {
          email: email,
          phone: phone,
          address: address,
          location: location,
        };
        SaveEditContactus(formdata, editData._id);
        setFormCondition(false);
      }
      setUpdateCondition(false);
      setEmail("");
      setPhone("");
      setAddress("");
      setLocation("");
      setEditData(null);
    } else {
      setFormCondition(true);
      if (email !== "" || phone !== "" || address !== "" || location !== "") {
        let formdata = {
          email: email,
          phone: phone,
          address: address,
          location: location,
        };
        window.scrollTo(0, document.body.scrollHeight);
        setFormCondition(false);
        dispatch(addContacts(formdata));
        setEmail("");
        setPhone("");
        setAddress("");
        setLocation("");
      }
    }
  };
  const handleEditContactus = (data) => {
    setUpdateCondition(true);
    console.log(data);
    setEmail(data.email);
    setPhone(data.phone);
    setAddress(data.address);
    setLocation(data.location);
    setEditData(data);
    window.scrollTo(0, 0);
  };
  const SaveEditContactus = (data, id) => {
    dispatch(updateContacts(data, id));
  };
  const handleDeleteContactus = (data) => {
    dispatch(deleteContacts(data));
  };
  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <MainBox>
      <FormBox>
        <Typography>ADD CONTACT US DETAILS</Typography>
        <InputComponent
          title={email}
          setTitle={setEmail}
          titlename="Enter Email Id"
          errorname="Please Enter Valid Email id"
          placeholdername="Enter Email Id"
          errorContition={formCondition}
          importantRequired={true}
          inputType="text"
        />
        <InputComponent
          title={phone}
          setTitle={setPhone}
          titlename="Enter Phone Number"
          errorname="Please Enter Valid Phone Number"
          placeholdername="Enter Phone Number"
          errorContition={formCondition}
          importantRequired={true}
          inputType="text"
        />

        <InputComponent
          title={address}
          setTitle={setAddress}
          titlename="Enter Address"
          errorname="Please Enter Valid Address"
          placeholdername="Enter Address"
          errorContition={formCondition}
          importantRequired={true}
          inputType="text"
        />
        <InputComponent
          title={location}
          setTitle={setLocation}
          titlename="Enter Location"
          errorname="Please Enter Valid Location"
          placeholdername="Enter Location"
          errorContition={formCondition}
          importantRequired={true}
          inputType="text"
        />
        <Button
          style={{ marginTop: "20px" }}
          onClick={(e) => handleSubmitForm(e)}
        >
          {updateCondition ? "UPDATE" : "SAVE"}
        </Button>
      </FormBox>
      <AllCards>
        {ContactData?.map((data) => {
          return (
            <ItemBox>
              <Typography>Email: {data?.email}</Typography>
              <Typography>Phone: {data?.phone}</Typography>
              <Typography>Address: {data?.address}</Typography>
              <Typography>Location: {data?.location}</Typography>
              <Box>
                <button onClick={() => handleEditContactus(data)}>Edit</button>
                <button onClick={() => handleDeleteContactus(data._id)}>
                  Delete
                </button>
              </Box>
            </ItemBox>
          );
        })}
      </AllCards>
    </MainBox>
  );
};

export default Contact;
