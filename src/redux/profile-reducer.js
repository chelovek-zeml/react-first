import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";

let initialState = {
  posts: [
    {
      id: 1,
      message: "Hi, how are you?",
      likesCount: 6,
      avatar: "/avatar_icon.svg",
    },
    {
      id: 2,
      message: "It's my first post",
      likesCount: 23,
      avatar: "/avatar_icon.svg",
    },
    {
      id: 3,
      message: "Cool",
      likesCount: 1,
      avatar: "/avatar_icon.svg",
    },
    {
      id: 4,
      message: "Thanks",
      likesCount: 17,
      avatar: "/avatar_icon.svg",
    },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPost,
        likesCount: 0,
        avatar: "/avatar_icon.svg",
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: "" };
    case SET_STATUS:
      return { ...state, status: action.status };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export const addNewPost = (newPost) => {
  return {
    type: ADD_POST,
    newPost
  };
};
export const setUsersProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};
export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const getUsersProfileThunkCreater = (id) => {
  return (dispatch) => {
    usersAPI.getProfile(id).then((data) => {
      dispatch(setUsersProfile(data));
    });
  };
};

export const getStatus = (id) => {
  return (dispatch) => {
    profileAPI.getStatus(id).then((data) => {
      dispatch(setStatus(data));
    });
  };
};

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then((data) => {
      if(data.resultCode === 0) {
      dispatch(setStatus(status));
      }
    });
  };
};

export default profileReducer;
