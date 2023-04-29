import s from "./sidebar.module.css";

import SidebarNav from "./sidebar-navigation/sidebar-navigation";
import Friends from "./sidebar-friends/friends";

function Sidebar(props) {
  return (
    <div className={s.sidebar}>
      <SidebarNav store={props.store}/>
      <Friends store={props.store}/>
    </div>
  );
}

export default Sidebar;
