import axios from "axios";
import * as actionType from "../Constants/ColorTypes";
import { toast, ToastContainer } from "react-toastify";

const url = "https://hair-product-api-buuh.vercel.app";

export const getAllColors = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/colors/`, { headers });

    dispatch({ type: actionType.GET_ALL_COLORS, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_COLORS, error: error });
  }
};

export const getSingleColor = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/colors/${id}`, { headers });

    dispatch({ type: actionType.GET_SINGLE_COLOR, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_COLORS, error: error });
  }
};

export const addNewColor = (newData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.post(`${url}/colors/`, newData, { headers });

    dispatch({ type: actionType.POST_COLOR, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_COLORS, error: error });
  }
};

export const deleteExistingColor = (newData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.delete(`${url}/colors/${newData}`, { headers });

    dispatch({ type: actionType.DELETE_COLOR, payload: data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_DELETE_COLOR, error: error });
  }
};
