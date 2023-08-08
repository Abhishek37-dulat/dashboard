import * as actionType from "../Constants/ColorTypes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  ColorData: [],
};
const customSuccessToastStyleSuccess = {
  background: "#4CAF50", // Replace this with your desired background color
  color: "#fff", // Text color for the toast
};

const customSuccessToastStyleError = {
  background: "#E75758", // Replace this with your desired background color
  color: "#fff", // Text color for the toast
};
export const ColorReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ALL_COLORS:
      return { ...state, ColorData: action.payload.data };
    case actionType.GET_SINGLE_COLOR:
      return state;
    case actionType.POST_COLOR:
      toast.success("Color Saved successfully!", {
        toastId: "success1",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: customSuccessToastStyleSuccess,
      });
      return { ...state, ColorData: [...state.ColorData, action.payload.data] };
    case actionType.DELETE_COLOR:
      toast.error("Color Deleted successfully!", {
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
        ColorData: state.ColorData.filter(
          (item) => item._id !== action.payload.data.data._id
        ),
      };

    default:
      return state;
  }
};
