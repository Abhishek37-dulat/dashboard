import * as actionType from "../Constants/BannerTypes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  BannerData: [],
};
const customSuccessToastStyleSuccess = {
  background: "#4CAF50",
  color: "#fff",
};

const customSuccessToastStyleError = {
  background: "#E75758",
  color: "#fff",
};

export const BannerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ALL_BANNER:
      const reversedData = action.payload.reverse();
      return { ...state, BannerData: reversedData };
    case actionType.POST_BANNER:
      toast.success("Banner Uploaded successfully!", {
        toastId: "successcontact1",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: customSuccessToastStyleSuccess,
      });
      const updatedBannerData = [...state.BannerData, action.payload];
      return { ...state, BannerData: updatedBannerData };
    case actionType.UPDATE_BANNER:
      toast.success("Banner Details Updated successfully!", {
        toastId: "successcontact2",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: customSuccessToastStyleSuccess,
      });
      let tempData = state.BannerData?.map((data) => {
        if (data._id === action.payload._id) {
          return action.payload;
        } else {
          return data;
        }
      });
      return { ...state, ContactData: tempData, LoadingCondition: false };
    case actionType.DELETE_BANNER:
      toast.error("Banner Deleted successfully!", {
        toastId: "successcontact3",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: customSuccessToastStyleError,
      });
      const data = state.BannerData.filter(
        (item) => item._id !== action.payload._id
      );
      return { ...state, BannerData: data };
    default:
      return state;
  }
};
