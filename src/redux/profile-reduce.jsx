const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReduce = (state, action) => {
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