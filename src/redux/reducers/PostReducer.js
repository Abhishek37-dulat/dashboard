import * as actionType from "../Constants/PostTypes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  PostData: [],
};

export const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ALL_POSTS:
      const reversedData = action.payload.reverse();
      return { ...state, PostData: reversedData };
    case actionType.POST_POSTS:
      const updatedPostData = [...state.PostData, action.payload];
      return { ...state, PostData: updatedPostData };
    case actionType.DELETE_POSTS:
      const data = state.PostData.filter(
        (item) => item._id !== action.payload._id
      );
      return { ...state, PostData: data };
    default:
      return state;
  }
};
