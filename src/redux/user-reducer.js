import { usersAPI } from "../api/api";

const FOLLOW = "it/user/FOLLOW";
const UNFOLLOW = "it/user/UNFOLLOW";
const SET_USERS = "it/user/SET_USERS";
const SET_CURRENT_PAGE = "it/user/SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "it/user/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "it/user/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "it/user/TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [2, 3],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.count,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId),
      };
    default:
      return state;
  }
};

export const follow = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};
export const unfollow = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};
export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};
export const setCurrentPage = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage,
  };
};
export const setTotalUsersCount = (totalCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count: Math.ceil(totalCount / 1),
  };
};
export const toggleIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching,
  };
};
export const toggleFollowingProgress = (isFetching, userId) => {
  return {
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId,
  };
};

export const getUsersThunkCreater = (currentPage, pageSize) => 
async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));

    const data = await usersAPI.getUsers(currentPage, pageSize)
      
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
  };

export const getFollowingThunkCreater = (id) => 
  async (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));
    const data = await usersAPI.getFollow(id)
      if (data.resultCode === 0) {
        dispatch(follow(id));
      }
      dispatch(toggleFollowingProgress(false, id));
  }

export const getUnfollowingThunkCreater = (id) => 
  async (dispatch) => {
    dispatch(toggleFollowingProgress(false, id));
    const data = await usersAPI.getUnfollow(id)
      if (data.resultCode === 0) {
        dispatch(unfollow(id));
      }
      dispatch(toggleFollowingProgress(false, id));
  }

export default userReducer;
