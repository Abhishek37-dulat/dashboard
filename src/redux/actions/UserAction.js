import axios from "axios";
import * as actionType from "../Constants/UserTypes";
import { toast, ToastContainer } from "react-toastify";

const url = process.env.REACT_APP_URL;

export const getAllUser = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/user`, { headers });
    console.log(data);

    dispatch({ type: actionType.GET_ALL_USERS, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_USERS, error: error });
  }
};

export const getAllUserProfile = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/profile/data/user`, { headers });
    console.log(data);

    dispatch({ type: actionType.GET_ALL_USERS_PROFILE, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_USERS_PROFILE, error: error });
  }
};

export const getSingleUser = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    console.log("fun get single");
    const data = await axios.get(`${url}/user/${id}`, { headers });
    console.log(data);

    dispatch({ type: actionType.GET_SINGLE_USER, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_SINGLE_USER, error: error });
  }
};

export const getUserAddress = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/useraddress/${id}`, { headers });
    console.log(data);

    dispatch({ type: actionType.GET_SINGLE_USER, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_SINGLE_USER, error: error });
  }
};
