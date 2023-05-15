import s from "./friends.module.css";

const Friends = (props) => {
  let state = props.store.getState();
    let friendElement = state.sidebar.friends.map(f => <div key={f.id} className={s.friend__item}>
        <div className={s.friend__avatar}>
          <img src={require(`../../../../assets${f.avatar}`)} alt="img"></img>
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