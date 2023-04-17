import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import s from "./main.module.css";
import Profile from "./profile/profile";
import Sidebar from "./sidebar/sidebar";
import Messages from "./messages/messages";
import Music from "./music/music";
import Settings from "./settings/settings";
import News from "./news/news";

function Main(props) {
  return (
    <BrowserRouter>
      <div className={s.main}>
        <Sidebar state={props.state}/>
        <div className={s.profile}>
          <Routes>
            <Route path="/profile" element={<Profile state={props.state.profilePage} addPost={props.addPost}/>} />
            <Route path="/messages/*" element={<Messages state={props.state.messagesPage} />} />
            <Route path="/music" element={<Music/>} />
            <Route path="/news" element={<News/>} />
            <Route path="/settings" element={<Settings/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Main;
