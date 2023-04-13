import s from "./header.module.css";
import l from "../../assets/logo-react-svgrepo-com.svg";

function Header() {
    return (
      <div className={s.header}>
        <div className={s.logo}>
            <img src={l} alt="logo"></img>
        </div>
      </div>
    );
  }
  
  export default Header;