import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import {combineReducers, createStore} from "redux"
import userReducer from "./user-reducer";


let reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messageReducer,
        sidebar: sidebarReducer,
        usersPage: userReducer,
    }
);

let store = createStore(reducers);

export default store;