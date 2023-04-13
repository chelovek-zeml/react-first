import s from "./sidebar.module.css";

import SidebarNav from "./sidebar-navigation/sidebar-navigation";
import Friends from "./sidebar-friends/friends";

function Sidebar(props) {
  return (
    <div className={s.sidebar}>
      <SidebarNav titles={props.state.sidebar.titles}/>
      <Friends friends={props.state.sidebar.friends}/>
    </div>
  );
}

export default Sidebar;
