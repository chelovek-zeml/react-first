import { compose } from "redux";
import {
  addMessage,
} from "../../../../redux/message-reducer";
import AddMessage from "./add-message";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostText: state.messagesPage.newPostText,
  };
};

export default compose(connect(
  mapStateToProps,
  {
    addMessage,
  }
))(AddMessage);