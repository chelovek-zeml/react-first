const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

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
  newPostText: "",
};

const profileReduce = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
        avatar: "/avatar_icon.svg",
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newPost;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreater = () => {
  return {
    type: ADD_POST,
  };
};

export const updateNewPostTextActionCreater = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPost: text,
  };
};

export default profileReduce;
