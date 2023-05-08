import s from "./users.module.css";

const Users = (props) => {
  return (
    <div className={s.users}>
      {props.users.map((u) => (
        <div key={u.id}>
          <div>
            <div>
              <img src={u.foto} className={s.userPhoto} />
            </div>
            <div>
              {u.followed 
              ? (<button onClick={() => {props.unfollow(u.id)}}>
                  UnFollow
                </button>)
                 : ( <button onClick={() => { props.follow(u.id)}}>
                  Follow
                </button>)}
            </div>
          </div>
          <div>
            <div>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </div>
            <div>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
