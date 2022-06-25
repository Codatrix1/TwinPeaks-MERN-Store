import axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
} from "../constants/cartConstants";

//------------------
// Action Creators
//-----------------

//--------------------
// Add to Cart Action
//--------------------
const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      qty: qty,
    },
  });

  // Setting the Data to localStorage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

//------------------------
// Remove from Cart Action
//-------------------------
const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  // Setting the Data to localStorage
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

//-----------------------------
// Save Shipping Address Action
//-----------------------------
const saveShippingAddress = (data) => (dispatch) => {
  dispatch({
    type: CART_SAVE_SHIPPING_ADDRESS,
    payload: data,
  });

  // Setting the Data to localStorage
  localStorage.setItem("shippingAddress", JSON.stringify(data));
};

//---------------
// Export: Named
//---------------
export { addToCart, removeFromCart, saveShippingAddress };
