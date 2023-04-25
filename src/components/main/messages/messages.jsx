import Dialog from "./dialog/dialog";
import Message from "./message/message";
import s from "./messages.module.css";
import AddMessageContainer from "./my-messages/add-message-container";

const Messages = (props) => {
  return (
    <div className={s.messages}>
      <div className={s.dialogs}>
        <Dialog dialogs={props.state.dialogs} />
        <Message messages={props.state.messages} />
      </div>
      <AddMessageContainer store={props.store}/>
    </div>
  );
};

export default Messages;
