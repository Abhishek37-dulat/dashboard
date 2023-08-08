import React, { useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { ListItems } from "../../../constant/db";

const CommetPageTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "98%",
  padding: "20px",
  margin: "2%",
  backgroundColor: "#fff",
  marginBottom: "20vh",
}));

const Ticket1 = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "#252F43",
}));
const Ticket2 = styled(Box)(({ theme }) => ({
  borderBottom: "1px solid #D9E0E6",
  width: "100%",
  height: "50px",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  marginTop: "15px",
  paddingLeft: "20px",
  "& > div": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
    "& > div": {
      position: "absolute",
      top: "-18px",
      left: "0px",
      // border: "1px solid #000",
      boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",

      width: "200px",
      height: "30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
      cursor: "pointer",
      "& > p": { color: "#252F43", marginRight: "8px", padding: "5px" },
      "& > ul": {
        // border: "1px solid #000",
        listStyleType: "none",
        backgroundColor: "#fff",
        position: "absolute",
        width: "200px",
        top: "0px",

        "& > li": {
          // border: "1px solid #000",
          width: "95%",
          height: "30px",
          padding: "5px 10px",
          backgroundColor: "#fff",
          boxShadow: "0px 0px 2px rgba(0,0,0,0.2)",
          ":hover": {
            backgroundColor: "#252F43",
            color: "#fff",
          },
        },
      },
    },
  },
  "& > p": {
    flex: 1,
    padding: "2px",
    color: "#252F43",
  },
}));

const Ticket3 = styled(Box)(({ theme }) => ({
  borderBottom: "1px solid #D9E0E6",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  marginTop: "15px",
  paddingLeft: "20px",
  "& > div": {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "5px",
    "& > div": {
      width: "25%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",

      "& > p": {
        color: "#252F43",
        fontWeight: "500",
      },
      "& > input": {
        padding: "10px 20px",
        border: "none",
        outline: "none",
        boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
      },
    },
  },
}));

const Ticket4 = styled(Box)(({ theme }) => ({
  borderBottom: "1px solid #D9E0E6",
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  marginTop: "15px",
  paddingLeft: "20px",
  "& > div": {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    "& > button": {
      padding: "8px 25px",
      cursor: "pointer",
      color: "#fff",
      border: "none",
      outline: "none",
      backgroundColor: "#252F43",
      boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
      marginRight: "105px",
      marginBottom: "5px",
      ":active": {
        transform: "scale(0.98)",
      },
    },
  },
}));

const DeliveryStatus = () => {
  const [listDisplay, setListDisplay] = useState(false);
  const [listValue, setListValue] = useState();

  const handleListKeyValue = (key) => {
    setListValue(ListItems[key]);
    setListDisplay(false);
  };

  return (
    <CommetPageTitle>
      <Ticket1>
        <Typography>UPDATE DELIVERY STATUS</Typography>
      </Ticket1>
      <Ticket2>
        <Box>
          <Box
            style={{ padding: "5px" }}
            onClick={() => setListDisplay(!listDisplay)}
          >
            <Typography>{listValue ? listValue : "Change Status"}</Typography>
            <Typography style={{ position: "absolute", right: "4px" }}>
              <FontAwesomeIcon icon={faCaretDown} />
            </Typography>
          </Box>
          <Box
            style={{
              marginTop: "40px",
              display: listDisplay ? "flex" : "none",
            }}
          >
            <ul>
              {ListItems.map((ListData, index) => (
                <li key={index} onClick={() => handleListKeyValue(index)}>
                  <Typography>{ListData}</Typography>
                </li>
              ))}
            </ul>
          </Box>
        </Box>
      </Ticket2>
      <Ticket3>
        <Box>
          <Box>
            <Typography>Length</Typography>
            <input type="number" placeholder="Enter Length" />
          </Box>
          <Box>
            <Typography>Breadth</Typography>
            <input type="number" placeholder="Enter breadth" />
          </Box>
          <Box>
            <Typography>Height</Typography>
            <input type="number" placeholder="Enter height" />
          </Box>
          <Box>
            <Typography>Weight</Typography>
            <input type="number" placeholder="Enter Weight" />
          </Box>
        </Box>
      </Ticket3>
      <Ticket4>
        <Box>
          <button>Submit</button>
        </Box>
      </Ticket4>
    </CommetPageTitle>
  );
};

export default DeliveryStatus;
