const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"

let store = {
  _callSubscraber() {},
  _state: {
    profilePage: {
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
    },
    messagesPage: {
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
    },
    sidebar: {
      friends: [
        { id: 1, name: "Sasha", avatar: "/avatar_icon.svg" },
        { id: 2, name: "Sveta", avatar: "/avatar_icon.svg" },
        { id: 3, name: "Slava", avatar: "/avatar_icon.svg" },
      ],
      titles: [
        { id: 1, title: "Profile" },
        { id: 2, title: "Messages" },
        { id: 3, title: "News" },
        { id: 4, title: "Music" },
        { id: 5, title: "Settings" },
      ],
    },
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscraber = observer;
  },

  dispatch(action) {
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
        avatar: "/avatar_icon.svg",
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscraber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newPost;
      this._callSubscraber(this._state);
    } else if (action.type === "ADD-MESSAGE") {
      let newMessage = {
        id: 5,
        message: this._state.messagesPage.newPostText,
      };
      this._state.messagesPage.messages.push(newMessage);
      this._state.messagesPage.newPostText = "";
      this._callSubscraber(this._state);
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
      this._state.messagesPage.newPostText = action.newPost;
      this._callSubscraber(this._state);
    }
  },
  // addPost() {
  //   let newPost = {
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0,
  //     avatar: "/avatar_icon.svg",
  //   };
  //   this._state.profilePage.posts.push(newPost);
  //   this._state.profilePage.newPostText = "";
  //   this._callSubscraber(this._state);
  // },
  // updateNewPost(newPost) {
  //   this._state.profilePage.newPostText = newPost;
  //   this._callSubscraber(this._state);
  // },
};

export const addPostActionCreater = () => {
  return {
    type: ADD_POST,
  };
};

export const addMessageActionCreater = () => {
  return {
    type: ADD_MESSAGE,
  };
};

export const updateNewPostTextActionCreater = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newPost: text,
  };
};

export const updateNewMessageTextActionCreater = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newPost: text,
  };
};

export default store;
