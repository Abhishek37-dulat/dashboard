import * as actionType from "../Constants/BannerTypes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  LoadingCondition: true,
};

export const LoadingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "loadingdata":
      return { ...state, LoadingCondition: true };
    case "stoploadingdata":
      return { ...state, LoadingCondition: false };
    case "loadingerror":
      return { ...state, LoadingCondition: false };
    default:
      return state;
  }
};
