import axios from "axios";
import * as actionType from "../Constants/SaveTypes";
import { toast, ToastContainer } from "react-toastify";

const url = process.env.REACT_APP_URL;

export const getAllSaves = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/save/admin/save`, { headers });

    dispatch({ type: actionType.GET_ALL_SAVES, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_SAVES, error: error });
  }
};
