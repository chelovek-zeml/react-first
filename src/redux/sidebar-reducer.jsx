
let initialState = {
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
  }

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer;