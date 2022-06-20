import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Import Reducers
import { productListReducer } from "./reducers/productReducers";

//----------------
// Common Reducer
//----------------
const reducer = combineReducers({
  productList: productListReducer,
});

//----------------
// Initial State
//----------------
const initialState = {};

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
