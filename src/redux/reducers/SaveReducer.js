import * as actionType from "../Constants/SaveTypes";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  SaveData: [],
};

export const SaveReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_ALL_SAVES:
      const reversedData = action.payload.reverse();

      // Filter out items with the same user_id
      const uniqueCartData = reversedData.reduce((accumulator, currentItem) => {
        const existingItem = accumulator.find(
          (item) => item.userID === currentItem.userID
        );

        if (!existingItem) {
          // If no item with the same user_id exists in accumulator, add the currentItem
          accumulator.push(currentItem);
        }

        return accumulator;
      }, []);

      return { ...state, SaveData: uniqueCartData };
    default:
      return state;
  }
};
