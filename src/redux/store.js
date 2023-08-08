import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { ColorReducer } from "./reducers/ColorReducer";
import { CategorieReducer } from "./reducers/CategorieReducer";
import { ProductReducer } from "./reducers/ProductReducer";

const reducer = combineReducers({
  Colors: ColorReducer,
  Categories: CategorieReducer,
  Products: ProductReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
