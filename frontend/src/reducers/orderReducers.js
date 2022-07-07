import {
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,
  ORDER_PAY_RESET,
} from "../constants/orderConstants";

//----------------------------
// Order Functionality
//----------------------------
const orderCreateReducer = (state = {}, action) => {
  if (action.type === ORDER_CREATE_REQUEST) {
    return {
      loading: true,
    };
  }

  if (action.type === ORDER_CREATE_SUCCESS) {
    return {
      loading: false,
      success: true,
    };
  }

  if (action.type === ORDER_CREATE_FAIL) {
    return {
      loading: false,
      error: action.payload,
    };
  }

  //----------------
  // Default State
  //----------------
  return state;
};

const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: {} },
  action
) => {
  if (action.type === ORDER_DETAILS_REQUEST) {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === ORDER_DETAILS_SUCCESS) {
    return {
      loading: false,
      order: action.payload,
    };
  }

  if (action.type === ORDER_DETAILS_FAIL) {
    return {
      loading: false,
      error: action.payload,
    };
  }

  //----------------
  // Default State
  //----------------
  return state;
};

const orderPayReducer = (state = {}, action) => {
  if (action.type === ORDER_PAY_REQUEST) {
    return {
      loading: true,
    };
  }

  if (action.type === ORDER_PAY_SUCCESS) {
    return {
      loading: false,
      success: true,
    };
  }

  if (action.type === ORDER_PAY_FAIL) {
    return {
      loading: false,
      error: action.payload,
    };
  }

  if (action.type === ORDER_PAY_RESET) {
    return {};
  }

  //----------------
  // Default State
  //----------------
  return state;
};

//----------------
// Export: Named
//----------------
export { orderCreateReducer, orderDetailsReducer, orderPayReducer };
