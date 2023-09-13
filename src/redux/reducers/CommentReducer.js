import * as actionType from "../Constants/CommentTypes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  CommentData: [],
};

export const CommentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ALL_COMMENTS:
      const reversedData = action.payload.reverse();
      return { ...state, CommentData: reversedData };
    default:
      return state;
  }
};
