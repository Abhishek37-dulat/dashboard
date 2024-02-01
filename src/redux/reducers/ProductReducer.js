import * as actionType from "../Constants/ProductTypes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  loading: false,
  ProductData: [],
  singleProduct: null,
  error: null,
};
const customSuccessToastStyleSuccess = {
  background: "#4CAF50",
  color: "#fff",
};

const customSuccessToastStyleError = {
  background: "#E75758",
  color: "#fff",
};
export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_REQUEST:
      return { ...state, loading: true, error: null };
    case actionType.GET_ALL_PRODUCTS:
      return {
        ...state,
        ProductData: action.payload.data,
        loading: false,
        error: null,
      };
    case actionType.GET_SINGLE_PRODUCT:
      return { ...state, singleProduct: action.payload.data };
    case actionType.POST_PRODUCT:
      toast.success("Product added successfully!", {
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
        ProductData: [...state.ProductData, action.payload.data],
        loading: false,
        error: null,
      };
    case actionType.PUT_PRODUCT:
      const updatedData = state.ProductData.map((item) => {
        if (item._id === action.payload.data._id) {
          return action.payload.data;
        } else {
          return item;
        }
      });
      toast.success("Product Updated successfully!", {
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
        ProductData: updatedData,
        loading: false,
        error: null,
      };
    case actionType.DELETE_PRODUCT:
      toast.error("Product Deleted successfully!", {
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
        ProductData: state.ProductData.filter(
          (item) => item._id !== action.payload.data.data._id
        ),
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
