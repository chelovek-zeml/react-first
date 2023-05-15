import s from "./message.module.css";

const Message = (props) => {
    let messagesElement = props.store.map( m => <div key={m.id} className={s.dialog__message}>{m.message}</div>) 
    return (<div className={s.dialog__messages}>
        {messagesElement}
      </div>);
  }

  export default Message