import { NavLink } from "react-router-dom";
import s from "./sidebar.module.css";

const SelectedLink = () => {
  return (
    select => select.isActive ? s.active : s.a
  );
}

function Sidebar() {
    return (
      <div className={s.sidebar}>
        <div className={`${s.title} `}><NavLink to="/profile" className={SelectedLink()}>Profile</NavLink></div>
        <div className={s.title}><NavLink to="/messages" className={SelectedLink()}>Messages</NavLink></div>
        <div className={s.title}><NavLink to="/news" className={SelectedLink()}>News</NavLink></div>
        <div className={s.title}><NavLink to="/music" className={SelectedLink()}>Music</NavLink></div>
        <div className={s.title}><NavLink to="/settings" className={SelectedLink()}>Settings</NavLink></div>
      </div>
    );
  }
  
  export default Sidebar;