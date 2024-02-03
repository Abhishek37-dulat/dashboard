import React, { useEffect } from "react";
import {
  Box,
  Typography,
  styled,
  Dialog,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import ImportExportIcon from "@mui/icons-material/ImportExport";

import CategoryIcon from "@mui/icons-material/Category";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CircularProgress from "@mui/material/CircularProgress";
import ItemRow from "./ItemRow";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../redux/actions/ProductAction";

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
  width: "30%",
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
    borderRadius: "10px",
    border: "none",
    outline: "none",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.5)",
    cursor: "pointer",
    padding: "15px",
    marginLeft: "20px",
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
      backgroundColor: "#252F43",
      borderRadius: "5px",
      flex: 1,

      "& > tr": {
        // border: "1px solid black",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        // padding: "2px",
        backgroundColor: "#252F43",
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
          backgroundColor: "#252F43",
          color: "#fff",
          fontFamily: "'Tektur', cursive",
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
  const dispatch = useDispatch();
  const { ProductData, loading } = useSelector((state) => state.Products);
  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  return (
    <>
      <ProductSearch>
        <ProductSearchBar>
          <form>
            <input type="text" placeholder="Search product by name..." />
            <button>
              <ContentPasteSearchIcon />
            </button>
          </form>
        </ProductSearchBar>
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
            <Typography>
              <CalendarMonthIcon />
            </Typography>
            <Typography>Date</Typography>
            <Typography>
              <ImportExportIcon />
            </Typography>
          </button>
          <button>
            <Typography>
              <CurrencyRupeeIcon />
            </Typography>
            <Typography>Price</Typography>
            <Typography>
              <ImportExportIcon />
            </Typography>
          </button>
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
                <th>Product Name</th>
                <th>
                  <span style={{ marginRight: "5px" }}>
                    <CurrencyRupeeIcon />
                  </span>
                  Price
                </th>
                <th>
                  Discount
                  <span style={{ marginRight: "5px" }}>%</span>
                </th>
                <th>
                  <span style={{ marginRight: "5px" }}>
                    <CategoryIcon />
                  </span>
                  Quantity
                </th>
                <th>
                  <span style={{ marginRight: "5px" }}>
                    <BeachAccessIcon />
                  </span>
                  Stock
                </th>
                <th>
                  <span style={{ marginRight: "5px" }}>
                    <PendingActionsIcon />
                  </span>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {ProductData?.length > 0 ? (
                ProductData?.map((data) => <ItemRow data={data} />)
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CircularProgress />
                  <Typography style={{ color: "#BAC0C7" }}>
                    Loading...
                  </Typography>
                </Box>
              )}
            </tbody>
          </table>
        </ProductTable>
      </ProductList>
      <Dialog
        open={loading}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please wait...
            <CircularProgress
              style={{ width: "20px", height: "20px" }}
              color="inherit"
            />
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ItemMain;
