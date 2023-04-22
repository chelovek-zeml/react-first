import React from "react";
import { addMessageActionCreater, updateNewMessageTextActionCreater } from "../../../../redux/state";
import s from "./add-message.module.css";

function AddMessage(props) {
  let newMessageElement = React.createRef();

  let addNewMessage = () => {
    props.dispatch(addMessageActionCreater());
  };

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(updateNewMessageTextActionCreater(text));
  }

  return (
    <div className={s.wrapper_message}>
      <span>My message</span>
      <div className={s.new_message}>
        <div>
          <textarea
          onChange={onMessageChange}
          ref={newMessageElement}
          value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addNewMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
}

export default AddMessage;
