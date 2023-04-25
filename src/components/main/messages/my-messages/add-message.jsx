import React from "react";
import s from "./add-message.module.css";

function AddMessage(props) {
  let newMessageElement = React.createRef();

  let onAddMessage = () => {
    props.addMessage();
  };

  let onChangeMessage = () => {
    let text = newMessageElement.current.value;
    props.changeMessage(text);
  };

  return (
    <div className={s.wrapper_message}>
      <span>My message</span>
      <div className={s.new_message}>
        <div>
          <textarea
            onChange={onChangeMessage}
            ref={newMessageElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={onAddMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
}

export default AddMessage;
