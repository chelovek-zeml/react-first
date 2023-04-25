import React from "react";
import {
  addMessageActionCreater,
  updateNewMessageTextActionCreater,
} from "../../../../redux/message-reduce";
import AddMessage from "./add-message";


function AddMessageContainer(props) {
  let state = props.store.getState();

  let addMessage = () => {
    props.store.dispatch(addMessageActionCreater());
  };

  let changeMessage = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreater(text));
  };

  return (
   <AddMessage changeMessage={changeMessage} addMessage={addMessage} newPostText={state.messagesPage.newPostText}/>
  );
}

export default AddMessageContainer;
