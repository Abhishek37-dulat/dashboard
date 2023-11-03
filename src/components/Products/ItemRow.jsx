import React, { useEffect, useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import HiveIcon from "@mui/icons-material/Hive";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  IconButton,
  Typography,
  Button,
  styled,
  TableRow,
  TableCell,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteExistingProduct,
  getSingleProduct,
} from "../../redux/actions/ProductAction";
import { useNavigate } from "react-router-dom";
import { addSeo, getSeo } from "../../redux/actions/SeoAction";

const TableRowArea = styled(TableRow)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
  flex: 1,
  marginTop: "5px",
  cursor: "pointer",
  borderBottom: "3px solid #5A73CD",
  borderRadius: "5px",
  boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
}));
const TableCellArea = styled(TableCell)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  padding: "5px 0px",
  border: "none",
  color: "#252F43",
  "& > div": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    width: "50px",
    "& > div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
    },
  },
}));

const TableButtonSeo = styled(Button)(({ theme }) => ({
  width: "70px",
  height: "35px",
  color: "#fff",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "12px",
  boxShadow: "0px 3px 10px rgba(0,0,0,0.2)",
  margin: "2px",
  ":hover": {
    color: "#fff",
    backgroundColor: "#252F43",
  },
  ":active": {
    transform: "scale(0.98)",
  },
}));

const TableButtonEdit = styled(Button)(({ theme }) => ({
  width: "70px",
  height: "35px",
  color: "#fff",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "12px",
  boxShadow: "0px 3px 10px rgba(0,0,0,0.2)",
  margin: "2px",
  ":hover": {
    color: "#fff",
    backgroundColor: "#00B0F0",
  },
  ":active": {
    transform: "scale(0.98)",
  },
}));
const TableButtonDelete = styled(Button)(({ theme }) => ({
  width: "70px",
  height: "35px",
  color: "#fff",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "12px",
  boxShadow: "0px 3px 10px rgba(0,0,0,0.2)",
  margin: "2px",
  ":hover": {
    color: "#fff",
    backgroundColor: "#E93E3E",
  },
  ":active": {
    transform: "scale(0.98)",
  },
}));

const ItemRow = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [toggleAvailable, setToggleAvailable] = useState(data.product_qty);
  const { SeoData } = useSelector((state) => state.Seos);
  const handleToggle = (e) => {
    e.preventDefault();
    setToggleAvailable(!toggleAvailable);
  };
  const handleDeleteProduct = (e) => {
    e.preventDefault();
    dispatch(deleteExistingProduct(data._id));
  };
  const handleEditProduct = (e) => {
    e.preventDefault();
    dispatch(getSingleProduct(data._id));
    navigate(`/product/${data._id}`);
  };
  const handleSeo = (e) => {
    e.preventDefault();
    dispatch(getSeo(data._id))
      .then((response) => {
        if (response) {
          navigate(`/seo/update/${data._id}`);
        } else {
          navigate(`/seo/${data._id}`);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  const handleViewProduct = (e) => {
    e.preventDefault();
    dispatch(getSingleProduct(data._id));
    navigate(`/product/view/${data._id}`);
  };
  console.log(SeoData);
  return (
    <TableRowArea>
      <TableCellArea onClick={(e) => handleViewProduct(e)}>
        <img
          src={data?.product_image[0]?.url}
          alt="dsfsdf"
          style={{ width: "50px" }}
        />
        &#160;{data.product_title}
      </TableCellArea>
      <TableCellArea>
        <span>
          <CurrencyRupeeIcon sx={{ width: 15, height: 15 }} />
        </span>
        {data.product_price}
      </TableCellArea>
      <TableCellArea>{data.product_discount}%</TableCellArea>
      <TableCellArea>{data.product_qty}</TableCellArea>

      <TableCellArea>
        <Box>
          <Box>
            {toggleAvailable > 0 ? (
              <HiveIcon sx={{ width: 40, height: 40, color: "#2DB484" }} />
            ) : (
              <ProductionQuantityLimitsIcon
                sx={{ width: 40, height: 40, color: "#E7213A" }}
              />
            )}
          </Box>
          <Box>
            <Typography sx={{ fontSize: "10px", color: "#9DA1A7" }}>
              {toggleAvailable > 0 ? "Available" : "Empty"}
            </Typography>
          </Box>
        </Box>
      </TableCellArea>
      <TableCellArea style={{ flexWrap: "wrap", justifyContent: "flex-start" }}>
        <TableButtonEdit
          sx={{ backgroundColor: "#00B0F0" }}
          onClick={(e) => handleEditProduct(e)}
        >
          <span style={{ fontWeight: 600 }}>Edit</span>
          <span>
            <EditIcon sx={{ width: 15, height: 15, marginTop: 0.5 }} />
          </span>
        </TableButtonEdit>
        <TableButtonDelete
          sx={{ backgroundColor: "#E93E3E" }}
          onClick={(e) => handleDeleteProduct(e)}
        >
          <span style={{ fontWeight: 600 }}>Delete</span>
          <span>
            <DeleteIcon sx={{ width: 15, height: 15, marginTop: 0.5 }} />
          </span>
        </TableButtonDelete>

        <TableButtonSeo
          sx={{ backgroundColor: "#252F43" }}
          onClick={(e) => handleSeo(e)}
        >
          <span style={{ fontWeight: 600 }}>SEO</span>
        </TableButtonSeo>
      </TableCellArea>
    </TableRowArea>
  );
};

export default ItemRow;
