import React from "react";
import {Route, Routes } from "react-router-dom";
import s from "./main.module.css";
import Sidebar from "./sidebar/sidebar";
import Messages from "./messages/messages";
import Music from "./music/music";
import Settings from "./settings/settings";
import News from "./news/news";
import UsersContainer from "./users/users-container";
import ProfileContainer from "./profile/profile-container";

function Main(props) {
  return (
    
      <div className={s.main}>
        <Sidebar store={props.store} />
        <div className={s.profile}>
          <Routes>
            <Route path="/profile/:userId?" element={<ProfileContainer store={props.store} />} />
            <Route path="/messages/*" element={<Messages store={props.store} />} />
            <Route path="/music" element={<Music />} />
            <Route path="/news" element={<News />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    
  );
}

export default Main;
