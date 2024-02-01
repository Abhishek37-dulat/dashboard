import axios from "axios";
import * as actionType from "../Constants/ProductTypes";
import { toast, ToastContainer } from "react-toastify";

const url = process.env.REACT_APP_URL;

export const getAllProduct = () => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_REQUEST });
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/product/admin/products`, { headers });
    console.log(data);

    dispatch({ type: actionType.GET_ALL_PRODUCTS, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_PRODUCTS, error: error });
  }
};

export const getSingleProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_REQUEST });
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/product/admin/products/${id}`, {
      headers,
    });
    localStorage.removeItem("SingleProduct");
    localStorage.setItem("SingleProduct", JSON.stringify(data.data.data));
    dispatch({ type: actionType.GET_SINGLE_PRODUCT, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_PRODUCTS, error: error });
  }
};

export const addNewProduct = (newData) => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_REQUEST });
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    console.log("newData: ", newData);

    const data = await axios.post(`${url}/product/admin/products`, newData, {
      headers,
    });
    dispatch({ type: actionType.POST_PRODUCT, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_POST_PRODUCT, error: error });
  }
};

export const updateNewProduct = (id, newData) => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_REQUEST });
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    const data = await axios.put(
      `${url}/product/admin/products/${id}`,
      newData,
      {
        headers,
      }
    );
    console.log(data);
    dispatch({ type: actionType.PUT_PRODUCT, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_PUT_PRODUCT, error: error });
  }
};

export const deleteExistingProduct = (newData) => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_REQUEST });
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.delete(
      `${url}/product/admin/products/${newData}`,
      {
        headers,
      }
    );

    dispatch({ type: actionType.DELETE_PRODUCT, payload: data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_DELETE_PRODUCT, error: error });
  }
};
