import s from "./messages.module.css";
import { NavLink } from "react-router-dom";

const SelectedLink = () => {
  return (select) => (select.isActive ? s.active : s.a);
};

const Dialog = (props) => {
  return (<div className={s.dialog__item}>
    <NavLink className={SelectedLink()} to={`/messages/${props.id}`}>
      {props.name}
    </NavLink>
  </div>);
};

const Message = (props) => {
  return (<div className={s.dialog__message}>{props.message}</div>);
}

const Messages = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialog}>
        <Dialog name="Sasha" id="1"/>
        <Dialog name="Sveta" id="2"/>
        <Dialog name="Slava" id="3"/>
        <Dialog name="Alex" id="4"/>
        <Dialog name="Marina" id="5"/>
        <Dialog name="Artur" id="6"/>
        <Dialog name="Dima" id="7"/>
        <Dialog name="Angelina" id="8"/>
      </div>
      <div className={s.dialog__messages}>
        <Message message="Hi"/>
        <Message message="How are you?"/>
        <Message message="Ok"/>
      </div>
    </div>
  );
};

export default Messages;
