import { NavLink } from "react-router-dom";
import s from "./dialog.module.css";

const SelectedLink = () => {
    return (select) => (select.isActive ? s.active : s.a);
  };
  
  
  const Dialog = (props) => {
    let state = props.store.getState();
    let dialogsElement = state.messagesPage.dialogs.map( d => <div className={s.dialog__item}>
      <NavLink className={SelectedLink()} to={`/messages/${d.id}`}>
        {d.name}
      </NavLink>
    </div>)
  
    return (<div className={s.dialog}>
    {dialogsElement}
  </div>);
  };

  export default Dialog;