const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const messageReduce = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newPostText,
      };
      state.messages.push(newMessage);
      state.newPostText = "";
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newPostText = action.newPost;
      return state;
    default:
      return state;
  }
};

export const addMessageActionCreater = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewMessageTextActionCreater = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newPost: text,
  };
};

export default messageReduce;
