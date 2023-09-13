import { Box, Button, IconButton, Typography, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Collapse from "@mui/material/Collapse";
import {
  getAllUser,
  getAllUserProfile,
  getSingleUser,
} from "../../redux/actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserOrders } from "../../redux/actions/OrdersAction";

const AllUserMainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  padding: "2%",
}));

const AllUserTitle = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  "& > p": {
    fontSize: "24px",
  },
}));

const AllUserList = styled(Box)(({ theme }) => ({
  //   border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  width: "100%",
  "& > div": {
    // border: "1px solid black",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    "& > table": {
      //   border: "1px solid black",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      width: "100%",
      "& > thead": {
        // border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: "5px 5px 0px 0px",

        "& > tr": {
          //   border: "1px solid black",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          width: "100%",
          padding: "10px 0px",
          //   borderRadius: "5px 5px 5px 5px",
          "& > th": {
            // border: "1px solid black",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "25%",
            marginLeft: "10px",
            "& > p": {
              fontSize: "16px",
              fontWeight: "600",
            },
          },
        },
      },
      "& > tbody": {
        // border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",
        "& > div": {
          //   border: "1px solid black",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          width: "100%",
          "& > div": {
            // border: "1px solid black",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            "& > div": {
              //   border: "1px solid black",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              width: "100%",
              "& > div": {
                // border: "1px solid black",
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                alignItems: "center",
                width: "100%",
                backgroundColor: "#fff",
                padding: "10px",
                "& > div": {
                  //   border: "1px solid black",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  width: "100%",
                  "& > div": {
                    //   border: "1px solid black",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    width: "100%",
                    "& > tr": {
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                      padding: "10px 0px",
                      backgroundColor: "#fff",
                      borderRadius: "0px 0px 5px 5px",
                      "& > td": {
                        //   border: "1px solid black",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        width: "25%",
                      },
                    },
                  },

                  "& > p": {
                    marginLeft: "20px",
                  },
                },
              },
            },
          },
        },
        "& > tr": {
          borderTop: "1px solid #EEEFF1",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "10px 0px",
          backgroundColor: "#fff",
          "& > td": {
            // border: "1px solid black",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "25%",
            marginLeft: "10px",
            "& > p": {
              fontSize: "14px",
              fontWeight: "600",
              fontFamily: "'Dosis', sans-serif",
            },
          },
        },
      },
      "& > tfoot": {
        // border: "1px solid black",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "100%",

        "& > tr": {
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          padding: "10px 0px",
          backgroundColor: "#fff",
          borderRadius: "0px 0px 5px 5px",
          "& > td": {
            // border: "1px solid black",
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "25%",
            marginLeft: "10px",
          },
        },
      },
    },
  },
}));

const AllUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState({});
  const [dropIcon, setDropIcon] = useState({});
  const { UserData, UserProfileData } = useSelector((state) => state.Users);
  const { OrderData } = useSelector((state) => state.Orders);
  const handleShowDetails = (index) => {
    setShowDetails((predata) => ({
      ...predata,
      [index]: !predata[index],
    }));
    handleDropIcon(index);
  };

  const handleDropIcon = (index) => {
    setDropIcon((predata) => ({
      ...predata,
      [index]: !predata[index],
    }));
  };
  const handleUserDetails = (data) => {
    console.log(data);
    dispatch(getSingleUser(data._id));
    navigate(`/order/user/${data._id}`);
  };

  useEffect(() => {
    dispatch(getAllUser());
    dispatch(getAllUserProfile());
  }, []);

  console.log(OrderData);

  return (
    <AllUserMainBox>
      <AllUserTitle>
        <Typography>
          Number Of User's : <span style={{ color: "#5A73CD" }}>1000</span>
        </Typography>
      </AllUserTitle>
      <AllUserList>
        <Box>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>
                  <Typography>User Name</Typography>
                </th>
                <th>
                  <Typography>Email</Typography>
                </th>
                <th>
                  <Typography>Phone</Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {UserData?.map((data, index) => {
                const profile = UserProfileData?.filter(
                  (item) => item?.user_id === data._id
                );
                const orders = OrderData?.filter(
                  (item) => item?.user_id === data._id
                );
                console.log(orders);
                return (
                  <>
                    {!dropIcon[index] ? (
                      <tr key={data._id}>
                        <td>
                          <Typography>
                            <IconButton
                              onClick={() => handleShowDetails(index)}
                            >
                              <KeyboardArrowDownIcon />
                            </IconButton>
                          </Typography>
                          <Typography style={{ marginLeft: "10px" }}>
                            {index + 1}
                          </Typography>
                        </td>
                        <td>
                          <Typography>
                            {data.first_name} {data.last_name}
                          </Typography>
                        </td>
                        <td>
                          <Typography>{data.email}</Typography>
                        </td>
                        <td>
                          <Typography>{data.phone}</Typography>
                        </td>
                      </tr>
                    ) : null}
                    <Collapse in={showDetails[index]} timeout="auto">
                      <Box>
                        <Box style={{ justifyContent: "space-between" }}>
                          <IconButton onClick={() => handleShowDetails(index)}>
                            <KeyboardArrowUpIcon />
                          </IconButton>
                          <Button
                            style={{
                              marginRight: "20px",
                              backgroundColor: "#252F43",
                              color: "#fff",
                            }}
                            onClick={() => handleUserDetails(data)}
                          >
                            <Typography>View Details</Typography>
                          </Button>
                        </Box>
                        <Box>
                          <Typography>
                            <b>Name:</b> {data.first_name} {data.last_name}
                          </Typography>
                          <Typography>
                            <b>Gender:</b>{" "}
                            {profile?.length > 0 ? profile[0]?.gender : "-- --"}
                          </Typography>
                          <Typography>
                            <b>DOB:</b>{" "}
                            {profile?.length > 0 ? profile[0]?.dob : "-- --"}
                          </Typography>
                        </Box>
                        <Box>
                          <Typography>
                            <b>Email:</b> {data.email}
                          </Typography>
                          <Typography>
                            <b>Phone:</b> {data.phone}
                          </Typography>
                        </Box>
                        <Box>
                          <Box>
                            <tr
                              style={{
                                backgroundColor: "#EEEFF1",
                                borderRadius: "0px",
                              }}
                            >
                              <td style={{ marginLeft: "10px" }}>
                                <Typography>Date</Typography>
                              </td>
                              <td>
                                <Typography>Order Id</Typography>
                              </td>
                              <td>
                                <Typography>User Id</Typography>
                              </td>
                              <td>
                                <Typography>Order Status</Typography>
                              </td>
                              <td>
                                <Typography>Total Amt.</Typography>
                              </td>
                            </tr>
                            {orders?.length > 0
                              ? orders?.map((item) => {
                                  return (
                                    <tr style={{ backgroundColor: "#fff" }}>
                                      <td style={{ marginLeft: "10px" }}>
                                        <Typography>
                                          {String(item?.createdAt).substring(
                                            0,
                                            10
                                          )}
                                        </Typography>
                                      </td>
                                      <td>
                                        <Typography>
                                          {String(item?.order_id)?.length > 8
                                            ? String(item?.order_id).substring(
                                                0,
                                                8
                                              ) + "..."
                                            : String(item?.order_id)}
                                        </Typography>
                                      </td>
                                      <td>
                                        <Typography>
                                          {String(item?.user_id)?.length > 8
                                            ? String(item?.user_id).substring(
                                                0,
                                                8
                                              ) + "..."
                                            : String(item?.user_id)}
                                        </Typography>
                                      </td>
                                      <td>
                                        <Typography>
                                          {item?.order_status}
                                        </Typography>
                                      </td>
                                      <td>
                                        <Typography>
                                          ₹{item?.total_amount}
                                        </Typography>
                                      </td>
                                    </tr>
                                  );
                                })
                              : null}
                          </Box>
                        </Box>
                      </Box>
                    </Collapse>
                  </>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </Box>
      </AllUserList>
    </AllUserMainBox>
  );
};

export default AllUsers;
