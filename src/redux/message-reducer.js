const ADD_MESSAGE = "it/message/ADD-MESSAGE";

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
  
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: action.newMessage,
      };
      return {...state,
       messages: [...state.messages, newMessage],

      };
    default:
      return state;
  }
};

export const addMessage = (newMessage) => {
  return {
    type: ADD_MESSAGE,
    newMessage
  };
};

export default messageReducer;
