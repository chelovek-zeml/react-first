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
        <Sidebar />
        <div className={s.profile}>
          <Routes>
            <Route path="/profile" element={<Profile posts={props.posts}/>} />
            <Route path="/messages/*" element={<Messages dialogs={props.dialogs} messages={props.messages}/>} />
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
