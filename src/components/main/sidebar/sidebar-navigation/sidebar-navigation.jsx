import { NavLink } from "react-router-dom";
import s from "./sidebar-navigation.module.css";

const SelectedLink = () => {
  return (select) => (select.isActive ? s.active : s.a);
};

const SidebarNav = (props) => {
  let state = props.store.getState();
  let navElement =state.sidebar.titles.map((t) => (
    <div className={s.title}>
      <NavLink to={`/${t.title.toLowerCase()}`} className={SelectedLink()}>
        {t.title}
      </NavLink>
    </div>
  ));
  return <div className={s.sidebar__nav}>{navElement}</div>;
};

export default SidebarNav;
