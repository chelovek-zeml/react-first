import messageReducer from "./message-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import {combineReducers, createStore} from "redux"


let reducers = combineReducers(
    {
        profilePage: profileReducer,
        messagesPage: messageReducer,
        sidebar: sidebarReducer,
    }
);

let store = createStore(reducers);

export default store;