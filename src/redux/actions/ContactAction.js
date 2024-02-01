import axios from "axios";
import * as actionType from "../Constants/ContactTypes";
import { toast, ToastContainer } from "react-toastify";

const url = process.env.REACT_APP_URL;

export const getAllContacts = () => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_ALL_CONTACTS_LOADING });
    const data = await axios.get(`${url}/contact/contact`);

    dispatch({ type: actionType.GET_ALL_CONTACTS, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_CONTACTS, error: error });
  }
};

export const getSingleContacts = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_SINGLE_CONTACTS_LOADING });
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/contact/contact/${id}`, { headers });

    dispatch({ type: actionType.GET_SINGLE_CONTACTS, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_SINGLE_CONTACTS, error: error });
  }
};

export const addContacts = (contactdata) => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_POST_CONTACTS_LOADING });
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.post(`${url}/contact/contact`, contactdata, {
      headers,
    });

    dispatch({ type: actionType.GET_POST_CONTACTS, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_POST_CONTACTS, error: error });
  }
};

export const updateContacts = (contactdata, id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_PUT_CONTACTS_LOADING });
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.put(`${url}/contact/contact/${id}`, contactdata, {
      headers,
    });

    dispatch({ type: actionType.GET_PUT_CONTACTS, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_PUT_CONTACTS, error: error });
  }
};

export const deleteContacts = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionType.GET_DELETE_CONTACTS_LOADING });
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.delete(`${url}/contact/contact/${id}`, {
      headers,
    });

    dispatch({ type: actionType.GET_DELETE_CONTACTS, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_DELETE_CONTACTS, error: error });
  }
};
