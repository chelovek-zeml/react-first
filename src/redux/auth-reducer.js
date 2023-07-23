import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    
    default:
      return state;
  }
};

export const setAuthUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth},
  };
};


export const getLoginThunkCreater = () => {
  return (dispatch) => {
   return authAPI
    .getLogin()
    .then((data) => {
      if(data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    })
  }
}

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    
    authAPI
    .login(email, password, rememberMe)
    .then((data) => {
      if(data.resultCode === 0) {
       dispatch(getLoginThunkCreater())
      } else {
        let message = data.messages.length > 0 ? data.messages[0] : "Some error";
        dispatch(stopSubmit("login", {_error: message}));
      }
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    authAPI
    .logout()
    .then((data) => {
      if(data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    })
  }
}



export default authReducer;
