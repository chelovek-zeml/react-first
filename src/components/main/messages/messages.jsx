import Dialog from "./dialog/dialog";
import MessageContainer from "./message/message-container.jsx";
import s from "./messages.module.css";
import AddMessageContainer from "./my-messages/add-message-container";

const Messages = (props) => {

  return (
    <div className={s.messages}>
      <div className={s.dialogs}>
        <Dialog store={props.store} />
        <MessageContainer store={props.store} />
      </div>
      <AddMessageContainer store={props.store}/>
    </div>
  );
};

export default Messages;
