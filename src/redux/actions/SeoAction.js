import axios from "axios";
import * as actionType from "../Constants/SeoTypes";
import { toast, ToastContainer } from "react-toastify";

const url = process.env.REACT_APP_URL;

export const addSeo = (newdata) => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    console.log(newdata);
    const data = await axios.post(`${url}/seo`, newdata, { headers });
    console.log(data);
  } catch (error) {
    dispatch({ type: actionType.ERROR_ADD_SEO, error: error });
  }
};

export const updateSeo = (newdata, id) => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    console.log(newdata, id);
    const data = await axios.put(`${url}/seo/${id}`, newdata, { headers });
    console.log(data);
  } catch (error) {
    dispatch({ type: actionType.ERROR_UPDATE_SEO, error: error });
  }
};

export const getSeo = (newdata) => async (dispatch) => {
  try {
    const data = await axios.get(`${url}/seo/${newdata}`);
    console.log(data);

    dispatch({ type: actionType.GET_SEO, payload: data.data.data });
    return data.data.data;
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_SEO, error: error });
  }
};

