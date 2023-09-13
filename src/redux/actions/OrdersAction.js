import axios from "axios";
import * as actionType from "../Constants/OrdersTypes";
import { toast, ToastContainer } from "react-toastify";

const url = process.env.REACT_APP_URL;

export const getAllOrders = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/checkout/admin`, { headers });

    dispatch({ type: actionType.GET_ALL_ORDERS, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_ORDERS, error: error });
  }
};

export const getUserOrders = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/checkout/admin/${id}`, { headers });
    console.log(data);
    dispatch({ type: actionType.GET_USER_ORDERS, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_USER_ORDERS, error: error });
  }
};

export const getTodayOrder = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/checkout/admin`, { headers });
    const todayData = data?.data?.data?.filter((item) => {
      const timestamp = Date.now();
      const date = new Date(timestamp);

      const iso8601Date = date.toISOString();

      return iso8601Date.substring(0, 10) === item.createdAt.substring(0, 10)
        ? item
        : "";
    });
    console.log("todayData: ", todayData);
    dispatch({ type: actionType.GET_TODAY_ORDERS, payload: todayData });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_TODAY_ORDERS, error: error });
  }
};

export const getCanceledOrder = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/checkout/admin`, { headers });
    const canceledData = data?.data?.data?.filter((item) => {
      return item.ShipStatus === "CANCELED" ? item : "";
    });
    console.log("todayData: ", canceledData);
    dispatch({ type: actionType.GET_CANCELED_ORDERS, payload: canceledData });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_CANCELED_ORDERS, error: error });
  }
};

// CANCELED
