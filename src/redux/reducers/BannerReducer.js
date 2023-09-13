import * as actionType from "../Constants/BannerTypes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  BannerData: [],
};

export const BannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ALL_BANNER:
      const reversedData = action.payload.reverse();
      return { ...state, BannerData: reversedData };
    case actionType.POST_BANNER:
      const updatedBannerData = [...state.BannerData, action.payload];
      return { ...state, BannerData: updatedBannerData };
    case actionType.DELETE_BANNER:
      const data = state.BannerData.filter(
        (item) => item._id !== action.payload._id
      );
      return { ...state, BannerData: data };
    default:
      return state;
  }
};
