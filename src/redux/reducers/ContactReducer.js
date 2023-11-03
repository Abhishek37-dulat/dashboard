import * as actionType from "../Constants/ContactTypes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  ContactData: [],
};

export const ContactReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ALL_CONTACTS:
      return { ...state, ContactData: action.payload };
    case actionType.GET_POST_CONTACTS:
      return { ...state, ContactData: [...state.ContactData, action.payload] };
    case actionType.GET_PUT_CONTACTS:
      let tempData = state.ContactData?.map((data) => {
        if (data._id) {
          return action.payload;
        } else {
          return data;
        }
      });
      return { ...state, ContactData: tempData };
    case actionType.GET_DELETE_CONTACTS:
      let temp = state.ContactData.filter(
        (item) => item._id !== action.payload._id
      );
      return { ...state, ContactData: temp };
    default:
      return state;
  }
};
