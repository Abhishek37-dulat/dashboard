import { Box, Button, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputComponent from "./InputComponent";
import { useDispatch, useSelector } from "react-redux";
import { addContacts, getAllContacts } from "../../redux/actions/ContactAction";
const MainBox = styled(Box)(({ theme }) => ({
  border: "1px solid black",
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
  width: "300px",
  padding: "20px",
  margin: "10px",
  backgroundColor: "#fff",
  boxShadow: "0px 0px 2px rgba(0,0,0,.2)",
  borderRadius: "5px",
}));
const Contact = () => {
  const dispatch = useDispatch();
  const [formCondition, setFormCondition] = useState(false);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const { ContactData } = useSelector((state) => state.Contacts);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    setFormCondition(true);
    if (email !== "" || phone !== "" || address !== "" || location !== "") {
      let formdata = {
        email: email,
        phone: phone,
        address: address,
        location: location,
      };
      dispatch(addContacts(formdata));
    }
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
          SAVE
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
            </ItemBox>
          );
        })}
      </AllCards>
    </MainBox>
  );
};

export default Contact;
