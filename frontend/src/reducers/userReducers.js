import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
} from "../constants/userConstants";

//--------------------
// User Login Reducer
//--------------------
const userLoginReducer = (state = {}, action) => {
  if (action.type === USER_LOGIN_REQUEST) {
    return { loading: true };
  }
  if (action.type === USER_LOGIN_SUCCESS) {
    return { loading: false, userInfo: action.payload };
  }
  if (action.type === USER_LOGIN_FAIL) {
    return { loading: false, error: action.payload };
  }
  if (action.type === USER_LOGOUT) {
    return {};
  }
  // Default Fallback
  return state;
};

//--------------------
// User Register Reducer
//--------------------
const userRegisterReducer = (state = {}, action) => {
  if (action.type === USER_REGISTER_REQUEST) {
    return { loading: true };
  }
  if (action.type === USER_REGISTER_SUCCESS) {
    return { loading: false, userInfo: action.payload };
  }
  if (action.type === USER_REGISTER_FAIL) {
    return { loading: false, error: action.payload };
  }

  // Default Fallback
  return state;
};

//----------------
// Export: Named
//----------------
export { userLoginReducer, userRegisterReducer };
