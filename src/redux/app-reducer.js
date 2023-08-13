import { getLoginThunkCreater } from "./auth-reducer";

const INITIALIZED_SUCCESS = "it/app/INITIALIZED_SUCCESS";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const initializedSuccess = () => {
  return {
    type: INITIALIZED_SUCCESS,
  };
};

export const initializeApp = () => {
  return (dispatch) => {
    let promise = dispatch(getLoginThunkCreater());
    promise.then(() => {
      dispatch(initializedSuccess());
    });
  };
};

export default appReducer;
