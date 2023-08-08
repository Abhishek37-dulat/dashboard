import React, { useEffect, useState } from "react";
import { Box, IconButton, Typography, styled } from "@mui/material";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ImportExportIcon from "@mui/icons-material/ImportExport";

import CategoryIcon from "@mui/icons-material/Category";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import PendingActionsIcon from "@mui/icons-material/PendingActions";

import ItemRow from "./ItemRow";

const ProductSearch = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "100%",
  height: "15vh",
  display: "flex",
  flexDirection: "row",
}));

const ProductSearchBar = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "70%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  "& > form": {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    "& > input": {
      width: "85%",
      height: "55%",
      padding: "10px",
      paddingLeft: "15px",
      borderRadius: "10px 0px 0px 10px",
      border: "none",
      outline: "none",
      boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
      fontWeight: "400",
      fontFamily: "'Montserrat', sans-serif",
    },
    "& > button": {
      width: "8%",
      height: "75%",
      borderRadius: "0px 10px 10px 0px",
      border: "none",
      outline: "none",
      boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
      cursor: "pointer",
    },
  },
}));

const ProductFilters = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "flex-start",
  alignItems: "center",
  "& > button": {
    // width: "100px",
    // height: "60px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "1px",
    border: "none",
    outline: "none",
    boxShadow: "0px 0px 2px rgba(0,0,0,0.5)",
    cursor: "pointer",
    padding: "15px",
    marginLeft: "20px",
    backgroundColor: "#5A73CD",
    color: "#fff",
    ":active": {
      transform: "scale(0.98)",
    },
    "& > p": {
      fontWeight: "600",
      fontSize: "16px",
      fontFamily: "'Montserrat', sans-serif",
      marginLeft: "2px",
      marginRight: "2px",
    },
  },
  "& > div": {
    // border: "1px solid black",
    position: "retalive",
    marginTop: "160px",
    marginLeft: "-130px",
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
    zIndex: "2",

    "& > div": {
      // border: "1px solid black",
      position: "retalive",
      width: "100%",
      height: "50%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      "& > div": {
        padding: "10px",
        "& > p": {
          color: "#5A73CD",
        },
        "& > input": {
          padding: "5px",
          borderRadius: "3px",
          border: "none",
          outline: "none",
          backgroundColor: "#5A73CD",
          color: "#fff",
          cursor: "pointer",
          "& > span": {
            color: "#5A73CD",
          },
        },
      },
    },
  },
}));
const ProductList = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

const ProductListTitle = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "100%",
  height: "5vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  "& > p": {
    fontWeight: "700",
    fontSize: "20px",
    fontFamily: "'Dosis', sans-serif",
    color: "#5A73CD",
  },
}));

const ProductTable = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  "& > table": {
    // border: "1px solid black",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    flex: 1,
    "& > thead": {
      //   border: "1px solid black",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      backgroundColor: "#5A73CD",
      borderRadius: "5px",
      flex: 1,

      "& > tr": {
        // border: "1px solid black",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // padding: "2px",
        backgroundColor: "#5A73CD",
        borderRadius: "5px",
        flex: 1,
        "& > th": {
          //   borderLeft: "1px solid #fff",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          padding: "15px 0px",
          backgroundColor: "#5A73CD",
          color: "#fff",
          // fontFamily:'',
          fontSize: "20px",
          borderRadius: "5px",
        },
      },
    },
    "& > tbody": {
      //   border: "1px solid black",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "5px",
      flex: 1,
    },
  },
}));

const ItemMain = () => {
  const [dateToggle, setDateToggle] = useState(false);
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [dateData, setDateData] = useState({ from: "", to: "" });
  const handleDate = () => {
    setDateToggle(!dateToggle);
  };
  useEffect(() => {
    setDateData({ from: fromDate, to: toDate });
    if (dateData.from !== "" && dateData.to !== "") {
      setDateToggle(false);
    }
  }, [toDate, setToDate]);
  console.log(dateData);
  return (
    <>
      <ProductSearch>
        <ProductFilters>
          <Typography
            style={{
              fontSize: "16px",
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Sort by:
          </Typography>
          <button>
            <Typography>Recent Orders</Typography>
          </button>
          <button>
            <Typography>Today Orders</Typography>
          </button>
          <button>
            <Typography>Tommorrow Orders</Typography>
          </button>
          <button onClick={(e) => handleDate(e)}>
            <Typography>
              <CalendarMonthIcon />
            </Typography>
            <Typography>Date</Typography>
            <Typography>
              <ImportExportIcon />
            </Typography>
          </button>

          <Box
            style={{
              display: dateToggle ? "flex" : "none",
            }}
          >
            <Box>
              <Box>
                <Typography sx={{ marginLeft: "20px" }}>From</Typography>
              </Box>
              <Box>
                <Typography sx={{ marginRight: "40px" }}>To</Typography>
              </Box>
            </Box>
            <Box>
              <Box>
                <input
                  type="date"
                  value={fromDate}
                  onChange={(e) => setFromDate(e.target.value)}
                />
              </Box>
              <Box>
                <input
                  type="date"
                  value={toDate}
                  onChange={(e) => setToDate(e.target.value)}
                />
              </Box>
            </Box>
          </Box>
          {fromDate && toDate ? (
            <Typography>
              From: {fromDate} To: {toDate}
            </Typography>
          ) : null}
        </ProductFilters>
      </ProductSearch>
      <ProductList>
        <ProductListTitle>
          <Typography>All Products</Typography>
        </ProductListTitle>
        <ProductTable>
          <table>
            <thead>
              <tr>
                <th>
                  <Typography>Order No.</Typography>
                </th>
                <th>
                  <Typography>User Id</Typography>
                </th>
                <th>
                  <Typography>Order Id</Typography>
                </th>
                <th>
                  <Typography>Order Date</Typography>
                </th>
                <th>
                  <Typography>Order Time</Typography>
                </th>
                <th>
                  <Typography>Total</Typography>
                </th>
                <th>
                  <span style={{ marginRight: "5px" }}>
                    <PendingActionsIcon />
                  </span>
                  <Typography>Actions</Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              <ItemRow Id={"#41231"} />
              <ItemRow Id={"#41231"} />
              <ItemRow Id={"#41231"} />
              <ItemRow Id={"#41231"} />
              <ItemRow Id={"#41231"} />
              <ItemRow Id={"#41231"} />
              <ItemRow Id={"#41231"} />
              <ItemRow Id={"#41231"} />
              <ItemRow Id={"#41231"} />
              <ItemRow Id={"#41231"} />
              <ItemRow Id={"#41231"} />
              <ItemRow Id={"#41231"} />
            </tbody>
          </table>
        </ProductTable>
      </ProductList>
    </>
  );
};

export default ItemMain;
