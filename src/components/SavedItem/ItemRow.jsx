import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

import { Button, styled, TableRow, TableCell } from "@mui/material";
import { useSelector } from "react-redux";

const TableRowArea = styled(TableRow)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
  flex: 1,
  marginTop: "5px",

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

const ItemRow = ({ Id, data }) => {
  const { UserData } = useSelector((state) => state.Users);
  const user = UserData?.find((item) => item._id === data.userID);

  console.log(user);
  return (
    <TableRowArea>
      <TableCellArea>{Id}</TableCellArea>
      <TableCellArea>
        <p>
          <span>
            {user?.first_name} {user?.last_name}
          </span>
          <br />
          <span>{user?.phone}</span>
        </p>
      </TableCellArea>
      <TableCellArea>{user?.email}</TableCellArea>

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
