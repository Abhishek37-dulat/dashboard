import * as actionType from "../Constants/ContactTypes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  ContactData: [],
  LoadingCondition: false,
};

const customSuccessToastStyleSuccess = {
  background: "#4CAF50",
  color: "#fff",
};

const customSuccessToastStyleError = {
  background: "#E75758",
  color: "#fff",
};

export const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ALL_CONTACTS:
      return { ...state, ContactData: action.payload, LoadingCondition: false };
    case actionType.ERROR_GET_ALL_CONTACTS:
      toast.error("Error While Fetching Data!", {
        toastId: "successcontact4",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: customSuccessToastStyleError,
      });
      return { ...state, LoadingCondition: false };
    case actionType.GET_ALL_CONTACTS_LOADING:
      return { ...state, LoadingCondition: true };
    case actionType.GET_POST_CONTACTS:
      toast.success("Add Contactus successfully!", {
        toastId: "successcontact1",
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
        ContactData: [...state.ContactData, action.payload],
        LoadingCondition: false,
      };
    case actionType.GET_POST_CONTACTS_LOADING:
      return { ...state, LoadingCondition: true };
    case actionType.ERROR_GET_POST_CONTACTS:
      toast.error("Error While Adding Data!", {
        toastId: "successcontact4",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: customSuccessToastStyleError,
      });
      return { ...state, LoadingCondition: false };
    case actionType.GET_PUT_CONTACTS:
      toast.success("Contact Details Updated successfully!", {
        toastId: "successcontact2",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: customSuccessToastStyleSuccess,
      });
      let tempData = state.ContactData?.map((data) => {
        if (data._id === action.payload._id) {
          return action.payload;
        } else {
          return data;
        }
      });
      return { ...state, ContactData: tempData, LoadingCondition: false };
    case actionType.GET_PUT_CONTACTS_LOADING:
      return { ...state, LoadingCondition: true };
    case actionType.ERROR_GET_PUT_CONTACTS:
      toast.error("Error While Updating Data!", {
        toastId: "successcontact4",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: customSuccessToastStyleError,
      });
      return { ...state, LoadingCondition: false };
    case actionType.GET_DELETE_CONTACTS:
      toast.error("Contactus Deleted successfully!", {
        toastId: "successcontact3",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: customSuccessToastStyleError,
      });
      let temp = state.ContactData.filter(
        (item) => item._id !== action.payload._id
      );
      return { ...state, ContactData: temp, LoadingCondition: false };
    case actionType.GET_DELETE_CONTACTS_LOADING:
      return { ...state, LoadingCondition: true };
    case actionType.ERROR_GET_DELETE_CONTACTS:
      toast.error("Error While Deleting Data!", {
        toastId: "successcontact4",
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: customSuccessToastStyleError,
      });
      return { ...state, LoadingCondition: false };
    default:
      return state;
  }
};
