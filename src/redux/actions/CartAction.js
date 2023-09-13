import axios from "axios";
import * as actionType from "../Constants/CartTypes";
import { toast, ToastContainer } from "react-toastify";

const url = process.env.REACT_APP_URL;

export const getAllCarts = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/cart/admin/cart`, { headers });

    dispatch({ type: actionType.GET_ALL_CARTS, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_CARTS, error: error });
  }
};
