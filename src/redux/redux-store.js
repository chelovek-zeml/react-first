import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import {combineReducers, createStore} from "redux"
import userReducer from "./user-reducer";
import authReducer from "./auth-reducer";


let reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messageReducer,
        sidebar: sidebarReducer,
        usersPage: userReducer,
        auth: authReducer,
    }
);

let store = createStore(reducers);

export default store;