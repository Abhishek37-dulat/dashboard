import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { ColorReducer } from "./reducers/ColorReducer";
import { CategorieReducer } from "./reducers/CategorieReducer";
import { ProductReducer } from "./reducers/ProductReducer";
import { OrderReducer } from "./reducers/OrderReducer";
import { UserReducer } from "./reducers/UserReducer";
import { BannerReducer } from "./reducers/BannerReducer";
import { PostReducer } from "./reducers/PostReducer";
import { CommentReducer } from "./reducers/CommentReducer";
import { CartReducer } from "./reducers/CartReducer";
import { SaveReducer } from "./reducers/SaveReducer";
import { BlogReducer } from "./reducers/BlogReducer";
import { SeoReducer } from "./reducers/SeoReducer";
import { ContactReducer } from "./reducers/ContactReducer";
import { LoadingReducer } from "./reducers/LoadingReducer";

const reducer = combineReducers({
  Colors: ColorReducer,
  Categories: CategorieReducer,
  Products: ProductReducer,
  Orders: OrderReducer,
  Users: UserReducer,
  Banners: BannerReducer,
  Posts: PostReducer,
  Comments: CommentReducer,
  Carts: CartReducer,
  Saves: SaveReducer,
  Blogs: BlogReducer,
  Seos: SeoReducer,
  Contacts: ContactReducer,
  loading: LoadingReducer,
});

const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
