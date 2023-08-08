import * as actionType from "../Constants/CategorieTypes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  CategorieData: [],
};
const customSuccessToastStyleSuccess = {
  background: "#4CAF50",
  color: "#fff",
};

const customSuccessToastStyleError = {
  background: "#E75758",
  color: "#fff",
};
export const CategorieReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ALL_CATEGORIES:
      return { ...state, CategorieData: action.payload.data };
    case actionType.GET_SINGLE_CATEGORIE:
      return state;
    case actionType.POST_CATEGORIE:
      toast.success("Categorie added successfully!", {
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
        CategorieData: [...state.CategorieData, action.payload.data],
      };
    case actionType.PUT_CATEGORIE:
      const updatedData = state.CategorieData.map((item) => {
        if (item._id === action.payload.data._id) {
          return action.payload.data;
        } else {
          return item;
        }
      });
      toast.success("Categorie Updated successfully!", {
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
        CategorieData: updatedData,
      };
    case actionType.DELETE_CATEGORIE:
      toast.error("Categorie Deleted successfully!", {
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
        CategorieData: state.CategorieData.filter(
          (item) => item._id !== action.payload.data.data._id
        ),
      };

    default:
      return state;
  }
};
