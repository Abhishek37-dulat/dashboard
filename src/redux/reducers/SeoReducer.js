import * as actionType from "../Constants/SeoTypes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  SeoData: null,
};

export const SeoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_SEO:
      console.log(action.payload);
      return { ...state, SeoData: action.payload };
    default:
      return state;
  }
};
