import s from "./message.module.css";

const Message = (props) => {
    let messagesElement = props.messages.map( m => <div className={s.dialog__message}>{m.message}</div>) 
    return (<div className={s.dialog__messages}>
        {messagesElement}
      </div>);
  }

  export default Message