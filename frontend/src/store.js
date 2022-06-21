import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Import Reducers
import {
  productListReducer,
  productListDetailsReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";

//----------------
// Common Reducer
//----------------
const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productListDetailsReducer,
  cart: cartReducer,
});

//------------------------------------
// Getting the Data from localStorage
//------------------------------------
// String Parsing
const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

//----------------
// Initial State
//----------------
const initialState = {
  cart: { cartItems: cartItemsFromLocalStorage },
};

//----------------
// Middlewares
//----------------
const middleware = [thunk];

//--------
// store
//--------
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

//--------------
// Named Export
//--------------
export { store };
