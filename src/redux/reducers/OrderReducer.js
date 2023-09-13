import * as actionType from "../Constants/OrdersTypes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  OrderData: [],
  SingleOrder: [],
  TodayOrder: [],
  CanceledOrder: [],
};

export const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ALL_ORDERS:
      const reversedData = action.payload.data.reverse();
      return { ...state, OrderData: reversedData };
    case actionType.GET_USER_ORDERS:
      return { ...state, SingleOrder: action.payload.data };
    case actionType.GET_TODAY_ORDERS:
      return { ...state, TodayOrder: action.payload };
    case actionType.GET_CANCELED_ORDERS:
      return { ...state, CanceledOrder: action.payload };
    default:
      return state;
  }
};
