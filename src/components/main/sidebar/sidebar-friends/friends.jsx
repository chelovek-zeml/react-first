import s from "./friends.module.css";
import avatar from "../../../../assets/avatar_icon.svg";

const Friends = (props) => {
    let friendElement = props.friends.map(f => <div className={s.friend__item}>
        <div className={s.friend__avatar}>
          <img src={avatar} alt="img"></img>
        </div>
        <div className={s.friend__name}>{f.name}</div>
      </div>)

    return (<div className={s.friend}>
        <div className={s.friend__title}>Friends</div>
        <div className={s.friends}>
         {friendElement}
        </div>
      </div>)
}

export default Friends;