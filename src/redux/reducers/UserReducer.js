import * as actionType from "../Constants/UserTypes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  UserData: [],
  SingleUser: [],
  UserProfileData: [],
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ALL_USERS:
      return { ...state, UserData: action.payload.data };
    case actionType.GET_SINGLE_USER:
      return { ...state, SingleUser: action.payload.data };
    case actionType.GET_ALL_USERS_PROFILE:
      return { ...state, UserProfileData: action.payload.data };
    default:
      return state;
  }
};
