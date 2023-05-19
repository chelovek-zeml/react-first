const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
  dialogs: [
    {
      id: 1,
      name: "Sasha",
    },
    {
      id: 2,
      name: "Sveta",
    },
    {
      id: 3,
      name: "Slava",
    },
    {
      id: 4,
      name: "Alex",
    },
    {
      id: 5,
      name: "Marina",
    },
    {
      id: 6,
      name: "Artur",
    },
    {
      id: 7,
      name: "Dima",
    },
    {
      id: 8,
      name: "Angelina",
    },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are you?" },
    { id: 3, message: "Ok" },
  ],
  newPostText: "",
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newPostText,
      };
      return {...state,
       messages: [...state.messages, newMessage],
       newPostText: ""
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return {...state,
        newPostText: action.newPost
      };
    default:
      return state;
  }
};

export const addMessage = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const changeMessage = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newPost: text,
  };
};

export default messageReducer;
