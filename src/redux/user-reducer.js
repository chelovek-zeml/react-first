const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      foto: 'https://kartinkin.net/uploads/posts/2022-03/1647121567_1-kartinkin-net-p-kartinki-litso-devushki-1.png',
      followed: false,
      fullName: 'Alex',
      status: "I am a man",
      location: { country: "Belarus", city: "Minsk" },
    },
    {
      id: 2,
      foto: 'https://kartinkin.net/uploads/posts/2022-03/1647121567_1-kartinkin-net-p-kartinki-litso-devushki-1.png',
      followed: false,
      fullName: 'Sveta',
      status: "I am a woman",
      location: { country: "Ukraine", city: "Kiev" },
    },
    {
      id: 3,
      foto: 'https://kartinkin.net/uploads/posts/2022-03/1647121567_1-kartinkin-net-p-kartinki-litso-devushki-1.png',
      followed: true,
      fullName: 'Lena',
      status: "I am a girl",
      location: { country: "Russia", city: "Moscow" },
    },
    {
      id: 4,
      foto: 'https://kartinkin.net/uploads/posts/2022-03/1647121567_1-kartinkin-net-p-kartinki-litso-devushki-1.png',
      followed: false,
      fullName: 'Dima',
      status: "I am a boy",
      location: { country: "Italy", city: "Rome" },
    },
  ],
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
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const followAC = (userId) => {
  return {
    type: FOLLOW,
    userId,
  };
};

export const unfollowAC = (userId) => {
  return {
    type: UNFOLLOW,
    userId,
  };
};

export const setUsersAC = (users) => {
  return {
    type: SET_USERS,
  };
};

export default userReducer;
