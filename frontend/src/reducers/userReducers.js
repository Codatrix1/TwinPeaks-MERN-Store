import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_RESET,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_RESET,
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

//-----------------------
// User Details Reducer
//-----------------------
const userDetailsReducer = (state = { user: {} }, action) => {
  if (action.type === USER_DETAILS_REQUEST) {
    return { ...state, loading: true };
  }
  if (action.type === USER_DETAILS_SUCCESS) {
    return { loading: false, user: action.payload };
  }
  if (action.type === USER_DETAILS_FAIL) {
    return { loading: false, error: action.payload };
  }
  if (action.type === USER_DETAILS_RESET) {
    return { user: {} };
  }

  // Default Fallback
  return state;
};

//----------------------------
// User Update Profile Reducer
//----------------------------
const userUpdateProfileReducer = (state = {}, action) => {
  if (action.type === USER_UPDATE_PROFILE_REQUEST) {
    return { loading: true };
  }
  if (action.type === USER_UPDATE_PROFILE_SUCCESS) {
    return { loading: false, success: true, userInfo: action.payload };
  }
  if (action.type === USER_UPDATE_PROFILE_FAIL) {
    return { loading: false, error: action.payload };
  }
  if (action.type === USER_UPDATE_PROFILE_RESET) {
    return {};
  }

  // Default Fallback
  return state;
};

//----------------
// Export: Named
//----------------
export {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
};
