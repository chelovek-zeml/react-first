import s from "./header.module.css";
import l from "../../assets/logo-react-svgrepo-com.svg";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <img src={l} alt="logo"></img>
      </div>
      <div className={s.login_block}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </div>
  );
}

export default Header;
