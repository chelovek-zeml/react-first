import Dialog from "./dialog/dialog";
import Message from "./message/message";
import s from "./messages.module.css";

const Messages = (props) => {
  return (
    <div className={s.dialogs}>
        <Dialog dialogs={props.dialogs}/>
        <Message messages={props.messages}/>
    </div>
  );
};

export default Messages;
