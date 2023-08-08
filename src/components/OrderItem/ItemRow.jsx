import React, { useState } from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ToggleOffIcon from "@mui/icons-material/ToggleOff";
import ToggleOnIcon from "@mui/icons-material/ToggleOn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import {
  Box,
  IconButton,
  Typography,
  Button,
  styled,
  TableRow,
  TableCell,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const TableRowArea = styled(TableRow)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
  flex: 1,
  marginTop: "5px",
  cursor: "pointer",
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
  marginLeft: "2px",
  ":hover": {
    color: "#fff",
    backgroundColor: "#E93E3E",
  },
  ":active": {
    transform: "scale(0.98)",
  },
}));

const ItemRow = ({ Id }) => {
  const navigate = useNavigate();
  const [toggleAvailable, setToggleAvailable] = useState(true);
  const handleToggle = (e) => {
    e.preventDefault();
    setToggleAvailable(!toggleAvailable);
  };
  return (
    <TableRowArea>
      <TableCellArea>
        <Typography>{Id}</Typography>
      </TableCellArea>
      <TableCellArea>
        <Typography>{Id}</Typography>
      </TableCellArea>
      <TableCellArea>
        <Typography>{Id}</Typography>
      </TableCellArea>
      <TableCellArea>
        <Typography>29-07-2023</Typography>
      </TableCellArea>
      <TableCellArea>
        <Typography>29-07-2023</Typography>
      </TableCellArea>
      <TableCellArea>
        <Typography>50,000</Typography>
      </TableCellArea>

      <TableCellArea>
        <TableButtonDelete
          sx={{ backgroundColor: "#EC7B7C" }}
          onClick={() => navigate("/order/sdfsd")}
        >
          <span style={{ fontWeight: 600 }}>Action</span>&#160;
        </TableButtonDelete>
      </TableCellArea>
    </TableRowArea>
  );
};

export default ItemRow;
