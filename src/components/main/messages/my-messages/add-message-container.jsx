
import {
  addMessageActionCreater,
  updateNewMessageTextActionCreater,
} from "../../../../redux/message-reduce";
import AddMessage from "./add-message";
import { connect } from "react-redux";

// function AddMessageContainer(props) {
//   let state = props.store.getState();

//   let addMessage = () => {
//     props.store.dispatch(addMessageActionCreater());
//   };

//   let changeMessage = (text) => {
//     props.store.dispatch(updateNewMessageTextActionCreater(text));
//   };

//   return (
//     <AddMessage
//       changeMessage={changeMessage}
//       addMessage={addMessage}
//       newPostText={state.messagesPage.newPostText}
//     />
//   );
// }

let mapStateToProps = (state) => {
  return {
    newPostText: state.messagesPage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    changeMessage: (text) => {
      dispatch(updateNewMessageTextActionCreater(text));
    },
    addMessage: () => {
      dispatch(addMessageActionCreater());
    }
  };
};

const AddMessageContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessage);

export default AddMessageContainer;
