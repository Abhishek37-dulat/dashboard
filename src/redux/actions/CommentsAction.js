import axios from "axios";
import * as actionType from "../Constants/CommentTypes";
import { toast, ToastContainer } from "react-toastify";

const url = process.env.REACT_APP_URL;

export const getAllComments = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("admintoken");
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    const data = await axios.get(`${url}/comment/admin/comments`, { headers });

    dispatch({ type: actionType.GET_ALL_COMMENTS, payload: data.data.data });
  } catch (error) {
    dispatch({ type: actionType.ERROR_GET_ALL_COMMENTS, error: error });
  }
};
