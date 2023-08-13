import { profileAPI, usersAPI } from "../api/api";

const ADD_POST = "it/profile/ADD-POST";
const SET_USER_PROFILE = "it/profile/SET-USER-PROFILE";
const SET_STATUS = "it/profile/SET-STATUS";
const DELETE_POST = "it/profile/DELETE-POST";

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
      case DELETE_POST:
      return { ...state, posts: state.posts.filter(p => p.id !== action.postId) };
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

export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const getUsersProfileThunkCreater = (id) => 
  async (dispatch) => {
    const data = await usersAPI.getProfile(id)
      dispatch(setUsersProfile(data));
  };


export const getStatus = (id) => 
  async (dispatch) => {
    const data = await profileAPI.getStatus(id)
      dispatch(setStatus(data));
  };


export const updateStatus = (status) => 
  async (dispatch) => {
    const data = await profileAPI.updateStatus(status)
      if(data.resultCode === 0) {
      dispatch(setStatus(status));
      }
  };

export default profileReducer;
