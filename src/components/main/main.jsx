import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import s from "./main.module.css";
import Profile from "./profile/profile";
import Sidebar from "./sidebar/sidebar";
import Messages from "./messages/messages";
import Music from "./music/music";
import Settings from "./settings/settings";
import News from "./news/news";
import UsersContainer from "./users/users-container";

function Main(props) {
  return (
    <BrowserRouter>
      <div className={s.main}>
        <Sidebar store={props.store} />
        <div className={s.profile}>
          <Routes>
            <Route path="/profile" element={<Profile store={props.store} />} />
            <Route path="/messages/*" element={<Messages store={props.store} />} />
            <Route path="/music" element={<Music />} />
            <Route path="/news" element={<News />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default Main;
