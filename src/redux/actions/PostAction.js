import axios from "axios";
import * as actionType from "../Constants/PostTypes";
import { toast, ToastContainer } from "react-toastify";

const url = process.env.REACT_APP_URL;

export const getAllPost = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/posts`, { headers });
    console.log(data.data.data);
    dispatch({ type: actionType.GET_ALL_POSTS, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_POSTS, error: error });
  }
};

export const addNewPost = (newData) => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const formData = new FormData();
    if (newData?.title !== "") {
      formData.append("title", newData.title);
    }
    if (newData?.description !== "") {
      formData.append("description", newData.description);
    }
    if (newData?.categorie !== "") {
      formData.append("categorie", newData.categorie);
    }
    if (newData?.image !== "") {
      formData.append("post_image", newData.image);
    }
    const data = await axios.post(`${url}/posts`, formData, { headers });
    console.log(data);
    dispatch({ type: actionType.POST_POSTS, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_POST_POSTS, error: error });
  }
};

export const deletePost = (newData) => async (dispatch) => {
  console.log("newData: ", newData);
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.delete(`${url}/posts/${newData}`, { headers });
    console.log(">>>>", data);
    dispatch({ type: actionType.DELETE_POSTS, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_DELETE_POSTS, error: error });
  }
};
