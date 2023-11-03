import React, { useEffect, useState } from "react";
import { Box, Typography, styled, Button } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { ListItems } from "../../../constant/db";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import "./DeliveryStatus.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import { ConditionDelete } from "../ConditionDelete";

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
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      "& > div": {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        width: "50%",
        marginLeft: "10%",
      },
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

const DeliveryStatus = ({ orderDetails }) => {
  const [listDisplay, setListDisplay] = useState(false);
  const [listValue, setListValue] = useState();
  const [approveStatus, setApproveStatus] = useState("");
  const [open, setOpen] = React.useState(false);
  const [deleteObjectData, setDeleteObjectData] = useState();
  const [requestStatus, setRequestStatus] = useState("");

  const handleListKeyValue = (key) => {
    setListValue(ListItems[key]);
    setListDisplay(false);
  };

  const handleClickOpen = (data, statement) => {
    setDeleteObjectData(data);
    setRequestStatus(statement);
    setOpen(true);
  };
  const handleCancelRequest = () => {
    setApproveStatus(false);
  };
  useEffect(() => {
    orderDetails?.order_status === "PENDING"
      ? setApproveStatus("Request")
      : setApproveStatus("");
  }, [setApproveStatus, orderDetails]);
  console.log(orderDetails);

  return (
    <CommetPageTitle>
      <Ticket1>
        <Typography>UPDATE DELIVERY STATUS</Typography>
      </Ticket1>
      <Ticket2>
        <Box>
          <Typography>Order Details</Typography>
          <Box>
            <Box>
              <Typography
                style={{
                  padding: "2px 20px",
                  backgroundColor: "rgba(25,118,210,0.5)",
                  color: "#fff",
                  borderRadius: "7px",
                }}
              >
                New
              </Typography>
            </Box>
            <Box style={{ justifyContent: "flex-end", marginRight: "10%" }}>
              <Button>CANCEL ORDER</Button>
            </Box>
          </Box>
        </Box>
      </Ticket2>
      {orderDetails?.order_status === "CANCELED" ||
      orderDetails?.order_status === "PENDING" ? (
        <Ticket2>
          <Box>
            <Typography>Payment Refund</Typography>
            {approveStatus === "Request" ? (
              <Typography
                style={{
                  padding: "10px",
                  backgroundColor: "rgba(233,62,62,0.7)",
                  color: "#fff",
                  borderRadius: "5px",
                }}
              >
                order cancellation request from user{" "}
                <NewReleasesIcon
                  className="blink"
                  style={{ color: "rgba(233,62,62,1)" }}
                />
              </Typography>
            ) : approveStatus === "Approved" ? (
              <Typography
                style={{
                  padding: "10px",
                  backgroundColor: "rgba(45,62,62,0.7)",
                  color: "#fff",
                  borderRadius: "5px",
                }}
              >
                order cancellation Approved{" "}
                <VerifiedIcon style={{ color: "rgba(45,62,62,1)" }} />
              </Typography>
            ) : approveStatus === "Denied" ? (
              <Typography
                style={{
                  padding: "10px",
                  backgroundColor: "rgba(198,167,98,0.7)",
                  color: "#fff",
                  borderRadius: "5px",
                }}
              >
                Request Denied{" "}
                <VerifiedIcon style={{ color: "rgba(198,167,98,1)" }} />
              </Typography>
            ) : null}

            <Box>
              <Box>
                <Typography
                  style={{
                    padding: "2px 20px",
                    backgroundColor: "rgba(25,118,210,0.5)",
                    color: "#fff",
                    borderRadius: "7px",
                  }}
                >
                  ₹ {orderDetails?.total_amount?.toFixed()}
                </Typography>
              </Box>
              <Box style={{ justifyContent: "flex-end", marginRight: "10%" }}>
                <Button
                  onClick={() => handleClickOpen(orderDetails, "Approved")}
                >
                  Approve
                </Button>
                <Button
                  style={{ color: "#E75758" }}
                  onClick={() => handleClickOpen(orderDetails, "Canceled")}
                >
                  Cancel
                </Button>
              </Box>
            </Box>
          </Box>
        </Ticket2>
      ) : (
        ""
      )}

      <ConditionDelete
        open={open}
        setOpen={setOpen}
        requestStatus={requestStatus}
        handleClickOpen={handleClickOpen}
        deleteObjectData={deleteObjectData}
        approveStatus={approveStatus}
        setApproveStatus={setApproveStatus}
        orderId={orderDetails?._id}
      />
    </CommetPageTitle>
  );
};

export default DeliveryStatus;
