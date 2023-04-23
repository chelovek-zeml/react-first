import messageReduce from "./message-reduce";
import profileReduce from "./profile-reduce";
import sidebarReduce from "./sidebar-reduce";
import {combineReducers, createStore} from "redux"


let reducers = combineReducers(
    {
        profilePage: profileReduce,
        messagesPage: messageReduce,
        sidebar: sidebarReduce,
    }
);

let store = createStore(reducers);

export default store;