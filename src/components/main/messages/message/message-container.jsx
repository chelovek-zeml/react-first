import { connect } from "react-redux";
import Message from "./message";
import { compose } from "redux";

// const MessageContainer = (props) => {
//     let state = props.store.getState();
    
//     return (<Message store={state} />);
//   }

  let mapStateToProps = (state) => {
    return {
      store: state.messagesPage.messages,
    };
  };

  // const MessageContainer = connect(mapStateToProps)(Message);

  // export default MessageContainer;

  export default compose(connect(mapStateToProps))(Message);