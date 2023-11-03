import * as actionType from "../Constants/BlogTypes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  BlogData: [],
  singleBlog: null,
};
const customSuccessToastStyleSuccess = {
  background: "#4CAF50",
  color: "#fff",
};

const customSuccessToastStyleError = {
  background: "#E75758",
  color: "#fff",
};
export const BlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ALL_BLOGS:
      return { ...state, BlogData: action.payload.data };
    case actionType.GET_SINGLE_BLOG:
      return { ...state, singleBlog: action.payload.data };
    case actionType.POST_BLOG:
      toast.success("Blog added successfully!", {
        toastId: "success1",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: customSuccessToastStyleSuccess,
      });
      console.log(action.payload.data);
      return {
        ...state,
        BlogData: [...state.BlogData, action.payload.data],
      };
    case actionType.PUT_BLOG:
      const updatedData = state.BlogData.map((item) => {
        if (item._id === action.payload.data._id) {
          return action.payload.data;
        } else {
          return item;
        }
      });
      toast.success("Blog Updated successfully!", {
        toastId: "success3",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: customSuccessToastStyleSuccess,
      });
      return {
        ...state,
        BlogData: updatedData,
      };
    case actionType.DELETE_BLOG:
      toast.error("Blog Deleted successfully!", {
        toastId: "success2",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: customSuccessToastStyleError,
      });
      return {
        ...state,
        BlogData: state.BlogData.filter(
          (item) => item._id !== action.payload.data.data._id
        ),
      };

    default:
      return state;
  }
};
