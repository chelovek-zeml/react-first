import Dialog from "./dialog/dialog";
import Message from "./message/message";
import s from "./messages.module.css";
import AddMessage from "./my-messages/add-message";

const Messages = (props) => {
  return (
    <div className={s.messages}>
      <div className={s.dialogs}>
        <Dialog dialogs={props.state.dialogs} />
        <Message messages={props.state.messages} />
      </div>
      <AddMessage dispatch={props.dispatch} newPostText={props.state.newPostText}/>
    </div>
  );
};

export default Messages;
