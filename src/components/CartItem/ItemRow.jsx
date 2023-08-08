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

const TableRowArea = styled(TableRow)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
  flex: 1,
  marginTop: "5px",
  // cursor: "pointer",
  // borderBottom: "3px solid #2DB484",
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
  const [toggleAvailable, setToggleAvailable] = useState(true);
  const handleToggle = (e) => {
    e.preventDefault();
    setToggleAvailable(!toggleAvailable);
  };
  return (
    <TableRowArea>
      <TableCellArea>{Id}</TableCellArea>
      <TableCellArea>
        <p>
          <span>Hair Grow</span>
          <br />
          <span>9992908567</span>
        </p>
      </TableCellArea>
      <TableCellArea>abcdef@gmail.com</TableCellArea>
      <TableCellArea>8</TableCellArea>

      <TableCellArea>
        <TableButtonDelete sx={{ backgroundColor: "#EC7B7C" }}>
          <span style={{ fontWeight: 600 }}>Notify</span>&#160;
          <span>
            <FontAwesomeIcon icon={faBell} />
            {/* <DeleteIcon sx={{ width: 15, height: 15, marginTop: 0.5 }} /> */}
          </span>
        </TableButtonDelete>
      </TableCellArea>
    </TableRowArea>
  );
};

export default ItemRow;
