import axios from "axios";
import * as actionType from "../Constants/CategorieTypes";
import { toast, ToastContainer } from "react-toastify";

const url = process.env.REACT_APP_URL;

export const getAllCategories = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/categories/`, { headers });
    console.log(data);
    dispatch({ type: actionType.GET_ALL_CATEGORIES, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_CATEGORIES, error: error });
  }
};

export const getSingleCategorie = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/categories/${id}`, { headers });

    dispatch({ type: actionType.GET_SINGLE_CATEGORIE, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_CATEGORIES, error: error });
  }
};

export const addNewCategorie = (newData) => async (dispatch) => {
  try {
    console.log("newData: ", newData);
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.post(`${url}/categories/`, newData, { headers });
    console.log(data);
    dispatch({ type: actionType.POST_CATEGORIE, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_POST_CATEGORIE, error: error });
  }
};

export const updateNewCategorie = (id, newData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.put(`${url}/categories/${id}`, newData, {
      headers,
    });

    dispatch({ type: actionType.PUT_CATEGORIE, payload: data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_PUT_CATEGORIE, error: error });
  }
};

export const deleteExistingCategorie = (newData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.delete(`${url}/categories/${newData}`, {
      headers,
    });

    dispatch({ type: actionType.DELETE_CATEGORIE, payload: data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_DELETE_CATEGORIE, error: error });
  }
};
